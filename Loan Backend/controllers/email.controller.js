const { jsPDF } = require("jspdf");
const nodemailer = require("nodemailer");

// Email function
const sendEmail = async (req, res) => {
  const { formData, imageData } = req.body;

  // Validate input
  if (!formData || !imageData || !Array.isArray(imageData)) {
    console.log("formdata:", formData);
    console.log("imagedata:", imageData);

    return res
      .status(400)
      .json({ message: "Invalid formData or imageData provided." });
  }

  console.log(formData);
  console.log(imageData);

  // Validate imageData content
  const invalidImages = imageData.filter((img) => !img.base64 || !img.mimeType);
  if (invalidImages.length > 0) {
    return res
      .status(400)
      .json({ message: "Invalid image data detected in imageData." });
  }

  try {
    const pdfDoc = new jsPDF();

    const marginX = 10; // Left margin
    const pageWidth = pdfDoc.internal.pageSize.width; // Page width
    const pageHeight = pdfDoc.internal.pageSize.height; // Page height
    const maxWidth = pageWidth - marginX * 2; // Max width for text
    const lineHeight = 10; // Line height for text

    const title = "Loan Request Form Submission";
    const titleFontSize = 16; // Title font size
    const titleYPosition = 20; // Y-position for the title
    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.setFontSize(titleFontSize);

    // Center the title
    const titleWidth = pdfDoc.getTextWidth(title);
    const titleXPosition = (pageWidth - titleWidth) / 2;

    pdfDoc.text(title, titleXPosition, titleYPosition);

    // Add underline
    const underlinePadding = 2; // Space between text and underline
    pdfDoc.line(
      titleXPosition,
      titleYPosition + underlinePadding,
      titleXPosition + titleWidth,
      titleYPosition + underlinePadding
    );

    let cursorY = titleYPosition + 10; // Adjust Y position for content below title

    Object.keys(formData).forEach((key) => {
      const text = `${key}: ${formData[key]}`;

      // Wrap text to fit within page width
      const wrappedText = pdfDoc.splitTextToSize(text, maxWidth);

      // Check if text exceeds page height
      if (cursorY + wrappedText.length * lineHeight > pageHeight) {
        pdfDoc.addPage(); // Add new page
        cursorY = 10; // Reset Y position for new page
      }

      pdfDoc.text(wrappedText, marginX, cursorY); // Add text to PDF
      cursorY += wrappedText.length * lineHeight; // Adjust cursor for multi-line text
    });

    // Generate PDF buffer
    const pdfBuffer = pdfDoc.output("arraybuffer");

    // Debugging: Log buffer size
    console.log("PDF Buffer Size:", pdfBuffer.byteLength);

    // Convert buffer to Node.js Buffer
    const pdfNodeBuffer = Buffer.from(pdfBuffer);

    // Attach images as files
    const imageAttachments = imageData.map((image, index) => ({
      filename:
        image.name || `image_${index + 1}.${image.mimeType.split("/")[1]}`,
      content: Buffer.from(image.base64, "base64"),
      contentType: image.mimeType,
    }));

    // Email options
    const mailOptions = {
      from: process.env.EMAIL,
      to: ["temiladeabdulbasit2002@gmail.com", "muritalaabimbola@gmail.com"],
      subject: "Form Data Submission",
      text: "Please find the attached PDF and uploaded images.",
      attachments: [
        {
          filename: "formData.pdf",
          content: pdfNodeBuffer,
          contentType: "application/pdf",
        },
        ...imageAttachments, // Add image attachments
      ],
    };

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Adjust based on your email provider
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD, // Use environment variables for security
      },
    });

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error generating PDF or sending email:", error);
    res.status(500).json({ message: "Failed to process the request." });
  }
};

module.exports = { sendEmail };

import { useForm } from "./FormContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";

export default function SubmitButton() {
  const { formData, imageData, validateForm } = useForm();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  if (!formData || !imageData || !validateForm) {
    console.error(
      "useForm returned undefined. Ensure SubmitButton is wrapped in FormProvider."
    );
    return null;
  }

  const unrequiredFields = ["Applicant Nationality"];

  const handleSubmit = async () => {
    const isFormValid = validateForm(formData, unrequiredFields);
    console.log("Is form valid:", isFormValid);
    console.log(formData);

    if (!isFormValid) {
      toast.error("Fill all inputs");
      return;
    }

    const order = [
      "Applicant First Name",
      "Applicant Middle Name",
      "Applicant Last Name",
      "Applicant Date of Birth",
      "Applicant ID Type",
      "Applicant ID Number",
      "Applicant Gender",
      "Applicant BVN",
      "Applicant First Telephone Number",
      "Applicant Second Telephone Number",
      "Applicant Marital Status",
      "Applicant State of Residence",
      "Applicant LGA of Residence",
      "Applicant's Spouse's First Name",
      "Applicant's Spouse's Middle Name",
      "Applicant's Spouse's Last Name",
      "Applicant's Spouse's Date of Birth",
      "Applicant's Spouse's First Telephone Number",
      "Applicant's Spouse's Second Telephone Number",
      "Next of Kin's Name",
      "Next of Kin Gender",
      "Next of Kin's Relationship with Applicant",
      "Next of Kin's Telephone Number",
      "Business Name",
      "Business Type",
      "Business Address",
      "Business Activity",
      "Location Since",
      "Business Since",
      "Business TIN Number",
      "Requested Loan Amount",
      "Suggested Monthly Loan Return",
      "Loan Purpose",
      "Investment Plan",
      "Do/did you/your spouse have a loan with another FI",
      "Discovered UnilagMFB through",
      "Applicant's Signature",
      "Applicant's Signature Date",
    ];

    const sortedFormData = order.reduce((acc, fieldName) => {
      if (formData[fieldName] !== undefined) {
        acc[fieldName] = formData[fieldName];
      }
      return acc;
    }, {});

    try {
      setIsPending(true);
      const response = await axios.post(
        "http://localhost:5002/email/submit-loan",
        {
          formData: sortedFormData,
          imageData,
        }
      );

      if (response.status === 200) {
        toast.success("Form Submitted");
      } else {
        setError("Error Submitting");
        toast.error(error);
        console.error("Submission error:", errorText);
      }
    } catch (error) {
      console.error(
        "Error details:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <button
        onClick={handleSubmit}
        className="bg-[#7d3330] text-white py-2 px-3 rounded"
        disabled={isPending ? true : false}
      >
        {isPending ? "Submitting" : "Submit"}
      </button>
      <ToastContainer />
    </>
  );
}

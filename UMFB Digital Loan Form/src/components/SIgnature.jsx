import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "./FormContext";
import { format, parse } from "date-fns";

function Signature({ name, imgName, isDate = true, label, required = true }) {
  const {
    formData,
    updateField,
    handleImageUpload,
    retainImage,
    imagePreview,
    setImageData,
  } = useForm();

  const handleDateChange = (date) => {
    // Format the date to 'dd/MM/yyyy' before saving it as a string
    const formattedDate = date ? format(date, "dd/MM/yyyy") : "";
    updateField(name, formattedDate); // Update formData with the formatted date string
  };

  const handleImageChange = (e) => {
    handleImageUpload(e, imgName); // Upload image to context
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        retainImage(`${imgName}-preview`, reader.result);
        updateField(`${imgName}`, "true"); // Persist preview in formData
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClear = () => {
    retainImage(`${imgName}-preview`, null); // Clear preview from formData
    setImageData((prevData) =>
      prevData.filter((image) => image.name !== imgName)
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        {/* File Input and Preview */}
        <label
          htmlFor={imgName} // Use imgName for the input ID
          className="flex flex-col items-center cursor-pointer"
        >
          <div
            className="w-32 h-32 mb-2 border border-gray-300 flex items-center justify-center"
            style={{
              backgroundColor: imagePreview[`${imgName}-preview`]
                ? "transparent"
                : "#f0f0f0",
            }}
          >
            {imagePreview[`${imgName}-preview`] ? (
              <img
                src={imagePreview[`${imgName}-preview`]}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-500 text-center">{label}</span>
            )}
          </div>
          <input
            id={imgName}
            type="file"
            accept="image/*"
            name={imgName}
            required={required}
            className="hidden"
            onChange={handleImageChange} // Update preview and upload image
          />
        </label>

        {/* Clear Button */}
        {imagePreview[`${imgName}-preview`] && (
          <button
            onClick={handleImageClear} // Clear image when clicked
            className="bg-red-500 text-white p-2 rounded mt-2"
            z
          >
            Remove Image
          </button>
        )}

        {isDate && (
          <DatePicker
            selected={
              formData[name] && formData[name] !== ""
                ? parse(formData[name], "dd/MM/yyyy", new Date())
                : null
            }
            onChange={handleDateChange} // Update date field in formData
            className="border border-gray-300 p-2 rounded-lg shadow-sm mt-4 focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholderText="Select a date"
            name={name}
            dateFormat={"dd/MM/yyyy"}
          />
        )}
      </div>
    </div>
  );
}

export default Signature;

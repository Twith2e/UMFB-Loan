import { createContext, useContext, useState } from "react";
import axios from "axios";
import Required from "./RequiredFields";

const FormContext = createContext();

export const useForm = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [imageData, setImageData] = useState([]);
  const [imagePreview, setImagePreview] = useState({});
  const [errors, setErrors] = useState({});
  const [LGA, setLGA] = useState([]);
  const [signatoryCount, setCount] = useState(null);

  const { requiredFields } = Required();

  const updateField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({
      ...prev,
      [name]: value ? undefined : "This field is required",
    }));
  };

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function newErrors(formData, requiredFields) {
    const errors = {};

    for (const field of requiredFields) {
      const value = formData[field];

      if (value === undefined || value === "") {
        errors[field] = "This field is required";
      } else if (
        field.toLowerCase().includes("email") &&
        !validateEmail(value)
      ) {
        errors[field] = "Invalid email address";
      }
    }

    return errors; // Returns an object containing errors for all invalid fields
  }

  function validateForm(formData, unrequiredFields) {
    if (typeof formData !== "object" || Array.isArray(formData)) {
      console.error("formData must be an object.");
      return false;
    }

    if (!Array.isArray(unrequiredFields)) {
      console.error("unrequiredFields must be an array.");
      return false;
    }

    const filteredRequiredFields = requiredFields.filter(
      (field) => !unrequiredFields.includes(field)
    );

    const errors = newErrors(formData, filteredRequiredFields);

    setErrors(errors); // Update the state with validation errors

    if (Object.keys(errors).length > 0) {
      console.error("Validation failed. Errors:", errors);
      return false;
    }

    return true;
  }

  const loadLGA = async (state) => {
    try {
      const res = await axios.get(
        `https://nga-states-lga.onrender.com/?state=${state}`
      );

      // Ensure the response is an array, even if the data is not as expected
      const lgas = Array.isArray(res.data) ? res.data : [];

      // Update the LGA state with a validated array
      setLGA(lgas);
    } catch (error) {
      console.error("Error fetching LGAs:", error);

      // In case of an error, set LGA to an empty array to prevent mapping errors
      setLGA([]);
    }
  };

  const updateImage = (image) => {
    setImageData((prev) => [...prev, image]); // Append to the array
  };

  const retainImage = (name, value) => {
    setImagePreview((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (event, name) => {
    const files = event.target.files;

    const promises = Array.from(files).map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve({
            base64: reader.result.split(",")[1], // Extract Base64 string
            mimeType: file.type, // Get MIME type
            name,
          });
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises)
      .then((uploadedImages) => {
        console.log(uploadedImages);
        setImageData((prev) => [...prev, ...uploadedImages]); // Merge new images
      })
      .catch((err) => console.error("Error uploading images:", err));
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateField,
        imageData,
        updateImage,
        handleImageUpload,
        retainImage,
        imagePreview,
        errors,
        validateForm,
        loadLGA,
        LGA,
        errors,
        setCount,
        signatoryCount,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

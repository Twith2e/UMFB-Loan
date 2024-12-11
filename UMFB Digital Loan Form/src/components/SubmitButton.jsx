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

    if (!isFormValid) {
      toast.error("Fill all inputs");
      return;
    }

    try {
      setIsPending(true);
      const response = await axios.post(
        "http://localhost:5002/email/submit-loan",
        {
          formData,
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
        className="bg-[#7d3330] text-white p-2 rounded"
        disabled={isPending ? true : false}
      >
        {isPending ? "Loading" : "Submit"}
      </button>
      <ToastContainer />
    </>
  );
}

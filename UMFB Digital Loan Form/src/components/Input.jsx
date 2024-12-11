import { useForm } from "./FormContext";

export default function Input({ label, name, type, placeholder }) {
  const { formData, updateField } = useForm();
  return (
    <div className="flex gap-2 items-center">
      <span className="whitespace-nowrap">{label}:</span>
      <input
        className="w-full border outline-none p-2"
        type={type}
        name={name}
        value={formData[name] || ""}
        onChange={(e) => updateField(name, e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

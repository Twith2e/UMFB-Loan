import { useForm } from "./FormContext";
import { format, parse } from "date-fns";

export default function Input({ label, name, type, placeholder }) {
  const { formData, updateField } = useForm();

  const handleDateChange = (e) => {
    const dateString = e.target.value;
    if (dateString) {
      const date = parse(dateString, "yyyy-MM-dd", new Date());
      const formattedDate = format(date, "dd/MM/yyyy");
      updateField(name, formattedDate);
    } else {
      updateField(name, "");
    }
  };
  return (
    <div className="flex gap-2 items-center">
      <span className="whitespace-nowrap">{label}:</span>
      <input
        className="w-full border outline-none p-2"
        type={type}
        name={name}
        value={
          type !== "date"
            ? formData[name] || ""
            : formData[name]
            ? format(
                parse(formData[name], "dd/MM/yyyy", new Date()),
                "yyyy-MM-dd"
              )
            : ""
        }
        onKeyDown={
          type === "number"
            ? (e) => {
                if (["e", "E", "+", "-"].includes(e.key)) {
                  e.preventDefault();
                }
              }
            : undefined
        }
        min={1}
        onChange={
          type !== "date"
            ? (e) => updateField(name, e.target.value)
            : handleDateChange
        }
        placeholder={placeholder}
      />
    </div>
  );
}

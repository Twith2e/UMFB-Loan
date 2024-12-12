import { useForm } from "./FormContext";

export default function CheckBox({ text, name }) {
  const { formData, updateField } = useForm();
  return (
    <div className="flex gap-2">
      <span>{text}</span>
      <input
        className="w-6 h-6"
        type="checkbox"
        name={name}
        checked={formData["Client Status"] === text}
        onChange={() => updateField("Client Status", text)}
        id="check"
      />
    </div>
  );
}

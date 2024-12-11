export default function CheckBox({ text, name }) {
  return (
    <div className="flex gap-2">
      <span>{text}</span>
      <input className="w-6 h-6" type="checkbox" name={name} id={name} />
    </div>
  );
}

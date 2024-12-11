import Input from "./Input";
import { useForm } from "./FormContext";

export default function BusinessInfos() {
  const { formData, updateField } = useForm();

  const handleChange = (e) => {
    const name = e.target.name;
    updateField(name, e.target.value);
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="bg-red-900 text-white">
        <h2>BUSINESS INFORMATION</h2>
      </div>
      <div className="row">
        <div className="col-12">
          <Input
            label="Business Name"
            name="Business Name"
            type="text"
            placeholder="Business Name"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 flex gap-2 items-center">
          <span className="whitespace-nowrap">Business Type:</span>
          <select
            className="border p-2 w-full"
            name="Business Type"
            id=""
            value={formData["Business Type"]}
            onChange={handleChange}
          >
            <option disabled value="">
              Business Type
            </option>
            <option value="No registration">No registration</option>
            <option value="Sole proprietor">Sole proprietor</option>
            <option value="Ltd">Ltd</option>
            <option value="Partnership">Partnership</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Input
            label="Business Address"
            name="Business Address"
            type="text"
            placeholder="Business Address"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Input
            label="Business Activity"
            name="Business Activity"
            type="text"
            placeholder="Business Activity"
          />
        </div>
      </div>
      <div className="row flex justify-between">
        <div className="col-4">
          <Input
            label="Location Since"
            name="Current Location Period"
            type="date"
            placeholder="Since when have you been at current location?"
          />
        </div>
        <div className="col-4">
          <Input
            label="Business Since"
            name="Current Business Period"
            type="date"
            placeholder="Since when have you been in this business?"
          />
        </div>
        <div className="col-4">
          <Input
            label="TIN Number"
            name="Business TIN Number"
            type="number"
            placeholder="TIN Number"
          />
        </div>
      </div>
    </div>
  );
}

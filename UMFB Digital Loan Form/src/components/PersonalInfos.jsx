import Input from "./Input";
import DropDown from "./StateDropdown";
import { useForm } from "./FormContext";

export default function Personals() {
  const { formData, updateField } = useForm();

  const handleChange = (e) => {
    const name = e.target.name;
    updateField(name, e.target.value);
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="bg-red-900 text-white">
        <h2>PERSONAL INFORMATION</h2>
      </div>
      <div className="row lg-d-flex flex-lg-row gap-lg-0 gap-3">
        <div className="col-12 col-lg-6">
          <Input
            label={"First Name (Applicant)"}
            name="Applicant First Name"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="col-12 col-lg-6">
          <Input
            label={"Middle Name"}
            name="Applicant Middle Name"
            type="text"
            placeholder="Middle Name"
          />
        </div>
      </div>
      <div className="row flex-lg-row gap-lg-0 gap-3 align-item-center">
        <div className="col-12 col-lg-6">
          <Input
            label="Last Name"
            name="Applicant Last Name"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="col-12 col-lg-6">
          <Input
            label="Date of Birth"
            name="Applicant Date of Birth"
            type="date"
          />
        </div>
      </div>
      <div className="row d-flex flex-column gap-3 flex-lg-row gap-lg-0">
        <div className="col-12 col-lg-4">
          <Input
            label="Type of ID"
            name="Applicant ID Type"
            type="text"
            placeholder="ID Type"
          />
        </div>
        <div className="col-12 col-lg-4">
          <Input
            label="ID Number"
            name="Applicant ID Number"
            type="number"
            placeholder="ID Number"
          />
        </div>
        <div className="col-12 col-lg-4 flex gap-2 items-center">
          <span>Sex:</span>
          <select
            className="border p-2 outline-none w-full"
            name="Applicant Gender"
            id=""
            value={formData["Applicant Gender"] || ""}
            onChange={handleChange}
          >
            <option disabled value="">
              Select a gender
            </option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </div>
      </div>
      <div className="row d-flex flex-column flex-lg-row gap-lg-0 gap-3">
        <div className="col-12 col-lg-6">
          <Input
            label="BVN"
            name="Applicant BVN"
            type="number"
            placeholder="BVN"
          />
        </div>
        <div className="col-12 col-lg-6">
          <Input
            label="Nationality (non-Nigerians only)"
            name="Applicant Nationality"
            type="text"
            placeholder="Nationality (non-Nigerians)"
          />
        </div>
      </div>
      <div className="row flex flex-col gap-3 flex-lg-row gap-lg-0">
        <div className="col-12 col-lg-6">
          <Input
            label="Telephone Number 1"
            name="Applicant First Telephone Number"
            type="number"
            placeholder="Telephone Number 1"
          />
        </div>
        <div className="col-12 col-lg-6">
          <Input
            label="Telephone Number 2"
            name="Applicant Second Telephone Number"
            type="number"
            placeholder="Telephone Number 2"
          />
        </div>
      </div>
      <div className="row flex flex-col gap-3 flex-lg-row gap-lg-0">
        <div className="col-12 flex gap-2 items-center">
          <span className="whitespace-nowrap">Marital Status:</span>
          <select
            className="border p-2 w-full outline-none"
            name="Applicant Marital Status"
            id=""
            value={formData["Applicant Marital Status"] || ""}
            onChange={handleChange}
          >
            <option disabled value="">
              Marital Status
            </option>
            <option value="Married">Married</option>
            <option value="Single">Single</option>
            <option value="Seperated">Seperated</option>
            <option value="Widow">Widow</option>
          </select>
        </div>
      </div>
      <DropDown
        stateName="Applicant State of Residence"
        LGAName="Applicant LGA of Residence"
      />
      <div className="row flex flex-col gap-3 flex-lg-row gap-lg-0">
        <div className="col-12 col-lg-6">
          <Input
            label="First Name (Spouse)"
            name="Applicant's Spouse's First Name"
            type="text"
            placeholder="First Name (Spouse)"
          />
        </div>
        <div className="col-12 col-lg-6">
          <Input
            label="Middle Name (Spouse)"
            name="Applicant's Spouse's Middle Name"
            type="text"
            placeholder="Middle Name (Spouse)"
          />
        </div>
      </div>
      <div className="row flex flex-col gap-3 flex-lg-row gap-lg-0">
        <div className="col-12 col-lg-6">
          <Input
            label="Last Name (Spouse)"
            name="Applicant's Spouse's Last Name"
            type="text"
            placeholder="Last Name (Spouse)"
          />
        </div>
        <div className="col-12 col-lg-6">
          <Input
            label="Date of Birth (Spouse)"
            name="Applicant's Spouse's Date of Birth"
            type="date"
            placeholder="Date of Birth (Spouse)"
          />
        </div>
      </div>
      <div className="row flex flex-col gap-3 flex-lg-row gap-lg-0">
        <div className="col-12 col-lg-6">
          <Input
            label="Telephone Number 1"
            name="Applicant's Spouse's First Telephone Number"
            type="number"
            placeholder="Telephone Number 1"
          />
        </div>
        <div className="col-12 col-lg-6">
          <Input
            label="Telephone Number 2"
            name="Applicant's Spouse's Second Telephone Number"
            type="number"
            placeholder="Telephone Number 2"
          />
        </div>
      </div>
      <div className="row flex flex-col gap-3 flex-lg-row gap-lg-0">
        <div className="col-12 col-lg-8">
          <Input
            label="Name of Next of Kin"
            name="Next of Kin's Name"
            type="text"
            placeholder="Name of Next of Kin"
          />
        </div>
        <div className="col-12 flex gap-2 items-center col-lg-4">
          <span>Sex:</span>
          <select
            className="border p-2 outline-none w-full"
            name="Next of Kin Gender"
            id=""
            value={formData["Next of Kin Gender"] || ""}
            onChange={handleChange}
          >
            <option className="text-gray-500" disabled value="">
              Select a gender
            </option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </div>
      </div>
      <div className="row flex flex-col gap-3 flex-lg-row gap-lg-0">
        <div className="col-12 col-lg-6">
          <Input
            label="Relationship"
            name="Next of Kin's Relationship with Applicant"
            type="text"
            placeholder="Next of Kin's Relationship with Applicant"
          />
        </div>
        <div className="col-12 col-lg-6">
          <Input
            label="Telephone Number"
            name="Next of Kin's Telephone Number"
            type="number"
            placeholder="Next of Kin's Telephone Number"
          />
        </div>
      </div>
    </div>
  );
}

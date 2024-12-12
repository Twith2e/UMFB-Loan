import Input from "./Input";
import { useForm } from "./FormContext";

export default function LoanRequest() {
  const { formData, updateField } = useForm();

  const handleChange = (e) => {
    const name = e.target.name;
    updateField(name, e.target.value);
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="bg-red-900 text-white">
        <h2>LOAN REQUEST</h2>
      </div>
      <div className="row">
        <div className="col-12">
          <Input
            label="Loan Amount"
            name="Requested Loan Amount"
            type="number"
            placeholder="How much loan are you requesting for?"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Input
            label="How much can you easily pay per month?"
            name="Suggested Monthly Loan Return"
            type="number"
            placeholder="How much can you easily pay per month?"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 w-full flex gap-2 items-center">
          <span className="whitespace-nowrap">Loan Purpose</span>
          <select
            className="border p-2 outline-none"
            name="Loan Purpose"
            id=""
            value={formData["Loan Purpose"] || ""}
            onChange={handleChange}
          >
            <option disabled value="">
              Loan Purpose
            </option>
            <option value="Working Capital">Working Capital</option>
            <option value="Fixed Asset">Fixed Asset</option>
            <option value="New Activity">New Activity</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <label className="mb-2 font-bold" htmlFor="plan">
            Investment Plan
          </label>
          <textarea
            className="w-full border p-3 outline-none"
            name="Investment Plan"
            id="plan"
            cols="30"
            rows="10"
            value={formData["Investment Plan"] || ""}
            onChange={handleChange}
            placeholder="Detail on Investment Plan"
          ></textarea>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="col-12 flex gap-2 items-center">
            <span className="md:whitespace-nowrap">
              Who is currently or has/have had a loan with another FI?
            </span>
            <select
              className="border p-2 w-full outline-none"
              name="Do/did you/your spouse have a loan with another FI"
              id=""
              value={
                formData[
                  "Do/did you/your spouse have a loan with another FI"
                ] || ""
              }
              onChange={handleChange}
            >
              <option disabled value="">
                Pick an applicable option
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="col-12 flex gap-2 items-center">
            <span className="whitespace-nowrap">
              How did you hear about UnilagMFB?
            </span>
            <select
              className="border p-2 w-full outline-none"
              name="Discovered UnilagMFB through"
              id=""
              value={formData["Discovered UnilagMFB through"] || ""}
              onChange={handleChange}
            >
              <option disabled value="">
                Pick an applicable option
              </option>
              <option value="Friend">Friend</option>
              <option value="Online Advertisement">Online Advertisement</option>
              <option value="Relationship Officer">Relationship Officer</option>
              <option value="Handbill">Handbill</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

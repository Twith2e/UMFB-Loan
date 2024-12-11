import Auth from "../components/Authorization";
import BusinessInfos from "../components/BusinessInfos";
import CheckBox from "../components/CheckBox";
import LoanRequest from "../components/LoanRequest";
import NavBar from "../components/NavBar";
import Personals from "../components/PersonalInfos";
import Signature from "../components/SIgnature";
import SubmitButton from "../components/SubmitButton";

export default function Form() {
  return (
    <div className="container-fluid">
      <div className="row p-12">
        <div className="col-lg-12">
          <NavBar />
          <div className="text-center">
            <h3>BUSINESS LOAN APPLICATION FORM</h3>
          </div>
          <div className="flex gap-3">
            <CheckBox text="New Client" name="New Client" />
            <CheckBox text="Recurrent Client" name="Recurrent Client" />
            <div className="flex gap-2">
              <span>Client ID No</span>
              <input
                className="border-b border-b-black outline-none"
                type="number"
                name="Client ID Number"
                id=""
              />
            </div>
          </div>
          <div className="mt-4">
            <Personals />
          </div>
          <div className="mt-4">
            <BusinessInfos />
          </div>
          <div className="mt-4">
            <LoanRequest />
          </div>
          <div className="mt-4">
            <Auth />
          </div>
          <div className="mt-4 flex justify-end">
            <Signature
              imgName="Applicant Signature"
              name="Applicant Signature Date"
              label="Upload Signature"
            />
          </div>
          <div className="mt-12 text-center">
            <SubmitButton />
          </div>
        </div>
      </div>
    </div>
  );
}

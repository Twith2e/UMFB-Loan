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
      <div className="row p-2 p-md-5">
        <div className="col-lg-12 d-flex flex-column gap-3">
          <NavBar />
          <div className="text-center">
            <h3>BUSINESS LOAN APPLICATION FORM</h3>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between gap-3">
            <div className="flex gap-4">
              <CheckBox text="New Client" name="New Client" />
              <CheckBox text="Recurrent Client" name="Recurrent Client" />
            </div>
            <div className="flex gap-2">
              <span>Client ID No</span>
              <input
                className="border-b border-b-black outline-none"
                type="text"
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
              imgName="Applicant's Signature"
              name="Applicant's Signature Date"
              label="Upload Signature"
            />
          </div>
          <div className="my-12 text-center">
            <SubmitButton />
          </div>
        </div>
      </div>
    </div>
  );
}

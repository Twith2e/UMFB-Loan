import Auth from "../components/Authorization";
import BusinessInfos from "../components/BusinessInfos";
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
          <div className="mt-4">
            <Signature
              imgName="Applicant Signature"
              name={"Applicant Signature Date"}
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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.scss";
import pslogo from "../../assets/icons/registrationForm/sonylogo.png";
import wallpaper from "../../assets/images/registrationForm/login-wallpaper.jpg";
import { AiOutlineClose } from "react-icons/ai";

import { CountryLanguage } from "./createAcc/CountryLanguage";
import { BirthDate } from "./createAcc/BirthDate";
import { EmailPass } from "./createAcc/EmailPass";
import { Address } from "./createAcc/Address";
import { Profile } from "./createAcc/Profile";
import { Privacy } from "./createAcc/Privacy";
import { Link } from "react-router-dom";
import { StepBar } from "./createAcc/StepBar";

export const Form = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const FormSteps = [
    "Create an Account",
    "Create an Account",
    "Create an Account",
    "Residential Address",
    "Profile",
    "Create an Account",
  ];

  const StepDisplay = () => {
    if (step === 0) {
      return <CountryLanguage />;
    } else if (step === 1) {
      return <BirthDate />;
    } else if (step === 2) {
      return <EmailPass />;
    } else if (step === 3) {
      return <Address />;
    } else if (step === 4) {
      return <Profile />;
    } else {
      return <Privacy />;
    }
  };

  return (
    <div>
      <div
        className="registration-form"
        style={{
          backgroundImage: `url(${wallpaper})`,
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="registration-form-container">
          <div className="registration-header">
            <div className="back-header">
              <img className="logo-sony" src={pslogo} />

              <button className="back-button">
                <AiOutlineClose />
              </button>
            </div>
            <div className="step-header">
              <div className="registration-title">
                <h5>{FormSteps[step]}</h5>
              </div>
              <div className="step-bar">
                <StepBar step={step} />
              </div>
            </div>
          </div>

          <div className="registration-body">{StepDisplay()}</div>
          <div className="registration-footer">
            <div className="registration-button">
              <button
                className="back"
                onClick={() => {
                  step === 0
                    ? navigate("/registration")
                    : setStep((currStep) => currStep - 1);
                }}
              >
                Back
              </button>

              <button
                className="next"
                onClick={() => {
                  step === FormSteps.length - 1
                    ? alert("Form Submitted")
                    : setStep((currStep) => currStep + 1);
                }}
              >
                Next
              </button>
            </div>

            <Link className="link" to="/support">
              <p>Help</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

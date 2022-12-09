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
import { Modal } from "../../components/elements/modal/Modal";

import { userRequest } from "../../requestMethod";

export const Form = () => {
  const [step, setStep] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    email: null,
    password: null,
    confirmPassword: null,
    firstName: null,
    lastName: null,
    userName: null,

    month: null,
    day: null,
    year: null,

    stateProvince: null,
    country: null,
    city: null,
    postalCode: null,
  });

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
      return <CountryLanguage formData={formData} setFormData={setFormData} />;
    } else if (step === 1) {
      return <BirthDate formData={formData} setFormData={setFormData} />;
    } else if (step === 2) {
      return <EmailPass formData={formData} setFormData={setFormData} />;
    } else if (step === 3) {
      return <Address formData={formData} setFormData={setFormData} />;
    } else if (step === 4) {
      return <Profile formData={formData} setFormData={setFormData} />;
    } else {
      return <Privacy />;
    }
  };

  return (
    <div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
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

              <button
                className="back-button"
                onClick={() => setOpenModal(true)}
              >
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
                onClick={async () => {
                  if (step === FormSteps.length - 1) {
                    const res = await userRequest.post("/auth/register", {
                      formData,
                    })

                    res.status === 200 ? navigate("/login") : alert("Error");
                  } else {
                    if (step === 0) {
                      if (formData.country !== null) {
                        setStep((currPage) => currPage + 1);
                      } else {
                        alert("Compila tutti i campi");
                      }
                    } else if (step === 1) {
                      if (
                        formData.day !== null &&
                        formData.month !== null &&
                        formData.year !== null
                      ) {
                        setStep((currPage) => currPage + 1);
                      } else {
                        alert("Compila tutti i campi");
                      }
                    } else if (step === 2) {
                      if (
                        formData.email !== null &&
                        formData.password !== null &&
                        formData.confirmPassword !== null
                      ) {
                        if (formData.password === formData.confirmPassword) {
                          if (!/\S+@\S+\.\S+/.test(formData.email)) {
                            alert("Inserisci una mail valida");
                          } else {
                            setStep((currPage) => currPage + 1);
                          }
                        } else {
                          alert("Le Password non coincidono");
                        }
                      } else {
                        alert("Compila tutti i campi");
                      }
                    } else if (step === 3) {
                      if (
                        formData.city !== null &&
                        formData.stateProvince !== null &&
                        formData.postalCode !== null
                      ) {
                        if (!/^[0-9]+$/.test(formData.postalCode)) {
                          alert(
                            "Puoi inserire solo numeri per il codice postale"
                          );
                        } else {
                          setStep((currPage) => currPage + 1);
                        }
                      } else {
                        alert("Compila tutti i campi");
                      }
                    } else if (step === 4) {
                      if (
                        formData.userName !== null &&
                        formData.firstName !== null &&
                        formData.postalCode !== null
                      ) {
                        setStep((currPage) => currPage + 1);
                      } else {
                        alert("Compila tutti i campi");
                      }
                    }
                  }
                }}
              >
                {step === FormSteps.length - 1 ? "Submit" : "Next"}
              </button>
            </div>

            <Link className="link" to="/support">
              <p>Help</p>
              {/* {error !== null && error} */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

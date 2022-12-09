import React, { useState } from "react";
import "./createAccount.scss";
import pslogo from "../../assets/icons/registrationForm/sonylogo.png";
import avatar from "../../assets/icons/registrationForm/avatarCreateAccount.png";
import wallpaper from "../../assets/images/registrationForm/login-wallpaper.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Modal } from "../../components/elements/modal/Modal";

export const CreateAccount = () => {
  const [openModal, setOpenModal] = useState(false);

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
          <div className="back-header">
            <img className="logo-sony" src={pslogo} />

            <button className="back-button" onClick={() => setOpenModal(true)}>
              <AiOutlineClose />
            </button>
          </div>
          <div className="registration-form-body">
            <h5>Create an Account</h5>
            <img src={avatar} />
            <Link to="/form">
              <button className="create-button">Create</button>
            </Link>
            <div className="already-have">
              <p>Already have an account?</p>
              <Link className="link" to="/login">
                Sign In
              </Link>
            </div>
          </div>
          <div className="registration-footer">
            <Link className="link" to="/support">
              <p>Help</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

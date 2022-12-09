import React from "react";

import "./emailPass.scss";

export const EmailPass = ({ formData, setFormData }) => {
  return (
    <div className="email-password-wrapper">
      <h6>
        Enter a valid email address and secure password. We'll send important
        information to this email address. Your email address is used when you
        forget your password. Other players won't be able to see it.
      </h6>

      <div className="email-password-single-input">
        <div className="input-container">
          <p>Sign-In ID</p>
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
          />
        </div>
        <div className="input-container">
          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(event) =>
              setFormData({ ...formData, password: event.target.value })
            }
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Re-enter Password"
            value={formData.confirmPassword}
            onChange={(event) =>
              setFormData({ ...formData, confirmPassword: event.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "./address.scss";

export const Address = ({ formData, setFormData }) => {
  return (
    <div className="city-province-wrapper">
      <h6>Select your current country or region of residence. </h6>
      <div className="country-single-input">
        <div className="input-container">
          <p>City</p>
          <input
            type="text"
            value={formData.city}
            onChange={(event) =>
              setFormData({ ...formData, city: event.target.value })
            }
          />
        </div>
        <div className="input-container">
          <p>State or Province</p>
          <input
            type="text"
            value={formData.stateProvince}
            onChange={(event) =>
              setFormData({ ...formData, stateProvince: event.target.value })
            }
          />
        </div>
        <div className="input-container">
          <p>Postal Code</p>
          <input
            type="text"
            value={formData.postalCode}
            onChange={(event) =>
              setFormData({ ...formData, postalCode: event.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};

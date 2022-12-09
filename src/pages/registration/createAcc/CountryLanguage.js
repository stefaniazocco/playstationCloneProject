import React from "react";
import { SelectForm } from "../../../components/elements/select/SelectForm";
import { countryOptions } from "../../../components/elements/select/SelectData";

import "./countryLanguage.scss";

export const CountryLanguage = ({ formData, setFormData }) => {
  return (
    <div className="conutry-language-wrapper">
      <h6>
        Your home location is used to verify your identity when you contact us.
        Other players won't be able to see it.
      </h6>
      <section className="country-inputs">
        <div className="country-single-input">
          <p>Country/Region</p>
          <SelectForm
            options={countryOptions}
              formData={formData}
              setFormData={setFormData}
            name="country"
          />
        </div>
      </section>
    </div>
  );
};

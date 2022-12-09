import React from "react";
import { SelectForm } from "../../../components/elements/select/SelectForm";
import {
  monthsOptions,
  yearOptions,
} from "../../../components/elements/select/SelectData";
import { dayOptions } from "../../../components/elements/select/SelectData";
import "./birthDate.scss";

const options = [
  { name: "month", option: monthsOptions },
  { name: "day", option: dayOptions },
  { name: "year", option: yearOptions },
];

export const BirthDate = ({ formData, setFormData }) => {
  return (
    <div className="birthdate-wrapper">
      <h6>
        Make sure you enter your date of birth correctly. It may be necessary
        later for security purposes. Other players won't be able to see it.
      </h6>
      <section className="birthdate-inputs">
        <div className="birthdate-single-input">
          {options.map((option) => (
            <div className="form-date-select-container">
              <SelectForm
                options={option.option}
                formData={formData}
                setFormData={setFormData}
                name={option.name}
              />
            </div>
          ))}
        </div>
      </section>
      <div className="division-line"></div>
      <div className="birthdate-info">
        <h6>About your account information</h6>
        <p>
          The information you use to create your account needs to be accurate.
          It will be used to manage and secure yor account, and for when you
          make purchases.
        </p>
      </div>
    </div>
  );
};

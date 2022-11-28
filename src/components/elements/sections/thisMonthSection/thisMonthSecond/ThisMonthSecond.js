import React from "react";
import "./thisMonthSecond.scss";

import { dataMonthCard } from "../../../cards/thisMonthCards/dataMonthCard";
import { ThisMonthCard } from "../../../cards/thisMonthCards/ThisMonthCard";

export const ThisMonthSecond = () => {
  return (
    <div className="month-cards-wrapper">
      {dataMonthCard.map((info) => (
        <ThisMonthCard info={info} />
      ))}
    </div>
  );
};

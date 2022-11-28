import React from "react";
import "./thisMonthSection.scss";
import { ThisMonthFirst } from "./thisMonthFirst/ThisMonthFirst";
import { ThisMonthSecond } from "./thisMonthSecond/ThisMonthSecond";

export const ThisMonthSection = () => {
  return (
    <div>
      <ThisMonthFirst />
      <ThisMonthSecond />
    </div>
  );
};

import React from "react";
import "./thisMonthCard.scss";

export const ThisMonthCard = (props) => {
  return (
    <div className="month-card-wrapper">
      <img src={props.info.bannerImage} />
      <h4>{props.info.title}</h4>
    </div>
  );
};

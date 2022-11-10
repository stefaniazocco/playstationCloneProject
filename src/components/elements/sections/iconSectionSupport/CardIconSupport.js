import React from "react";

const CardIconSupport = (props) => {
  return (
    <div className="iconSectionContent">
      <img src={props.icon} height="70px" className="mt-2" />
      <p>{props.title}</p>
    </div>
  );
};

export default CardIconSupport;

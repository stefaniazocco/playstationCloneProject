import { useState } from "react";
import "./stepBar.scss";

export const StepBar = ({ step }) => {
  const [dot, setDot] = useState("");

  const HandleStep = (e) => {};

  return (
    <div className="step-bar">
      <div className="dot-step"></div>
      <div className="dot-step"></div>
      <div className="dot-step"></div>
      <div className="dot-step"></div>
      <div className="dot-step"></div>
      <div className="dot-step"></div>
    </div>
  );
};

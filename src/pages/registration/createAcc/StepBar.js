import "./stepBar.scss";

export const StepBar = ({ step }) => {
  return (
    <div className="step-bar">
      <div className="dot-step dot-active dot-step"></div>
      <div className={step > 0 ? "dot-step dot-active" : "dot-step"}></div>
      <div className={step > 1 ? "dot-step dot-active" : "dot-step"}></div>
      <div className={step > 2 ? "dot-step dot-active" : "dot-step"}></div>
      <div className={step > 3 ? "dot-step dot-active" : "dot-step"}></div>
      <div className={step > 4 ? "dot-step dot-active" : "dot-step"}></div>
    </div>
  );
};

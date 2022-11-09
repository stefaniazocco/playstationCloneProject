import React from "react";
import { Button } from "../buttons/Button";

const SliderPS5Item = (props) => {
  return (
    <>
      <div
        className="content-container-ps5 justify-content-center align-items-center"
        style={{ width: "100%" }}
      >
        <h3 className="title-slider-ps5">{props.title}</h3>
        <p className="description-slider-ps5">{props.description}</p>
        <Button className="button-blue" string={props.btnString} />
      </div>
      <div className="item-Dx-ps5 justify-content-end">
        <img
          className="imagePS5"
          src={props.image}
          alt="placeholder"
        />
      </div>
    </>
  );
};

export default SliderPS5Item;

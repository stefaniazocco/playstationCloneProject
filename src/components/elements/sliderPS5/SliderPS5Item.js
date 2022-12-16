import React from "react";
import { Button } from "../buttons/Button";
import { useTranslation } from "react-i18next";

const SliderPS5Item = (props) => {

  const { t } = useTranslation();
  
  return (
    <>
      <div
        className="content-container-ps5 justify-content-center align-items-center"
        style={{ width: "100%" }}
      >
        <h3 className="title-slider-ps5">{t(props.title)}</h3>
        <p className="description-slider-ps5">{t(props.description)}</p>
        <Button className="button-blue" string={t(props.btnString)} />
      </div>
      <div className="item-Dx-ps5">
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

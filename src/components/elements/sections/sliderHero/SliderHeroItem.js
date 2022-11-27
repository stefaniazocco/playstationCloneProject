import React from "react";
import { Button } from "../../buttons/Button";
import "./carousel.scss"

const SliderHeroItem = (props) => {
  return (
    <div >
      
      <img src={props.background} alt="placeholder" style={{ width: "100%"  }} />
      <div className="content-container slide-top" style={{ width: "100%" }}>
        <img class="logo" src={props.logo} alt="" />
        <h3 className="title-slider">{props.title}</h3>
        <p className="description-slider">{props.content}</p>
        <Button className="button-white"  string={props.btnString} />
      </div>
    </div>
  );
};

export default SliderHeroItem;

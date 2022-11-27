import "./Cards404.scss";
import { Button } from "../../buttons/Button";
import React from "react";
import { Link } from "react-router-dom";

export const Cards404 = (props) => {
  return (
    <div className="card404-wrapper">
      <img className="card-logo" src={props.info.img} />
      <div>
        <h6 className={props.info.class}>{props.info.miniTitle}</h6>
        <h2 className="card-first-title">{props.info.title}</h2>
      </div>

      <p>{props.info.description}</p>
      <Link to={props.info.path}>
        <Button className={"button-blue"} string={props.info.button} />
      </Link>
    </div>
  );
};

import React from "react";
import "./thisMonthFirst.scss";
import godOfWar from "../../../../../assets/images/homepage/thisMonthAssets/background/monthBackground5.webp";
import { Button } from "../../../buttons/Button";
import { Link } from "react-router-dom";

export const ThisMonthFirst = () => {
  return (
    <div
      className="month-godOf"
      style={{
        backgroundImage: `url(${godOfWar})`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="this-month-card">
        <div>
          <h1 className="this-month-firstTitle">QUESTO MESE</h1>
          <h1 className="this-month-secondTitle">SU PLAYSTATION</h1>
        </div>
        <p>
          Scopri le più grandi uscite di questo mese con contenuti speciali,
          guide e molto altro ancora.
        </p>
        <Link className="more-infos">
          <Button className={"button-white"} string={"Maggiori informazioni"} />
        </Link>
      </div>
    </div>
  );
};

import React from "react";
import "./thisMonthFirst.scss";
import godOfWar from "../../../../../assets/images/homepage/thisMonthAssets/background/monthBackground5.webp";
import { Button } from "../../../buttons/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ThisMonthFirst = () => {
  const { t } = useTranslation();
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
          <h1 className="this-month-firstTitle">{t("title-thisMonth")}</h1>
          <h1 className="this-month-secondTitle">{t("sub-thisMonth")}</h1>
        </div>
        <p>
        {t("subText-thisMonth")}
        </p>
        <Link className="more-infos">
          <Button className={"button-white"} string={t("btn-info")} />
        </Link>
      </div>
    </div>
  );
};

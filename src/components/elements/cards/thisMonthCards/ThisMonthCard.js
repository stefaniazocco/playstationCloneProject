import React from "react";
import "./thisMonthCard.scss";
import { useTranslation } from "react-i18next";


export const ThisMonthCard = (props) => {
  
  const { t } = useTranslation();

  return (
    <div className="month-card-wrapper">
      <img src={props.info.bannerImage} />
      <h4>{t(props.info.title)}</h4>
    </div>
  );
};

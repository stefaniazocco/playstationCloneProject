import React from "react";
import { useTranslation } from "react-i18next";

import "./cardCarouselHomepage.scss";

const CardCarouselHomepage = (props) => {

  const { t } = useTranslation();
  
  return (
    <div>
      <div className="slider-card">
        <header>
          <img className="card-banner" src={props.info.bannerImage} />
        </header>

        <div className="slider-description">
          
          <article>
            <h4 className="card-title">{t(props.info.title)}</h4>
            <p className="card-p">{t(props.info.bannerPara)}</p>
          </article>

          <footer className="slider-footer">
            <img
              style={{ width: "50px", height: "50px", borderRadius: "8px" }}
              src={props.info.icon}
            />
            <div className="footer-info">
              <p>{t(props.info.author)}</p>
              <p>{t(props.info.description)}</p>
              <p>{t(props.info.date)}</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default CardCarouselHomepage;

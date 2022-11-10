import React from "react";

import "./cardCarouselHomepage.scss";

const CardCarouselHomepage = (props) => {
  return (
    <div>
      <div className="slider-card">
        <header>
          <img className="card-banner" src={props.info.bannerImage} />
        </header>

        <div className="slider-description">
          
          <article>
            <h4 className="card-title">{props.info.title}</h4>
            <p className="card-p">{props.info.bannerPara}</p>
          </article>

          <footer className="slider-footer">
            <img
              style={{ width: "50px", height: "50px", borderRadius: "8px" }}
              src={props.info.icon}
            />
            <div className="footer-info">
              <p>{props.info.author}</p>
              <p>{props.info.description}</p>
              <p>{props.info.date}</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default CardCarouselHomepage;

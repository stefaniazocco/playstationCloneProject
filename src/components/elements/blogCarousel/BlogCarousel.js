import React from "react";
import CardCarouselHomepage from "./CardCarouselHomepage";
import { blogCard } from "./dataCarouselHomepage";

import "./blogCarousel.scss";

export const BlogCarousel = () => {
  return (
    <div>
      <div className="slider-wrapper">
        <h1 className="slider-title">Le ultime novità dal PlayStation Blog</h1>
        <div className="slider">
          {blogCard.map((info) => (
            <CardCarouselHomepage info={info} />
          ))}
        </div>
      </div>
    </div>
  );
};

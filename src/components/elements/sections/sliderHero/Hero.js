import { useState, useEffect } from "react";
import GOWImgThumb from "../../../../assets/images/homepage/10013.webp";
import CODMW2Thumb from "../../../../assets/images/homepage/cod-icon.webp";
import ApexThumb from "../../../../assets/images/homepage/apex-legends-thumbnail.webp";
import GenshinImpactThumbnail from "../../../../assets/images/homepage/genshin-impact-3-thumbnail.webp";
import OlliOlliThumb from "../../../../assets/images/homepage/olli-olli-world-finding-the-flowzone-thumb.webp";
import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.scss";
import SliderHeroItem from "./SliderHeroItem";
import GradientHero from "./GradientHero";
import { SliderItems } from "./DataHero";
import PreviewheroCarousel from "./PreviewheroCarousel";
import { useTranslation } from "react-i18next";


function Hero() {
  
  const { t } = useTranslation();
  
  const [slide, setSlide] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    setSlide(SliderItems);
  }, []);

  return (
    <>
      <Carousel
        interval={10000}
        controls={false}
        style={{ backgroundColor: "black" }}
        slide={false}
        activeIndex={activeIndex}
        onSelect={(key) => setActiveIndex(key)}
      >
        {slide.map((item) => (
          <Carousel.Item key={item.id} className="fade-in">
            <Link>
              <GradientHero gradient={item.gradient} />
              <SliderHeroItem
                background={item.background}
                logo={item.logo}
                title={t(item.title)}
                content={t(item.content)}
                btnString={t(item.btnString)}
              />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>

      <PreviewheroCarousel style={{ marginTop: "50px" }}>
        <div onClick={() => setActiveIndex(0)}>
          <img
            className="dot"
            src={CODMW2Thumb}
            alt="placeholder"
            style={{ width: "100%" }}
          />
        </div>
        <div onClick={() => setActiveIndex(1)} className="active">
          <img
            className="dot"
            src={GOWImgThumb}
            alt="placeholder"
            style={{ width: "100%" }}
          />
        </div>

        <div onClick={() => setActiveIndex(2)}>
          <img
            className="dot"
            src={OlliOlliThumb}
            alt="placeholder"
            style={{ width: "100%" }}
          />
        </div>
        <div onClick={() => setActiveIndex(3)}>
          <img
            className="dot"
            src={ApexThumb}
            alt="placeholder"
            style={{ width: "100%" }}
          />
        </div>
        <div onClick={() => setActiveIndex(4)}>
          <img
            className="dot"
            src={GenshinImpactThumbnail}
            alt="placeholder"
            style={{ width: "100%" }}
          />
        </div>
      </PreviewheroCarousel>
    </>
  );
}

export default Hero;

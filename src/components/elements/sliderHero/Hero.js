import { useState, useEffect } from "react";
import GOWImg from "../../../assets/images/homepage/godofwar-1600.webp";
import GOWLogo from "../../../assets/images/homepage/10163.webp";
import CODMW2 from "../../../assets/images/homepage/cod-mw2-open-beta-homepage-3000px.webp";
import CODMW2Logo from "../../../assets/images/homepage/cod-logo-1200.webp";
import OlliImg from "../../../assets/images/homepage/olli-olli-world-finding-the-flowzone-hero3000px.webp";
import OlliLogo from "../../../assets/images/homepage/olli-olli-world-finding-the-flowzone-logo.webp";
import GenshinImpactHero from "../../../assets/images/homepage/genshin-impact-3-hero-3000px.webp";
import GenshinImpactLogo from "../../../assets/images/homepage/genshin-impact-white-logo.webp";
import GOWImgThumb from "../../../assets/images/homepage/10013.webp";
import CODMW2Thumb from "../../../assets/images/homepage/cod-icon.webp";
import TheLastOfUsThumb from "../../../assets/images/homepage/the-last-of-us-part-i-hero-previewicon.jpg";
import GenshinImpactThumbnail from "../../../assets/images/homepage/genshin-impact-3-thumbnail.webp";
import OlliOlliThumb from "../../../assets/images/homepage/olli-olli-world-finding-the-flowzone-thumb.webp";
import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.scss";
import SliderHeroItem from "./SliderHeroItem";
import GradientHero from "./GradientHero";
import { SliderItems } from "./DataHero";
import PreviewheroCarousel from "./PreviewheroCarousel";

function Hero() {
  const [slide, setSlide] = useState([]);

  useEffect(() => {
    setSlide(SliderItems);
  }, []);

  const handleClick = (id) => {
    setSlide(slide.filter((id) => console.log(id)));
    
  };

  return (
    <>
      <Carousel interval={5000} controls={true} fade={true}>
        {slide.map((item) => (
          <Carousel.Item key={item.id}>
            <Link>
              <GradientHero gradient={item.gradient} />
              <SliderHeroItem
                background={item.background}
                logo={item.logo}
                title={item.title}
                content={item.content}
                btnString={item.btnString}
              />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>

      <PreviewheroCarousel style={{ marginTop: "50px" }}>
        <div onClick={() => handleClick(1)}>
          <img
            className="dot"
            src={CODMW2Thumb}
            alt="placeholder"
            style={{ width: "100%" }}
          />
        </div>
        <div className="active">
          <img
            className="dot"
            src={GOWImgThumb}
            alt="placeholder"
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <img
            className="dot"
            src={OlliOlliThumb}
            alt="placeholder"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            className="dot"
            src={TheLastOfUsThumb}
            alt="placeholder"
            style={{ width: "100%" }}
          />
        </div>
        <div>
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

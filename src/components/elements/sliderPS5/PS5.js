import Carousel from "react-bootstrap/Carousel";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import console from "../../../assets/images/homepage/PS5-Console/10031.png";
import controller from "../../../assets/images/homepage/PS5-Console/10032.png";
import headset from "../../../assets/images/homepage/PS5-Console/10033.png";
import mediaRemote from "../../../assets/images/homepage/PS5-Console/10034.png";
import camera from "../../../assets/images/homepage/PS5-Console/10035.png";
import covers from "../../../assets/images/homepage/PS5-Console/10036.png";
import SliderIcons from "./SliderIcons";
import { SliderObject } from "./SliderObjects";
import SliderPS5Item from "./SliderPS5Item";
import "./ps5.scss";
import { useTranslation } from "react-i18next";

function PS5() {
  const { t } = useTranslation();

  const [slide, setSlide] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setSlide(SliderObject);
  }, []);

  return (
    <>
      <Carousel
        controls={false}
        /* fade={true} */
        activeIndex={activeIndex}
        onSelect={(key) => setActiveIndex(key)}
      >
        {slide.map((item) => (
          <Carousel.Item key={item.id}>
            <Link>
              <SliderPS5Item
                title={t(item.title)}
                description={t(item.description)}
                image={item.image}
                btnString={t(item.btnString)}
              />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>

      <SliderIcons style={{ marginTop: "50px" }}>
        <div onClick={() => setActiveIndex(0)}>
          <img
            className="dot2"
            src={console}
            alt="placeholder"
            /* style={{ width: "100%" }} */
          />
          <p className="parag2" >{t("ps5-1")}</p>
        </div>
        <div onClick={() => setActiveIndex(1)} className="active">
          <img
            className="dot2"
            src={controller}
            alt="placeholder"
            /* style={{ width: "100%" }} */
          />
          <p className="parag" >{t("ps5-2")}</p>
        </div>

        <div onClick={() => setActiveIndex(2)}>
          <img
            className="dot2"
            src={headset}
            alt="placeholder"
            /* style={{ width: "100%" }} */
          />
          <p className="parag" >{t("ps5-3")}</p>
        </div>
        <div onClick={() => setActiveIndex(3)}>
          <img
            className="dot2"
            src={mediaRemote}
            alt="placeholder"
            /* style={{ width: "100%" }} */
          />
          <p className="parag" >{t("ps5-4")}</p>
        </div>
        <div onClick={() => setActiveIndex(4)}>
          <img
            className="dot2"
            src={camera}
            alt="placeholder"
            /* style={{ width: "100%" }} */
          />
          <p className="parag2" >{t("ps5-5")}</p>
        </div>
        <div onClick={() => setActiveIndex(5)}>
          <img
            className="dot2"
            src={covers}
            alt="placeholder"
            /* style={{ width: "100%" }} */
          />
          <p className="parag2" >{t("ps5-6")}</p>
        </div>
      </SliderIcons>
    </>
  );
}

export default PS5;

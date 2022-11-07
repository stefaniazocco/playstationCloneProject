import React from "react";
import "./carouselSwipe.scss";
import { useState, useEffect } from "react";


const SliderHero = (props) => {
  const { children} = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const [touchPosition, setTouchPosition] = useState(null);
  // ...
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <div className="carousel-container-hero">
      <div className="carousel-wrapper-hero">
        <button className="left-arrow" onClick={prev}>
          &lt;
        </button>
        <div
          className="carousel-content-wrapper-hero"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <button className="right-arrow" onClick={next}>
            &gt;
          </button>
          <div
            className="carousel-content-hero"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderHero;

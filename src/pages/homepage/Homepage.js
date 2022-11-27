import { useState } from "react";
import { Cookies } from "../../components/cookies/Cookies";
import { ExplorePlay } from "../../components/elements/sections/exploreplay/ExplorePlay";
import { PlayPlus } from "../../components/elements/sections/sales-plus/PlayPlus";

import { SliderHomepage } from "../../components/elements/sections/sliderHomepage/SliderHomepage";
import { Socials } from "../../components/elements/sections/socials/Socials";
import { StoreHomepage } from "../../components/elements/sections/storeHomepage/StoreHomepage";
import { BlogCarousel } from "../../components/elements/blogCarousel/BlogCarousel";
import { StrayHomepage } from "../../components/elements/sections/strayHomepage.js/StrayHomepage";
import { FooterMain } from "../../components/footer/FooterMain";
import Navbar from "../../components/navbar/Navbar";

import Hero from "../../components/elements/sections/sliderHero/Hero";
import PS5 from "../../components/elements/sliderPS5/PS5";
import { SalesPlay } from "../../components/elements/sections/sales-plus/SalesPlay";

export function Homepage() {
  const [close, setClose] = useState(true);

  function hideSection() {
    setClose(false);
  }

  function fixedNav() {
    let navbar = document.getElementById("navbar");
    let fixed = navbar.offsetTop;
    if (window.pageYOffset > fixed) {
      navbar.classList.add("fixed-nav");
    } else {
      navbar.classList.remove("fixed-nav");
    }
  }

  window.onscroll = function () {
    fixedNav();
  };

  return (
    <>
      <Navbar />
      <Hero />
      <PS5 />
      <PlayPlus />

      <StrayHomepage />
      <SliderHomepage />
      <ExplorePlay />
      <SalesPlay />
      <StoreHomepage />
      <BlogCarousel />
      <Socials />
      <FooterMain />

      {close === true && <Cookies hide={hideSection} />}
    </>
  );
}

import { useState } from "react";
import i18n from "i18next";

import { Cookies } from "../../components/cookies/Cookies";
import { ExplorePlay } from "../../components/elements/sections/exploreplay/ExplorePlay";
import { PlayPlus } from "../../components/elements/sections/sales-plus/PlayPlus";
import { ThisMonthSection } from "../../components/elements/sections/thisMonthSection/ThisMonthSection";
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
import NavbarMobile from "../../components/navbar/NavbarMobile";
import UserPage from "../registration/profile page/UserPage";
import { ChatButton } from "../../components/elements/buttons/ChatButton";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export function Homepage() {
  const [close, setClose] = useState(true);

  function hideSection() {
    setClose(false);
  }

  function hideAccept() {
    sessionStorage.setItem("token", 123);
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
      <NavbarMobile />
      <Hero />
      <PS5 />
      <PlayPlus />
      <ThisMonthSection />
      <StrayHomepage />
      <SliderHomepage />
      <ExplorePlay />
      <SalesPlay />
      <StoreHomepage />
      <BlogCarousel />
      <Socials />
      <FooterMain />
      {/* <ChatButton /> */}

      {close === true && !sessionStorage.getItem("token") && (
        <Cookies hide={hideSection} accept={hideAccept} />
      )}
    </>
  );
}

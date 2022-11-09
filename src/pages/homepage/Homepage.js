import { useState } from "react";
import { Cookies } from "../../components/cookies/Cookies";
import { Button } from "../../components/elements/buttons/Button";
import { CardsStoreHomepage } from "../../components/elements/cards/CardsStoreHomepage";
import { Counter } from "../../components/elements/counter/StoreCounter";
import { SliderHomepage } from "../../components/elements/sections/sliderHomepage/SliderHomepage";
import { Socials } from "../../components/elements/sections/socials/Socials";
import { StoreHomepage } from "../../components/elements/sections/storeHomepage/StoreHomepage";
import { StrayHomepage } from "../../components/elements/sections/strayHomepage.js/StrayHomepage";
import { FooterMain } from "../../components/footer/FooterMain";
import Navbar from "../../components/navbar/Navbar";
import PreviewheroCarousel from "../../components/elements/sliderHero/PreviewheroCarousel";
import Hero from "../../components/elements/sliderHero/Hero";
import SecondaryNav from "../../components/navbar/SecondaryNav";
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

      {/* <SliderHero/> */}
      <Button className="button-red" link="#" string="Maggiori informazioni" />
      <Counter />
      <StrayHomepage />
      <SliderHomepage />
      <StoreHomepage />
      <Socials />
      <FooterMain />

      {close === true && <Cookies hide={hideSection} />}
    </>
  );
}

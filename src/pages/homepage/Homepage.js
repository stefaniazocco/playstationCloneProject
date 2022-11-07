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
import fighter from "../../assets/images/homepage/street-fighter-6-pack-01-ps4-ps5-02sep22.webp"
import { StoreCardsBig, StoreCardsLittle } from "../../components/elements/cards/StoreGames";


export function Homepage() {
  const [close, setClose] = useState(true);

  function hideSection() {
    setClose(false);
  }

  return (
    <>
      <Navbar />
      <Hero />
      <StoreCardsBig title="ciao" img={fighter} />
      <StoreCardsLittle title="ciao" img={fighter} />

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

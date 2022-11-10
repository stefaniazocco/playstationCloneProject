import { FooterGames } from "../../components/footer/FooterGames";
import Navbar from "../../components/navbar/Navbar";
import SecondaryNav from "../../components/navbar/SecondaryNav";
import { SliderGames } from "../../components/elements/sections/sliderGames/SliderGames";
import { big1, big2, games1, games2, theme } from "./gamesData";
import { BigCardsStore } from "../../components/elements/sections/BigCardsStore/BigCardsStore";
import { HeroGames } from "../../components/elements/sections/heroStoreGames/HeroGames";

export function StoreGames() {

    function fixedNav() {
        let navbar = document.getElementById("nav-ps4-section");
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
      <SecondaryNav 
      name1="Novità"
      name2="Raccolte"
      name3="Promozioni"
      name4="PS5"
      name5="Abbonamenti"
      name6="Sfoglia"/>
      <HeroGames theme={theme.theme1}/>
      <BigCardsStore games={big1} />
      <SliderGames title="Nuovi giochi" games={games2} />
      <SliderGames title="In arrivo" games={games1} />
      <HeroGames theme={theme.theme2}/>
      <HeroGames theme={theme.theme3}/>
      <BigCardsStore games={big2} />

      <FooterGames />
    </>
  );
}

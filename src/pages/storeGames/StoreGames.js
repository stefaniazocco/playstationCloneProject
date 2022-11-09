import { FooterGames } from "../../components/footer/FooterGames";
import Navbar from "../../components/navbar/Navbar";
import SecondaryNav from "../../components/navbar/SecondaryNav";

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
      
      <FooterGames />
    </>
  );
}

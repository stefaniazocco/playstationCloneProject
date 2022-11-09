import React from "react";
import HeaderSupport from "../../components/elements/sections/headerSupport/HeaderSupport";
import IconSectionSupport from "../../components/elements/sections/iconSectionSupport/IconSectionSupport";
import LastSectionSupport from "../../components/elements/sections/iconSectionSupport/LastSectionSupport";
import { FooterMain } from "../../components/footer/FooterMain";
import Navbar from "../../components/navbar/Navbar";
import SecondaryNav from "../../components/navbar/SecondaryNav";

const Support = () => {
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
    <div>
      <Navbar />
      <SecondaryNav
        name1="Account"
        name2="PS Store e rimborsi"
        name3="Servizi con più livelli"
        name4="Hardware e riparazioni"
        name5="Sicurezza online"
        name6="Connettività"
      />
      <HeaderSupport />
      <IconSectionSupport />
      <LastSectionSupport />
      <FooterMain />
    </div>
  );
};

export default Support;

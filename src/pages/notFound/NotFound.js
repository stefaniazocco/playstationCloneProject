import React from "react";
import { NotFound404 } from "../../components/elements/sections/notFound404/NotFound404";
import { NotFound404Cards } from "../../components/elements/sections/notFound404Cards/NotFound404Cards";
import { FooterMain } from "../../components/footer/FooterMain";
import Navbar from "../../components/navbar/Navbar";
import "./notFound.scss";

export const NotFound = () => {
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
    <div>
      <Navbar />
      <NotFound404 />
      <NotFound404Cards />
      <FooterMain />
    </div>
  );
};

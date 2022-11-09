import React from "react";
import "./headerSupport.scss";
import HeaderSupportDesktop from "../../../../assets/images/support/playstation-support-hero-desktop-02-en-22oct20.webp";
import { BiSearchAlt2 } from "react-icons/bi";
const HeaderSupport = () => {
  return (
    <div className="wrapper">
      <img src={HeaderSupportDesktop} style={{ width: "100%" }} />
      <div className="contentWrapper my-4">
        <h3>Assistenza PlayStation</h3>
        <p>Come possiamo aiutarti?</p>
        <div className="mx-2 d-flex ">
          <div className="searchBar  ">
            <BiSearchAlt2
              size={32}
              className="mx-2 mb-1"
              style={{ color: "#2d64e6" }}
            />
            <input placeholder="Cerca in PlayStation.com" className="mt-2"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSupport;

import React, { useState, useEffect } from "react";
import "./navbar.scss";
import Dropdown from "./Dropdown";
import { BiSearchAlt2 } from "react-icons/bi";
import Sonybar from "./Sonybar";
import { navItems } from "./NavItemList";
import { Link } from "react-router-dom";
import { GoGlobe } from "react-icons/go";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const onChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const [navItem, setNavItem] = useState([]);

  useEffect(() => {
    setNavItem(navItems);
  }, []);

  return (
    <>
      <Sonybar />
      <nav
        id="navbar"
        className="navbar navbar-expand-md navbar-light bg-light"
      >
        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse">
          <div className="nav-item mx-3">
            <Link to="/">
              <svg
                className="shared-nav-ps-logo"
                width="55px"
                height="55px"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 50 50"
              >
                <g>
                  <g>
                    <path
                      d="M5.8,32.1C4.3,33.1,4.8,35,8,35.9c3.3,1.1,6.9,1.4,10.4,0.8c0.2,0,0.4-0.1,0.5-0.1v-3.4l-3.4,1.1
   c-1.3,0.4-2.6,0.5-3.9,0.2c-1-0.3-0.8-0.9,0.4-1.4l6.9-2.4V27l-9.6,3.3C8.1,30.7,6.9,31.3,5.8,32.1z M29,17.1v9.7
   c4.1,2,7.3,0,7.3-5.2c0-5.3-1.9-7.7-7.4-9.6C26,11,23,10.1,20,9.5v28.9l7,2.1V16.2c0-1.1,0-1.9,0.8-1.6C28.9,14.9,29,16,29,17.1z
    M42,29.8c-2.9-1-6-1.4-9-1.1c-1.6,0.1-3.1,0.5-4.5,1l-0.3,0.1v3.9l6.5-2.4c1.3-0.4,2.6-0.5,3.9-0.2c1,0.3,0.8,0.9-0.4,1.4
   l-10,3.7V40L42,34.9c1-0.4,1.9-0.9,2.7-1.7C45.4,32.2,45.1,30.8,42,29.8z"
                      fill="#0070d1"
                    />
                  </g>
                </g>
              </svg>
            </Link>
          </div>
          <ul className="navbar-nav me-auto">
            {/* Dropdown Giochi */}
            {navItem.map((item, id) => {
              return (
                <Dropdown
                  key={id}
                  icon={item.icon}
                  title={t(item.title)}
                  footerLink={item.footerLink}
                />
              );
            })}
          </ul>
          
            <div className="mx-2 d-flex">
              <div className="dropdown">
                <Link to="/country-selector" style={{ alignSelf: "center" }}>
                  <GoGlobe style={{ fontSize: 30, fill: "black" }} />
                </Link>
                <select className="dropdown-content" aria-label="Default select example" onChange={onChangeLanguage}>
                  <option class="opt" value="it" >
                  Italian
                  </option>
                  <option class="opt" value="en">
                  English
                  </option>
                </select>
              </div>
            </div>

            <Link to="/login" className="accedi-btn mx-3 my-3">
              {" "}
              {t("sign-in")}{" "}
            </Link>
            <a
              className="btn-search btn rounded-0 my-2 "
              href="/"
              type="submit"
              style={{ fontSize: 16 }}
            >
              {t("search")}
              <BiSearchAlt2 size={22} className="mx-2" />
            </a>
         
        </div>
      </nav>
    </>
  );
};

export default Navbar;

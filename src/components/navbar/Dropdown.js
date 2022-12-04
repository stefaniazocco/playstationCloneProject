import React from "react";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "../navbar/navbar.scss";
import { navItems } from "./NavItemList";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Dropdown = (props) => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(null);


  return (
    <li className=" nav-item d-flex  fs-nav-link fw-nav-link dropdown position-static">
      <div
        onClick={() => setIsActive(!isActive)}
        className="nav-link text-dark"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {props.title}
        {isActive ? (
          <FaAngleUp style={{ color: "gray" }} />
        ) : (
          <FaAngleDown style={{ color: "gray" }} />
        )}
      </div>

      <div
        className="dropdown-menu w-100 mnavcontent navbartransition "
        aria-labelledby="navbarDropdown"
        style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0, padding: 0 }}
      >
        <div className="container-fluid bg-light">
          <div className="d-flex flex-row justify-content-center  text-center">
            {props.icon.map((item) => (
              <a href={item.path} className="nav-icon-shadow  ">
                <img
                  className="mt-3 ms-1"
                  src={item.img}
                  alt=""
                  height="70px"
                />
                <p>{t(item.title)}</p>
              </a>
            ))}
          </div>

          <footer className="d-flex flex-row justify-content-center bg-light text-dark mt-3 border-top">
            <ul className="list-inline fs-nav-footer-link mx-3 my-3">
              {props.footerLink.map((item) => (
                <Link to={item.path} className="nav-footer-link mx-3">
                  <li className="li-circle-blue list-inline-item">
                    {t(item.link)}
                  </li>
                </Link>
              ))}
            </ul>
          </footer>
        </div>
      </div>
    </li>
  );
};

export default Dropdown;

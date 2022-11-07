import React from "react";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "../navbar/navbar.scss";


const Dropdown = (props) => {
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
        {props.name}
        {isActive ? <FaAngleUp style={{color: 'gray'}} /> : <FaAngleDown style={{color: 'gray'}} />}
      </div>

      <div
        className="dropdown-menu w-100 mnavcontent navbartransition "
        aria-labelledby="navbarDropdown"
        style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      >
        <div className="container-fluid bg-light">
          <div className="d-flex flex-row justify-content-center  text-center">
            <a href="/" className="nav-icon-shadow  ">
              <img
                className="ms-3 mt-3"
                src={props.icon1}
                alt=""
                height="70px"
              />
              <p className>PS5</p>
            </a>
            <a href="/" className="nav-icon-shadow  ">
              <img
                className="ms-3 mt-3"
                src={props.icon2}
                alt=""
                height="70px"
              />
              <p className>PS4</p>
            </a>
            <a href="/" className="nav-icon-shadow  ">
              <img
                className="ms-3 mt-3"
                src={props.icon3}
                alt=""
                height="70px"
              />
              <p className>PS VR</p>
            </a>
            <a href="/" className="nav-icon-shadow  ">
              <img
                className="mt-3"
                src={props.icon4}
                alt=""
                height="70px"
              />
              <p className>PS Plus</p>
            </a>
            <a
              href="../store-giochi/store-giochi.html"
              target="_blank"
              className="nav-icon-shadow"
            >
              <img
                className="mt-3"
                src={props.icon5}
                alt=""
                height="70px"
              />
              <p className>Compra giochi</p>
            </a>
          </div>
          <footer className="d-flex flex-row justify-content-center bg-light text-dark mt-3 border-top">
            <ul className="list-inline fs-nav-footer-link mx-3 my-3">
              <a href className="nav-footer-link mx-3">
                <li className="li-circle-blue list-inline-item"> Indie</li>
              </a>
              <a href="/" className="nav-footer-link mx-3">
                <li className="li-circle-blue list-inline-item">
                  Titoli per PS4 su PS5
                </li>
              </a>
              <a href="/" className="nav-footer-link mx-3">
                <li className="li-circle-blue list-inline-item">
                  Free to Play
                </li>
              </a>
              <a href="/" className="nav-footer-link mx-3">
                <li className="li-circle-blue list-inline-item">
                  Promozioni e offerte
                </li>
              </a>
            </ul>
          </footer>
        </div>
      </div>
    </li>
  );
};

export default Dropdown;

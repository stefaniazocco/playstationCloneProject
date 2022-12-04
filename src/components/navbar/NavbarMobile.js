import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const NavbarMobile = () => {
  
  const { t, i18n } = useTranslation();

  return (
    <nav id="nav-mobile">
      <div className="container-fluid ">
        <div className="bars-menu">
          <div className="d-flex flex-row justify-content-between fs-nav-link fw-nav-link dropdown position-static">
            <div
              className
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <AiOutlineMenu size={26} className="mx-2" />
              <i className="fa fa-bars" aria-hidden="true" />
              <a className=" btn rounded-0 my-2" type="submit">
                <BiSearchAlt2 size={26} className="mx-2" />
              </a>
            </div>
            <Link>
            <svg
              className="shared-nav-ps-logo"
              width="55px"
              height="55px"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 50 50"
              data-di-rand={1658190108051}
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
            <div className="my-3">
              <button className="accedi-btn mx-3"> {t("sign-in")} </button>
            </div>
            <div
              className="dropdown-menu w-100 h-100 mnavcontent  "
              aria-labelledby="navbarDropdown"
              style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
            >
              <div className="container-fluid bg-light">
                <div className="d-flex flex-column w-100  ">
                  <a
                    href="#"
                    className="hamburger-link w-100 d-flex flex-row justify-content-between "
                  >
                    <p className="fw-bold ">
                      <img
                        className="mx-1"
                        src="../assets/icons/psIcon-11.png"
                        alt
                        height="30px"
                      />{" "}
                      {t("games")}
                    </p>
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    className="hamburger-link w-100 d-flex flex-row justify-content-between "
                  >
                    <p className="fw-bold ">
                      <img
                        className="mx-1"
                        src="../assets/icons/psIcon-12.png"
                        alt
                        height="30px"
                      />{" "}
                      {t("hardware")}
                    </p>
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    className="hamburger-link w-100 d-flex flex-row justify-content-between "
                  >
                    <p className="fw-bold ">
                      <img
                        className="mx-1"
                        src="../assets/icons/psIcon-13.png"
                        alt
                        height="30px"
                      />{" "}
                      {t("service")}
                    </p>
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    className="hamburger-link w-100 d-flex flex-row justify-content-between "
                  >
                    <p className="fw-bold ">
                      <img
                        className="mx-1"
                        src="../assets/icons/psIcon-16.png"
                        alt
                        height="30px"
                      />{" "}
                      {t("new")}
                    </p>
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    className="hamburger-link w-100 d-flex flex-row justify-content-between "
                  >
                    <p className="fw-bold ">
                      <img
                        className="mx-1"
                        src="../assets/icons/psIcon-14.png"
                        alt
                        height="30px"
                      />{" "}
                      {t("shopping")}
                    </p>
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    className="hamburger-link w-100 d-flex flex-row justify-content-between "
                  >
                    <p className="fw-bold ">
                      <img
                        className="mx-1"
                        src="../assets/icons/psIcon-15.png"
                        alt
                        height="30px"
                      />{" "}
                      {t("supports")}
                    </p>
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobile;

import React from "react";

const SecondaryNav = (props) => {
  return (
    <>
      {/* PS4 Section Nav */}
      <nav id="nav-ps4-section" className="navbar-light bg-light">
        <div className="d-flex flex-row justify-content-center px-2 ">
          <div className="pt-2">
            <ul className="d-flex nav-ps4 py-2 px-2">
              <li className="px-2">
                <a
                  id="nav-ps4-link"
                  className="nav-link-ps4"
                  aria-current="page"
                  href="#"
                >
                  {props.name1}
                </a>
              </li>
              <li className="px-2">
                <a id="nav-ps4-link" className="nav-link-ps4" href="#">
                  {props.name2}
                </a>
              </li>
              <li className="px-2">
                <a id="nav-ps4-link" className="nav-link-ps4" href="#">
                  {props.name3}
                </a>
              </li>
              <li className="px-2">
                <a id="nav-ps4-link" className="nav-link-ps4" href="#">
                  {props.name4}
                </a>
              </li>
              <li className="px-2">
                <a id="nav-ps4-link" className="nav-link-ps4" href="#">
                  {props.name5}
                </a>
              </li>
              <li className="px-2">
                <a id="nav-ps4-link" className="nav-link-ps4" href="#">
                  {props.name6}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SecondaryNav;

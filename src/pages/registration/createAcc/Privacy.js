import React from "react";
import { Link } from "react-router-dom";
import "./privacy.scss";

export const Privacy = () => {
  return (
    <div className="privacy-terms-wrapper">
      <div className="privacy-checks">
        <h6>
          Select how you'd like to receive information about new products,
          special offers, and other promotions about PlayStation and Sony from
          Sony Interactive Entertainment.
        </h6>
        <section className="checkbox-container">
          <div className="single-checkbox-container">
            <input type="checkbox" className="checkbox" />
            <p>Receive via Email</p>
          </div>
          <div className="single-checkbox-container">
            <input type="checkbox" className="checkbox" />
            <p>Receive via Notifications on Console</p>
          </div>
        </section>
      </div>
      <section className="terms-container">
        <h6>
          By selecting [I Agree], you're confirming that you've understood and
          accepted the terms of service and the user agreement, and that the
          information you've provided is accurate.
        </h6>
        <ul className="terms-link-container">
          <Link className="term-link">
            <li>Terms of Service and User Agreement</li>
          </Link>
          <Link className="term-link">
            <li>Privacy Policy</li>
          </Link>
          <Link className="term-link">
            <li>Software Product License Agreement</li>
          </Link>
        </ul>
      </section>
    </div>
  );
};

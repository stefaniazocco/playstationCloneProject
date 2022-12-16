import React from "react";
import "./devsPage.scss";

import { developers } from "./dataDevsPage";

export const DevsPage = () => {
  return (
    <div>
      <div className="card-section-wrapper">
        {developers.map((developer) => (
          <section className="dev-card">
            <img className="photo-placeholder" src={developer.photo} alt="" />
            <h1 className="card-title">{developer.name}</h1>
            <section className="qr-code">
              <img src={developer.qrcode} alt="" />
            </section>
          </section>
        ))}
      </div>
    </div>
  );
};

import React from "react";
import "./notFound404.scss";
import { Button } from "../../buttons/Button";
import astrobot from "../../../../assets/images/notFoundImg/astrobot.webp";

export const NotFound404 = () => {
  return (
    <div
      className="robot404-wrapper"
      style={{
        backgroundImage: `url(${astrobot})`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="robot-message">
        <h1 className="robot-first-title"> Errore 404</h1>
        <h3 className="robot-second-title">Sembra che tu ti sia perso</h3>
        <p>
          Questa pagina non esiste. Prima di richiedere l'intervento di Astro
          Bot, verifica l'URL o torna a playstation.com
        </p>
        <Button
          className={"button-white"}
          link={"/"}
          string={"Cerca qualcosa"}
        />
      </div>
    </div>
  );
};

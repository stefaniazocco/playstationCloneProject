import React from "react";
import { Cards404 } from "../../cards/404Cards/Cards404";
import "./notFound404Cards.scss";
import { Link } from "react-router-dom";
import { cardData } from "../../cards/404Cards/data404Cards";
import { HiOutlineChevronRight } from "react-icons/hi";

export const NotFound404Cards = () => {
  return (
    <div className="redirection404-wrapper">
      <div className="cards-wrapper">
        {cardData.map((info) => (
          <Cards404 info={info} />
        ))}
      </div>
      <div className="map-wrapper">
        <Link className="map">
          <p>
            Oppure, dai un'occhiata alla mappa del sito{" "}
            <HiOutlineChevronRight style={{ color: "#0068BD" }} />
          </p>
        </Link>
      </div>
    </div>
  );
};

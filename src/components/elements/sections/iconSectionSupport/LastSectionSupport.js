import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import BookIMG from "../../../../assets/images/support/bookSupportSection.webp"

const LastSectionSupport = () => {
  return (
    <div className="wrapperLastSection">
      <div className="lastSection">
        <h4>Informazioni importanti</h4>
        <p>
          Trova informazioni su prodotti, funzionalità e servizi PlayStation che
          non sono <br/> più disponibili o che stanno per essere sospesi.
        </p>
        <Link>
          Controlla le informazioni importanti <MdKeyboardArrowRight />
        </Link>
      </div>
      <img src={BookIMG} height="250px"/>
    </div>
  );
};

export default LastSectionSupport;

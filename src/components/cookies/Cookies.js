import { useEffect, useState } from "react";
import cookies from "../../assets/images/homepage/logo-cookies.png";
import xIcon from "../../assets/images/homepage/x-icon.png";

export function Cookies({hide, accept}){

    
   

    return(
        <>      
        <section id="cookies-section">
            <img className="logo-cookies" src={cookies} />
            <div className="cookies-text">Sony Interactive Entertainment Europe Limited utilizza i cookie per personalizzare la
                tua esperienza e gli annunci pubblicitari su questo sito Web e su siti Web di terze parti, analizzare i
                dati, migliorare le prestazioni del sito e consentire la condivisione sui social media. Per ulteriori
                informazioni o per modificare le impostazioni, <a href="#">consulta la nostra Informativa sui cookie</a> .
            </div>
            <div className="cookies-buttons">
                <div className="cookies-Button" onClick={hide}>
                    <a href="#">
                        <div>Rifiuta</div>
                    </a>
                </div>
                <div className="cookies-Button" onClick={accept}>
                    <a href="#">
                        <div>Accetta</div>
                    </a>
                </div>
            </div>

            <button className="close-tab" onClick={hide}><img src={xIcon} /></button>
        </section>
        </>
    )
}
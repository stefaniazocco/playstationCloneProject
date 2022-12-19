import { useEffect, useState } from "react";
import cookies from "../../assets/images/homepage/logo-cookies.png";
import xIcon from "../../assets/images/homepage/x-icon.png";
import { useTranslation } from "react-i18next";

export function Cookies({hide, accept}){

    const { t } = useTranslation();
   

    return(
        <>      
        <section id="cookies-section">
            <img className="logo-cookies" src={cookies} />
            <div className="cookies-text">{t("first-cookies")} <a href="#">{t("link-cookies")}</a> .
            </div>
            <div className="cookies-buttons">
                <div className="cookies-Button" onClick={hide}>
                    <a href="#">
                        <div>{t("btn1")}</div>
                    </a>
                </div>
                <div className="cookies-Button" onClick={accept}>
                    <a href="#">
                        <div>{t("btn2")}</div>
                    </a>
                </div>
            </div>

            <button className="close-tab" onClick={hide}><img src={xIcon} /></button>
        </section>
        </>
    )
}
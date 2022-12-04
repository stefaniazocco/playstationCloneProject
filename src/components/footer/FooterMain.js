import { Link } from "react-router-dom";
import pslogo from "../../assets/images/homepage/footerLogo.svg"
import sie from "../../assets/images/homepage/footerSie.svg"
import globe from "../../assets/images/homepage/footerGlobe.svg"
import { useTranslation } from "react-i18next";

export function FooterMain(){
    const { t } = useTranslation();
    return(
            <footer className="footer">
                <div>
                    <div className="footer-left">
                        <img className="footer-ps-logo" src={pslogo} alt="PlayStation logo" />
                        <div className="footer-lang">
                            <Link to="/country-selector" className="footer-link-lang">
                                <img className="footer-globe" alt="" src={globe} />
                                Country / Region: Italy
                            </Link>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <img className="footer-sie" src={sie} alt="Sony Interactive Entertainment logo" />
                        {t("website")}
                        <Link class="footer-maggiori-info" to="#">{t("more-info")}</Link>
                    </div>
                    <ul className="footer-list1">
                        <li> <Link to="/support">{t("support")}</Link></li>
                        <li> <Link to="#">{t("terms")}</Link></li>
                        <li> <Link to="#">PlayStation Studios</Link></li>
                        <li> <Link to="#">{t("privacy")}</Link></li>
                        <li> <Link to="#">{t("legals")}</Link></li>
                        <li> <Link to="/presentation">{t("about")}</Link></li>
                        <li> <Link to="#">{t("enviroment")}</Link></li>
                    </ul>
                    <ul className="footer-list2">
                        <li> <Link to="#">{t("psn")}</Link></li>
                        <li> <Link to="#">{t("terms-unsub")}</Link></li>
                        <li> <Link to="#">{t("health-warn")}</Link></li>
                        <li> <Link to="#">{t("class-age")}</Link></li>
                        <li> <Link to="#">{t("terms-software")}</Link></li>
                        <li> <Link to="#">{t("work-play")}</Link></li>
                        <li> <Link to="#">{t("website-map")}</Link></li>
                    </ul>
                    <ul className="footer-list3">
                        <li> <Link to="#">Facebook</Link></li>
                        <li> <Link to="#">Twitter</Link></li>
                        <li> <Link to="#">YouTube</Link></li>
                        <li> <Link to="#">Instagram</Link></li>
                    </ul>
                </div>
            </footer>
    )
}
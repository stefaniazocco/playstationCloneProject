import { Link } from "react-router-dom";
import pslogo from "../../assets/images/homepage/footerLogo.svg"
import sie from "../../assets/images/homepage/footerSie.svg"
import globe from "../../assets/images/homepage/footerGlobe.svg"

export function FooterMain(){
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
                        Website ©2022 Sony Interactive Entertainment Europe Limited. Tutti i contenuti, nomi dei giochi, nomi
                        commerciali e/o di abbigliamento, marchi registrati, grafica e immagini associati sono marchi registrati
                        e/o materiale protetto da copyright dei rispettivi proprietari. Tutti i diritti riservati. 
                        <Link class="footer-maggiori-info" to="#">Maggiori info</Link>
                    </div>
                    <ul className="footer-list1">
                        <li> <Link to="#">Supporto</Link></li>
                        <li> <Link to="#">Termini di utilizzo del sito Web</Link></li>
                        <li> <Link to="#">PlayStation Studios</Link></li>
                        <li> <Link to="#">Informativa sulla privacy e sui cookie</Link></li>
                        <li> <Link to="#">Termini legali</Link></li>
                        <li> <Link to="#">Chi siamo</Link></li>
                        <li> <Link to="#">PlayStation e l'ambiente</Link></li>
                    </ul>
                    <ul className="footer-list2">
                        <li> <Link to="#">Termini di servizio di PSN</Link></li>
                        <li> <Link to="#">Termini di annullamento del PS Store</Link></li>
                        <li> <Link to="#">Avvertenze per la salute</Link></li>
                        <li> <Link to="#">Classificazioni per età</Link></li>
                        <li> <Link to="#">Termini d'uso del Software</Link></li>
                        <li> <Link to="#">Lavora con PlayStation</Link></li>
                        <li> <Link to="#">Mappa del sito</Link></li>
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
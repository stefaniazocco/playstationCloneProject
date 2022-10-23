import { Link } from "react-router-dom";
import pslogo from "../../assets/images/homepage/footerLogo.svg"
import globe from "../../assets/images/homepage/footerGlobe.svg"


export function FooterGames() {
    return(

        <footer className="footerGames">
            <div className="box-logo-language">
                <div>
                    <img src={pslogo} alt="ps logo" width="47.68" height="36.77" />
                </div>
                <div className="languages"> <img src={globe} alt="globo" width="34px" height="34px" />
                    <Link className="paese-regione" to="">Paese / Regione Italia </Link>
                </div>
            </div>


            <div className="container-flex">

                <div className="list-1">
                    <ul>
                        <li className="links"><Link to="">Privacy e cookie</Link></li>
                        <li className="links"><Link to="">Termini di servizio del sito Web</Link></li>
                        <li className="links"><Link to="">Supporto</Link></li>
                        <li className="links"><Link to="">Mappa del sito</Link></li>
                        <li className="links"><Link to="">PlayStation Studios</Link></li>
                        <li className="links"><Link to="">Termini legali</Link></li>
                        <li className="links"><Link to="">Informazioni su SIE</Link></li>
                    </ul>
                </div>

                <div className="list-2">
                    <ul>
                        <li className="links"><Link to="">Termini di servizio di PSN</Link></li>
                        <li className="links"><Link to="">Condizioni di utilizzo del software</Link></li>
                        <li className="links"><Link to="">Politica di annullamento di PS Store</Link></li>
                        <li className="links"><Link to="">Avvertenze per la salute</Link></li>
                        <li className="links"><Link to="">Informazioni sulle classificazioni</Link></li>
                    </ul>
                </div>

                <div className="list-3">
                    <ul>
                        <li className="links"><Link to="">Facebook</Link></li>
                        <li className="links"><Link to="">Twitter</Link></li>
                        <li className="links"><Link to="">Youtube</Link></li>
                        <li className="links"><Link to="">App Android</Link></li>
                        <li className="links"><Link to="">App iOS</Link></li>
                    </ul>
                </div>


            </div>

            <div className="copyright">
                <Link to="#"> © 2022 Sony Interactive Entertainment Europe Ltd. Tutti i diritti riservati.</Link>
            </div>
        </footer>
        
    )
}
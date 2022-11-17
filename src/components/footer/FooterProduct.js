import fb from "../../assets/images/product/footer-facebook.png";
import tw from "../../assets/images/product/footer-twitter.png";
import ins from "../../assets/images/product/footer-insta.png";
import logos from "../../assets/images/product/mini-logos-footer.png";
import ps from "../../assets/images/product/mini-ps-footer.png";
import psp from "../../assets/images/product/mini-psp-footer.png";

import "./footerProduct.scss"

export function FooterProduct(){
    return(
        <footer className="footerProd">
            <div class="footer-top">
                <div class="footer-top-left">
                    <a href="#">ACCOUNT</a>
                    <a href="#">ACCEDI</a>
                    <a href="#">I MIEI ORDINI</a>
                    <a href="#">IL MIO CARRELLO</a>
                </div>
                <div class="footer-top-right">
                    <a href="#"><img src={fb} alt="facebook"/></a>
                    <a href="#"><img src={tw} alt="twitter"/></a>
                    <a href="#"><img src={ins} alt="instagram"/></a>
                </div>
            </div>
            <div class="footer-border"></div>
            <div class="footer-center">
                <a href="#">Informazioni per gli acquisti</a>
                <a href="#">Contattaci</a>
                <a href="#">Informativa sulla privacy</a>
                <a href="#">Condizioni di utilizzo</a>
            </div>
            <div class="footer-bottom">
                Copyright 2022 Bensussen Deutsch & Associates, LTD. Tutti i diritti riservati L’utilizzo di questo sito è soggetto ai Termini di utilizzo e all’Informativa sulla privacy di BDA. <br />
                Il presente sito è gestito da BDA, LTD. La proprietà di tutti i loghi, i marchi commerciali e i marchi è dei rispettivi proprietari. <br /><br /><br /><br />
                © 2022 Sony Interactive Entertainment Inc. "<img src={ps} alt="" />", "PlayStation", "<img src={logos} alt="" />", "<img src={psp} alt="" />" e "DualSense" sono marchi commerciali o marchi registrati di Sony Interactive Entertainment Inc. Licenza per la produzione concessa da Sony Interactive Entertainment LLC.
            </div>
            
        </footer>
    )
}
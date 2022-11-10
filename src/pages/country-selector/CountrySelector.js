import sony from "../../assets/images/homepage/sony-logo.png"
import logo from "../../assets/images/homepage/logo-black.svg"
import { useNavigate } from "react-router-dom"

export function CountrySelector() {
    const navigate= useNavigate()

    return (
        
        <div className="country-selector">
            <div class="sony-bar">

                <span class="logo-sony"><img class="mb-1" src={sony} alt=""/></span>
            </div>
            <div class="main">
                <div class="image" onClick={() => navigate("/")}><img src={logo} alt=""/></div>

                <div class="title">

                    <h1>Please select your country / region</h1>

                </div>
            </div>
            <hr />
                <div class="main2">
                    <div class="languages">
                        <div class="letter-a">
                            <div class="letterbox letterbox1">A</div>
                            <a href="#">Argentina</a>
                            <a href="#">Australia</a>
                            <a href="#">Austria (Österreich)</a>
                        </div>

                        <div class="letterb">
                            <div class="letterbox">B</div>
                            <a href="#">Bahrain (English)</a>
                            <a href="#">Bahrain (Arabic)</a>
                            <a href="#">Belgium (Français)</a>
                            <a href="#">Belgium (Nederlands)</a>
                            <a href="#">Bolivia</a>
                            <a href="#">Brasil</a>
                            <a href="#">Bulgaria (English)</a>
                            <a href="#">Bulgaria (България)</a>
                        </div>

                        <div class="letter-c">
                            <div class="letterbox">C</div>
                            <a href="#">Canada</a>
                            <a href="#">Canada (French)</a>
                            <a href="#">Chile</a>
                            <a href="#">中国大陆 (简体中文)</a>
                            <a href="#">Colombia</a>
                            <a href="#">Costa Rica</a>
                            <a href="#">Croatia (English)</a>
                            <a href="#">Croatia (Hrvatska)</a>
                            <a href="#">Cyprus</a>
                            <a href="#">Czech Republic (English)</a>
                            <a href="#">Czech Republic (Ceská Republika)</a>
                        </div>

                        <div class="letter-d">
                            <div class="letterbox">D</div>
                            <a href="#">Denmark (Danmark)</a>
                            <a href="#">Denmark (English)</a>
                        </div>

                        <div class="letter-e">
                            <div class="letterbox">E</div>
                            <a href="#">Ecuador</a>
                            <a href="#">El Salvador</a>
                        </div>

                        <div class="letter-f">
                            <div class="letterbox">F</div>
                            <a href="#">Finland (English)</a>
                            <a href="#">Finland (Suomi)</a>
                            <a href="#">France</a>
                        </div>

                        <div class="letter-g">
                            <div class="letterbox">G</div>
                            <a href="#">Germany (Deutschland)</a>
                            <a href="#">Greece (English)</a>
                            <a href="#">Greece (Ελλαδα)</a>
                            <a href="#">Guatemala</a>
                        </div>

                        <div class="letter-h">
                            <div class="letterbox">H</div>
                            <a href="#">Honduras</a>
                            <a href="#">Hong Kong (English)</a>
                            <a href="#">Hong Kong (简体中文)</a>
                            <a href="#">Hong Kong (繁體中文)</a>
                            <a href="#">香港 (繁體中文)</a>
                            <a href="#">香港 (简体中文)</a>
                            <a href="#">Hungary (English)</a>
                            <a href="#">Hungary (Magyarország)</a>
                        </div>

                        <div class="letter-i">
                            <div class="letterbox">I</div>
                            <a href="#">Iceland (English)</a>
                            <a href="#">India</a>
                            <a href="#">Indonesia (English)</a>
                            <a href="#">Ireland</a>
                            <a href="#">Israel (English)</a>
                            <a href="#">Israel</a>
                            <a href="../homepage/index.html">Italy</a>
                        </div>

                        <div class="letter-j">
                            <div class="letterbox">J</div>
                            <a href="#">Japan (日本)</a>
                        </div>

                        <div class="letter-k">
                            <div class="letterbox">K</div>
                            <a href="#">Korea (한국어)</a>
                            <a href="#">Kuwait (Arabic)</a>
                            <a href="#">Kuwait (English)</a>
                        </div>

                        <div class="letter-l">
                            <div class="letterbox">L</div>
                            <a href="#">Lebanon (Arabic)</a>
                            <a href="#">Lebanon (English)</a>
                            <a href="#">Luxembourg (Deutsch)</a>
                            <a href="#">Luxembourg (Français)</a>
                        </div>

                        <div class="letter-m">
                            <div class="letterbox">M</div>
                            <a href="#">Malaysia (English)</a>
                            <a href="#">Malta</a>
                            <a href="#">Mexico (México)</a>
                        </div>

                        <div class="letter-n">
                            <div class="letterbox">N</div>
                            <a href="#">Nederland</a>
                            <a href="#">New Zealand</a>
                            <a href="#">Nicaragua</a>
                            <a href="#">Norway (English)</a>
                            <a href="#">Norway (Norge)</a>
                        </div>

                        <div class="letter-o">
                            <div class="letterbox">O</div>
                            <a href="#">Oman (Arabic)</a>
                            <a href="#">Oman (English)</a>
                        </div>

                        <div class="letter-p">
                            <div class="letterbox">P</div>
                            <a href="#">Panama (Panamá)</a>
                            <a href="#">Paraguay</a>
                            <a href="#">Peru (Perú)</a>
                            <a href="#">Philippines (English)</a>
                            <a href="#">Poland (English)</a>
                            <a href="#">Poland (Polska)</a>
                            <a href="#">Portugal</a>
                        </div>

                        <div class="letter-q">
                            <div class="letterbox">Q</div>
                            <a href="#">Qatar (Arabic)</a>
                            <a href="#">Qatar (English)</a>
                        </div>

                        <div class="letter-r">
                            <div class="letterbox">R</div>
                            <a href="#">Romania (English)</a>
                            <a href="#">Romania (România)</a>
                            <a href="#">Russia (Россия)</a>
                        </div>

                        <div class="letter-s">
                            <div class="letterbox">S</div>
                            <a href="#">Saudi Arabia (Arabic)</a>
                            <a href="#">Saudi Arabia (English)</a>
                            <a href="#">Serbia (Srbija)</a>
                            <a href="#">Singapore (English)</a>
                            <a href="#">Slovenia (English)</a>
                            <a href="#">Slovenia (Slovenija)</a>
                            <a href="#">Slovakia (English)</a>
                            <a href="#">Slovakia (Slovenská Republika)</a>
                            <a href="#">South Africa</a>
                            <a href="#">Spain (España)</a>
                            <a href="#">Sweden (English)</a>
                            <a href="#">Sweden (Sverige)</a>
                            <a href="#">Switzerland (Deutsch)</a>
                            <a href="#">Switzerland (Français)</a>
                            <a href="#">Switzerland (Italiano)</a>
                        </div>

                        <div class="letter-t">
                            <div class="letterbox">T</div>
                            <a href="#">Taiwan (English)</a>
                            <a href="#">Taiwan (台灣繁體中文)</a>
                            <a href="#">Thailand (English)</a>
                            <a href="#">Thailand (ภาษาไทย)</a>
                            <a href="#">Turkey (English)</a>
                            <a href="#">Turkey (Türkiye)</a>
                        </div>

                        <div class="letter-u">
                            <div class="letterbox">U</div>
                            <a href="#">Ukraine (Російська мова)</a>
                            <a href="#">Ukraine (Українська мова)</a>
                            <a href="#">United Arab Emirates/ Middle East (Arabic)</a>
                            <a href="#">United Arab Emirates/ Middle East (English)</a>
                            <a href="#">United States</a>
                            <a href="#">United Kingdom</a>
                            <a href="#">Uruguay</a>
                        </div>
                        <div class="letter-v">
                            <div class="letterbox">V</div>
                            <a href="#">Vietnam (English)</a>
                        </div>
                    </div>
                </div>


                <footer>
                    <div class="footer-div">
                        <div>
                            <div class="foot"><a href="#">Terms and Conditions</a></div>
                            <div class="foot"><a href="#">Corporate Information</a></div>
                            <div class="foot"><a href="#">Global Home</a></div>
                        </div>
                        <div class="copy">© 2022 Sony Interactive Entertainment Inc.</div>
                    </div>
                </footer>
        </div>
    )
}
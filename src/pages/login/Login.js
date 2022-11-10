import sony from "../../assets/icons/sony-logo.png"
import ps from "../../assets/icons/logo_playstation.png"
import wallpaper from "../../assets/images/homepage/login-wallpaper.jpg"
import { useState } from "react";
import { Link } from "react-router-dom";

export function Login() {
    const [input, setInput] = useState("")
    function handleInput(e){
        let value = e.target.value
        setInput(value)
    }
    return(
        <section class="login-page d-flex justify-content-center align-items-center">
            <img class="background" src={wallpaper} alt="" />
            <div class="card">
                <div class="sony">
                    <img src={sony} alt="" />
                </div>
                <Link to="/" class="playstation">
                    <img src={ps} alt="" />
                </Link>
                <div class="white-box">
                    <div class="form-div">
                        <p>Accedi a PlayStation con uno dei tuoi account Sony.</p>
                        <a class="info" href="">Ulteriori informazioni</a>
                        <div class="d-flex flex-column align-items-center">
                            <form>
                                <input type="email" placeholder="ID di accesso (indirizzo di e-mail)" value={input} onChange={handleInput}  />
                                <br />
                                <button style={{opacity: !input && 0.3}}>Avanti</button>
                            </form>
                            <a class="access" href="">Problemi di accesso?</a>
                            <br />
                            <button class="account">Crea nuovo account</button>
                        </div>

                    </div>

                    <a href="" class="map">Guida/Mappa del sito</a>
                </div>
            </div>
        </section>
    )
}
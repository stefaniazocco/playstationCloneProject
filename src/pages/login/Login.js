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
        <section className="login-page d-flex justify-content-center align-items-center">
            <img className="background" src={wallpaper} alt="" />
            <div className="card">
                <div className="sony">
                    <img src={sony} alt="" />
                </div>
                <Link to="/" className="playstation">
                    <img src={ps} alt="" />
                </Link>
                <div className="white-box">
                    <div className="form-div">
                        <p>Accedi a PlayStation con uno dei tuoi account Sony.</p>
                        <a className="info" href="">Ulteriori informazioni</a>
                        <div className="d-flex flex-column align-items-center">
                            <form>
                                <input type="email" placeholder="ID di accesso (indirizzo di e-mail)" value={input} onChange={handleInput}  />
                                <br />
                                <button style={{opacity: !input && 0.3}}>Avanti</button>
                            </form>
                            <a className="access" href="">Problemi di accesso?</a>
                            <br />
                            <button className="account">Crea nuovo account</button>
                        </div>

                    </div>

                    <a href="" className="map">Guida/Mappa del sito</a>
                </div>
            </div>
        </section>
    )
}

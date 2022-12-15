import sony from "../../assets/icons/sony-logo.png";
import ps from "../../assets/icons/logo_playstation.png";
import wallpaper from "../../assets/images/homepage/login-wallpaper.jpg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { userRequest } from "../../requestMethod";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userRedux";
import { useDispatch, useSelector } from "react-redux";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await userRequest.post(
        "http://localhost:5000/api/auth/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(res);
      res.status === 200 &&
        dispatch(loginSuccess(res.data.user)) &&
        navigate("/");
    } catch (error) {
      error.response.data === "Credenziali errate" && alert("Dati Errati");
      dispatch(loginFailure());
    }
  };

  return (
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
            <a className="info" href="">
              Ulteriori informazioni
            </a>
            <div className="d-flex flex-column align-items-center">
              <form onSubmit={handleClick}>
                <input
                  placeholder="ID di accesso (indirizzo di e-mail)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="input-container">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit">Avanti</button>
              </form>
              <a className="access" href="">
                Problemi di accesso?
              </a>
              <br />
              <Link to="/registration">
                <button className="account">Crea nuovo account</button>
              </Link>
            </div>
          </div>
          <a href="" className="map">
            Guida/Mappa del sito
          </a>
        </div>
      </div>
    </section>
  );
}

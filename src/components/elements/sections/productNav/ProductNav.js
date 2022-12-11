import {BsSearch, BsCart4} from "react-icons/bs";
import {FiMenu} from "react-icons/fi";
import {GrClose} from "react-icons/gr";
import logo from "../../../../assets/images/product/store-logo_desktop.svg";
import ita from "../../../../assets/images/product/ita.png"
import user from "../../../../assets/images/product/store-user.png"
import "./productNav.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//classi pippo, scss, dimensioni immagini

export function ProductNav() {
    const [menu, setMenu]= useState("close")
    const [drop1, setDrop1] = useState("close-1")
    const [drop2, setDrop2] = useState("close-2")

    function handleMenu(){
        if(menu === "close"){
            setMenu("open")
        }
        if(menu === "open"){
            setMenu("close")
        }
    }
    function handleDropdown1(){
        if(drop1 === "close-1"){
            setDrop1("open")
        }
        if(drop1 === "open"){
            setDrop1("close-1")
        }
    }
    function handleDropdown2(){
        if(drop2 === "close-2"){
            setDrop2("open")
        }
        if(drop2 === "open"){
            setDrop2("close-2")
        }
    }

    const product = useSelector((state) => state.product);
    

    return (
        <header>
            <div className="header-top"><a href="#">Consegna gratuita per ordini oltre €90</a></div>
            <div className="header-div-logo">
                <div className="immagine-logo">
                    <Link to="/products">
                        <img src={logo} />
                    </Link>
                </div>

                <nav className="nav-mobile">
                    <button className="hamburger" href="#" onClick={handleMenu}>
                        {menu === "close" && <FiMenu />}
                        {menu === "open" && <GrClose />}
                    </button>
                    <a className="visit-store" href="#">Visit the USA Store</a>
                    <div className="nav-icons">
                        <a href="#"><BsSearch style={{fontSize: 20, color: "black"}} /></a>
                        <a href="#"><img src={ita} /></a>
                        <a href="#"><img src={user} /></a>
                        <Link to="/cart"><BsCart4 style={{fontSize: 20, color: "black"}} /> <span className="span">{product.length}</span></Link>
                    </div>
                </nav>
            </div>
            {menu && <nav className={`${"main-nav"} ${menu}`} id="main-nav" onBlur={() => {setDrop1("close-1"); setDrop2("close-2")}} >
                <ul className="ul-1">
                    <li className="li-1 li-1-1">
                        <div className="list-top-1">
                            <a href="#">PROPRIETÀ</a>
                            <button type="button" className="menu-dropdown-1" onClick={handleDropdown1}>
                                <div className="menu-arrow-1"></div>
                            </button>
                        </div>
                        <ul className={`${"ul-2"} ${drop1}`} id="ul-2">
                            <li className="li-2"><Link to="/products">PlayStation</Link></li>
                            <li className="li-2"><a href="#">Icone dei personaggi di PlayStation Studios</a></li>
                            <li className="li-2"><a href="#">ASTRO BOT Rescue Mission</a></li>
                            <li className="li-2"><a href="#">Demon's Souls</a></li>
                            <li className="li-2"><a href="#">Dreams</a></li>
                            <li className="li-2"><a href="#">Ghost of Tsushima</a></li>
                            <li className="li-2"><a href="#">God of War</a></li>
                            <li className="li-2"><a href="#">Gran Turismo Collection</a></li>
                            <li className="li-2"><a href="#">Horizon Raw Materials</a></li>
                            <li className="li-2"><a href="#">Ratchet & Clank</a></li>
                            <li className="li-2"><a href="#">The Last of Us Part II</a></li>
                            <li className="li-2"><a href="#">Slackboy</a></li>
                            <li className="li-2"><a href="#">Uncharted</a></li>
                        </ul>
                    </li>
                    <li className="li-1 li-1-2">
                        <div className="list-top-2">
                            <a href="#">CATEGORIE</a>
                            <button className="menu-dropdown-2" onClick={handleDropdown2}>
                                <div className="menu-arrow-2"></div>
                            </button>

                        </div>
                        <ul className={`${"ul-2-2"} ${drop2}`} id="ul-2-2">
                            <li className="li-2-2"><a href="#">Nuovi arrivi</a></li>
                            <li className="li-2-2"><a href="#">Abbigliamento</a></li>
                            <li className="li-2-2"><a href="#">Accessori</a></li>
                            <li className="li-2-2"><a href="#">Borse</a></li>
                            <li className="li-2-2"><a href="#">Collezionabili</a></li>
                            <li className="li-2-2"><a href="#">Accessori bevande</a></li>
                            <li className="li-2-2"><a href="#">Cappelli</a></li>
                        </ul>

                    </li>
                    <li className="li-1">
                        <div className="link">
                            <a href="#">Offerte </a>
                            <span></span>
                        </div>

                    </li>
                    <li className="li-1">
                        <div className="link">
                            <a href="#">Visit the USA Store</a>
                        </div>
                    </li>
                </ul>
            </nav>}
        </header>
    )
}
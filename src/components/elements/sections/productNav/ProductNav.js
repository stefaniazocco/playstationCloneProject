import {BsSearch, BsCart4} from "react-icons/bs";
import {FiMenu} from "react-icons/fi";
import {GrClose} from "react-icons/gr";
import logo from "../../../../assets/images/product/store-logo_desktop.svg";
import ita from "../../../../assets/images/product/ita.png"
import user from "../../../../assets/images/product/store-user.png"
import "./productNav.scss";
import { useState } from "react";

//classi pippo, scss, dimensioni immagini

export function ProductNav() {
    const [menu, setMenu]= useState("close")

    function handleMenu(){
        if(menu === "close"){
            setMenu("open")
        }
        if(menu === "open"){
            setMenu("close")
        }
    }

    return (
        <header>
            <div class="header-top"><a href="#">Consegna gratuita per ordini oltre €90</a></div>
            <div class="header-div-logo">
                <div class="immagine-logo">
                    <a href="#">
                        <img src={logo} />
                    </a>
                </div>

                <nav class="nav-mobile">
                    <button class="hamburger" href="#" onClick={handleMenu}>
                        {menu === "close" && <FiMenu />}
                        {menu === "open" && <GrClose />}
                    </button>
                    <a class="visit-store" href="#">Visit the USA Store</a>
                    <div class="nav-icons">
                        <a href="#"><BsSearch style={{fontSize: 20, color: "black"}} /></a>
                        <a href="#"><img src={ita} /></a>
                        <a href="#"><img src={user} /></a>
                        <a href="#"><BsCart4 style={{fontSize: 20, color: "black"}} /> <span className="span">0</span></a>
                    </div>
                </nav>
            </div>
            {menu && <nav class={`${"main-nav"} ${menu}`} id="main-nav">
                <ul class="ul-1">
                    <li class="li-1 li-1-1">
                        <div class="list-top-1">
                            <a href="#">PROPRIETÀ</a>
                            <button type="button" class="menu-dropdown-1">
                                <div class="menu-arrow-1"></div>
                            </button>
                        </div>
                        <ul class="ul-2 close-1" id="ul-2">
                            <li class="li-2"><a href="#">PlayStation</a></li>
                            <li class="li-2"><a href="#">Icone dei personaggi di PlayStation Studios</a></li>
                            <li class="li-2"><a href="#">ASTRO BOT Rescue Mission</a></li>
                            <li class="li-2"><a href="#">Demon's Souls</a></li>
                            <li class="li-2"><a href="#">Dreams</a></li>
                            <li class="li-2"><a href="#">Ghost of Tsushima</a></li>
                            <li class="li-2"><a href="#">God of War</a></li>
                            <li class="li-2"><a href="#">Gran Turismo Collection</a></li>
                            <li class="li-2"><a href="#">Horizon Raw Materials</a></li>
                            <li class="li-2"><a href="#">Ratchet & Clank</a></li>
                            <li class="li-2"><a href="#">The Last of Us Part II</a></li>
                            <li class="li-2"><a href="#">Slackboy</a></li>
                            <li class="li-2"><a href="#">Uncharted</a></li>
                        </ul>
                    </li>
                    <li class="li-1 li-1-2">
                        <div class="list-top-2">
                            <a href="#">CATEGORIE</a>
                            <button class="menu-dropdown-2">
                                <div class="menu-arrow-2"></div>
                            </button>

                        </div>
                        <ul class="ul-2-2 close-2" id="ul-2-2">
                            <li class="li-2-2"><a href="#">Nuovi arrivi</a></li>
                            <li class="li-2-2"><a href="#">Abbigliamento</a></li>
                            <li class="li-2-2"><a href="#">Accessori</a></li>
                            <li class="li-2-2"><a href="#">Borse</a></li>
                            <li class="li-2-2"><a href="#">Collezionabili</a></li>
                            <li class="li-2-2"><a href="#">Accessori bevande</a></li>
                            <li class="li-2-2"><a href="#">Cappelli</a></li>
                        </ul>

                    </li>
                    <li class="li-1">
                        <div class="link">
                            <a href="#">Offerte </a>
                            <span></span>
                        </div>

                    </li>
                    <li class="li-1">
                        <div class="link">
                            <a href="#">Visit the USA Store</a>
                        </div>
                    </li>
                </ul>
            </nav>}
        </header>
    )
}
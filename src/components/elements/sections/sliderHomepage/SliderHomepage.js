import { CardsSliderHomepage } from "../../cards/CardsSliderHomepage";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ButtonClick } from "../../buttons/ButtonClick"

//images
import quarry from "../../../../assets/images/homepage/the-quarry-store-artwork-01-en-28apr22.webp"
import stray from "../../../../assets/images/homepage/stray-pack-01-ps4-ps5-en-10jun22.webp"
import horizon from "../../../../assets/images/homepage/horizon-forbidden-west-store.webp"
import elden from "../../../../assets/images/homepage/elden-ring-store.webp"
import uncharted from "../../../../assets/images/homepage/uncharted-legacy-of-thieves-pack-01-ps5-14apr22.webp"
import tiny from "../../../../assets/images/homepage/tiny-tinas-wonderland-storeart-01-en-29oct21.webp"
import sifu from "../../../../assets/images/homepage/sifu-store-art-01-en-9mar22.webp"
import dying from "../../../../assets/images/homepage/dying-light-2-stay-human-store-art-01-03nov21.webp"
import lego from "../../../../assets/images/homepage/lego-star-wars-skywalker-saga-storeart-01-en-11feb22.webp"
import ghostwire from "../../../../assets/images/homepage/ghostwire-tokyo-store-art-01-ps5-en-08jun20.webp"
import gt from "../../../../assets/images/homepage/gran-turismo-7-packshot-01-en-09sep21.webp"
import deathloop from "../../../../assets/images/homepage/deathloop-store-art-01-ps4-ps5-en-20nov20.webp"
import hogwarts from "../../../../assets/images/homepage/hogwarts-packshot-thumb-01-en-12jan21.webp"
import fifa from "../../../../assets/images/homepage/fifa-23-standard-edition-pack-01-ps4-ps5-en-01aug22.webp"
import callisto from "../../../../assets/images/homepage/the-callisto-protocol-store-artwork-01-en-22jun22.webp"
import gotham from "../../../../assets/images/homepage/gotham-knights-store-art-01-02nov21$en.webp"
import saints from "../../../../assets/images/homepage/saints-row-store-art-01-en-29oct21.webp"
import forspoken from "../../../../assets/images/homepage/forspoken-pack-01-en-ps5-06jan22.webp"
import call from "../../../../assets/images/homepage/call-of-duty-modern-warfare-2-pack-01-ps4-ps5-en-26may22$en.webp"
import devil from "../../../../assets/images/homepage/little-devil-inside-store-art-01-ps4-ps5-26may21$en.webp"
import suicide from "../../../../assets/images/homepage/suicide-squad-KtJL-storeart-01-en-9dec21.webp"
import sonic from "../../../../assets/images/homepage/sonic-frontiers-store-artwork-01-en-24aug22.webp"
import speed from "../../../../assets/images/homepage/need-for-speed-unbound-store-artwork-01-en-25oct22.webp"
import fighter from "../../../../assets/images/homepage/street-fighter-6-pack-01-ps4-ps5-02sep22.webp"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


export function SliderHomepage(){
    const [next, setNext] = useState()

    function clickNext(){
        setNext({ transform: "translateX(-102%)", transitionDuration: "2s"})
    }
    function clickPrev(){
        setNext({ transform: "translateX(0)", transitionDuration: "2s"})
    }

    return(
        <section className="new-section" id="new-section">
            <Slide move={next}/>
            <Slide2 move={next} />
            <div className="arrow1">
                <ButtonClick className="button-white arr" click={clickPrev} string={<IoIosArrowBack style={{fontSize: 32, marginTop: 2}} />}/>
                <ButtonClick className="button-white arr" click={clickNext} string={<IoIosArrowForward style={{fontSize: 32, marginTop: 2}} />}/>
            </div>   
            {/* <div className="dark"></div>          */}
        </section>
    )
}

function Slide({move}){
    const { t } = useTranslation();
    return(
        <div className="new-section-1" style={move} >
            <div className="titles-container-nuove-uscite">
                <div className="new-releases">
                    <h3>{t("title-slider")}</h3>
                    <p>{t("sub-slider")}</p>
                </div>
            </div>

            <div className="container-nuove-uscite" id="change-slide">

                <div className="box1 change-slide">
                    <CardsSliderHomepage img={quarry} link="" title="The Quarry" />
                    <CardsSliderHomepage img={stray} link="" title="Stray" />
                    <CardsSliderHomepage img={horizon} link="" title="Horizon Forbidden West" />
                    <CardsSliderHomepage img={elden} link="" title="Elden Ring" />
                </div>

                <div className="box2 change-slide">
                    <CardsSliderHomepage img={uncharted} link="" title="UNCHARTED™: Legacy of Thieves Collection" />
                    <CardsSliderHomepage img={tiny} link="" title="Tiny Tina's Wonderland" />
                    <CardsSliderHomepage img={sifu} link="" title="Sifu" />
                    <CardsSliderHomepage img={dying} link="" title="Dying Light 2 Stay Human" />
                    
                </div>

                <div className="box3 change-slide">
                    <CardsSliderHomepage img={lego} link="" title="LEGO Star Wars: The Skywalker Saga" />
                    <CardsSliderHomepage img={ghostwire} link="" title="Ghostwire: Tokyo" />
                    <CardsSliderHomepage img={gt} link="" title="Gran Turismo® 7" />
                    <CardsSliderHomepage img={deathloop} link="" title="DEATHLOOP" />
                </div>

            </div>

            <div className="newdots">
                <div className="change-dot"></div>
                <div className="change-dot"></div>
                <div className="change-dot"></div>
            </div>

        </div>

    )
}

function Slide2({move}){
    const { t } = useTranslation();
    return(
        <div className="new-section-1" style={move}>
            <div className="titles-container-nuove-uscite">
                <div className="new-releases">
                    <h3>{t("title-slider2")}</h3>
                    <p>{t("sub-slider2")}</p>
                </div>
            </div>

            <div className="container-nuove-uscite" id="change-slide">

                <div className="box1 change-slide">
                    <CardsSliderHomepage img={hogwarts} link="" title="Hogwarts Legacy" />
                    <CardsSliderHomepage img={fifa} link="" title="EA SPORTS™ FIFA 23" />
                    <CardsSliderHomepage img={callisto} link="" title="The Callisto Protocol" />
                    <CardsSliderHomepage img={gotham} link="" title="Gotham Knights" />
                </div>

                <div className="box2 change-slide">
                    <CardsSliderHomepage img={saints} link="" title="Saints Row" />
                    <CardsSliderHomepage img={forspoken} link="" title="Forspoken" />
                    <CardsSliderHomepage img={call} link="" title="Call of Duty: Modern Warfare II" />
                    <CardsSliderHomepage img={devil} link="" title="Little Devil Inside" />
                    
                </div>

                <div className="box3 change-slide">
                    <CardsSliderHomepage img={suicide} link="" title="Suicide Squad: Kill the Justice League" />
                    <CardsSliderHomepage img={sonic} link="" title="Sonic Frontiers" />
                    <CardsSliderHomepage img={speed} link="" title="Need for Speed Unbound" />
                    <CardsSliderHomepage img={fighter} link="" title="Street Fighter 6" />
                </div>

            </div>

            <div className="newdots">
                <div className="change-dot"></div>
                <div className="change-dot"></div>
                <div className="change-dot"></div>
            </div>

        </div>

    )
}
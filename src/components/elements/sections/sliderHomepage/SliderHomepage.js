import { CardsSliderHomepage } from "../../cards/CardsSliderHomepage"

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

export function SliderHomepage(){

    return(
        <section class="new-section" id="new-section">
            <Slide />
        </section>
    )
}

function Slide(){
    return(
        <div class="new-section-1 section-slide" id="section-container">
            <div class="titles-container-nuove-uscite">
                <div class="new-releases">
                    <h3>Nuove uscite</h3>
                    <p>Giochi incredibili per PS4 e PS5 disponibili ora</p>
                </div>
                <div class="freccette">
                    <button class="arrow"><a>
                            <div></div>
                        </a></button>
                    <button class="arrow arrow1"><a>
                            <div></div>
                        </a></button>
                </div>
            </div>

            <div class="container-nuove-uscite" id="change-slide">

                <div class="box1 change-slide">
                    <CardsSliderHomepage img={quarry} link="" title="The Quarry" />
                    <CardsSliderHomepage img={stray} link="" title="Stray" />
                    <CardsSliderHomepage img={horizon} link="" title="Horizon Forbidden West" />
                    <CardsSliderHomepage img={elden} link="" title="Elden Ring" />
                </div>

                <div class="box2 change-slide">
                    <CardsSliderHomepage img={uncharted} link="" title="UNCHARTED™: Legacy of Thieves Collection" />
                    <CardsSliderHomepage img={tiny} link="" title="Tiny Tina's Wonderland" />
                    <CardsSliderHomepage img={sifu} link="" title="Sifu" />
                    <CardsSliderHomepage img={dying} link="" title="Dying Light 2 Stay Human" />
                    
                </div>

                <div class="box3 change-slide">
                    <CardsSliderHomepage img={lego} link="" title="LEGO Star Wars: The Skywalker Saga" />
                    <CardsSliderHomepage img={ghostwire} link="" title="Ghostwire: Tokyo" />
                    <CardsSliderHomepage img={gt} link="" title="Gran Turismo® 7" />
                    <CardsSliderHomepage img={deathloop} link="" title="DEATHLOOP" />
                </div>

            </div>

            <div class="newdots">
                <div class="change-dot"></div>
                <div class="change-dot"></div>
                <div class="change-dot"></div>
            </div>

        </div>

    )
}
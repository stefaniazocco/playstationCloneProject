import { CardsStoreHomepage } from "../../cards/CardsStoreHomepage";

//images
import tshirt from "../../../../assets/images/homepage/store-ps-logo-tshirt.webp"
import hoodie from "../../../../assets/images/homepage/store-ps-heritage-zipup-hoodie.webp"
import hat from "../../../../assets/images/homepage/store-ps-brand-hat.webp"
import mug from "../../../../assets/images/homepage/store-ps-heritage-mug.webp"
import bg3000 from "../../../../assets/images/homepage/storeSection-background-min3000.webp"
import bg1367 from "../../../../assets/images/homepage/storeSection-background-min1367.webp"
import bg1024 from "../../../../assets/images/homepage/storeSection-background-min1024.webp"
import bg768 from "../../../../assets/images/homepage/storeSection-background-min768.webp"
import bg320 from "../../../../assets/images/homepage/storeSection-background-min320.webp"
import logo from "../../../../assets/images/homepage/store-tshirt-logo.webp"
import { Button } from "../../buttons/Button";




export function StoreHomepage() {
    return(
        <section class="store-section">

            {/* BACKGROUND */}
            <picture class="store-section-bg" data-alt="immagine di fondo">
                <source srcset={bg3000} media="(min-width: 2400px)" />
                <source srcset={bg1367} media="(min-width: 1367px)" />
                <source srcset={bg1024} media="(min-width: 1024px)" />
                <source srcset={bg768} media="(min-width: 768px)" />
                <source srcset={bg320} media="(min-width: 320px)" />
                <img src={bg1024} alt="" />
            </picture>

            {/* CONTENUTO */}
            <div class="store-section-content">

                {/* TITOLO */}
                <div class="store-content-title">
                    <img src={logo} alt="logo playstation store" />
                    <h2>Abbigliamento e merchandise su licenza ufficiale di PlayStation</h2>
                    <p>Visita il negozio PlayStation Gear per accessori ufficiali, oggetti collezionabili, abbigliamento e
                        molto altro ancora</p>
                </div>

                {/* CARD */}
                <div class="store-card-div">
                    <CardsStoreHomepage img={hoodie} product="Felpa con zip Heritage PlayStation™" link="/product" />
                    <CardsStoreHomepage img={tshirt} product="Maglietta logo PlayStation" link="/product" />
                    <CardsStoreHomepage img={hat} product="Cappello di marca PlayStation ™ 47" link="/product" />
                    <CardsStoreHomepage img={mug} product="Tazza Heritage PlayStation™" link="/product" />
                </div>
                {/* BOTTONE */}
                <Button className="button-white store-Button" link="#" string="Acquista la collezione" />

            </div>

        </section>
    )
}
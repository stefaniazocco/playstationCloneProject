import { CardsStoreHomepage } from "../../cards/CardsStoreHomepage";
import { useTranslation } from "react-i18next";

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
import { useParams } from "react-router-dom";



export function StoreHomepage() {
    const { t } = useTranslation();
    return(
        <section className="store-section">

            {/* BACKGROUND */}
            <picture className="store-section-bg" data-alt="immagine di fondo">
                <source srcset={bg3000} media="(min-width: 2400px)" />
                <source srcset={bg1367} media="(min-width: 1367px)" />
                <source srcset={bg1024} media="(min-width: 1024px)" />
                <source srcset={bg768} media="(min-width: 768px)" />
                <source srcset={bg320} media="(min-width: 320px)" />
                <img src={bg1024} alt="" />
            </picture>

            {/* CONTENUTO */}
            <div className="store-section-content">

                {/* TITOLO */}
                <div className="store-content-title">
                    <img src={logo} alt="logo playstation store" />
                    <h2>{t("store-title")}</h2>
                    <p>{t("sub-title")}</p>
                </div>

                {/* CARD */}
                <div className="store-card-div">
                    <CardsStoreHomepage img={hoodie} product={t("product1")} link="/product/hoodie" string={t("acquista")}/>
                    <CardsStoreHomepage img={tshirt} product={t("product2")} link="/product/tshirt" string={t("acquista")}/>
                    <CardsStoreHomepage img={hat} product={t("product3")} link="/product/hat" string={t("acquista")}/>
                    <CardsStoreHomepage img={mug} product={t("product4")} link="/product/mug" string={t("acquista")}/>
                </div>
                {/* BOTTONE */}
                <Button className="button-white store-Button" link="#" string={t("collection")} />

            </div>

        </section>
    )
}
import stray3000 from "../../../../assets/images/homepage/Stray-homepage-hero-desktop-min-3000.webp"
import stray1367 from "../../../../assets/images/homepage/Stray-homepage-hero-desktop-min-1367.webp"
import stray1024 from "../../../../assets/images/homepage/Stray-homepage-hero-desktop-min-1024.webp"
import stray768 from "../../../../assets/images/homepage/Stray-homepage-hero-desktop-min-768.webp"
import stray320 from "../../../../assets/images/homepage/Stray-homepage-hero-mobile-min-320.webp"
import straylogo from "../../../../assets/images/homepage/stray-white-logo-1.webp"
import { Button } from "../../buttons/Button"
import { useTranslation } from "react-i18next";




export function StrayHomepage() {
    const { t } = useTranslation();
    return(
        <section className="stray-section">
            <div className="stray-background">
                <picture>          
                    <source srcset={stray3000} media="(min-width: 3000px)" />
                    <source srcset={stray1367} media="(min-width: 1367px)" />
                    <source srcset={stray1024} media="(min-width: 1024px)" />
                    <source srcset={stray768} media="(min-width: 768px)" />
                    <source srcset={stray320} media="(max-width: 767px)" />
                    <img src={stray1367} alt="background image" />
                </picture>
            </div>

            <div className="stray-fade"></div>
            <div className="stray-text">
                <img src={straylogo} />
                <h2>{t("title-stray")}</h2>
                <p>{t("sub-stray")}</p>
                <Button className="button-white" link="" string={t("btn-stray")} />
            </div>

        </section>
    )
}
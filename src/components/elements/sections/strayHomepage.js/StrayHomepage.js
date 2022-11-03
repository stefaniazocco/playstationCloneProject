import stray3000 from "../../../../assets/images/homepage/Stray-homepage-hero-desktop-min-3000.webp"
import stray1367 from "../../../../assets/images/homepage/Stray-homepage-hero-desktop-min-1367.webp"
import stray1024 from "../../../../assets/images/homepage/Stray-homepage-hero-desktop-min-1024.webp"
import stray768 from "../../../../assets/images/homepage/Stray-homepage-hero-desktop-min-768.webp"
import stray320 from "../../../../assets/images/homepage/Stray-homepage-hero-mobile-min-320.webp"
import straylogo from "../../../../assets/images/homepage/stray-white-logo-1.webp"
import { Button } from "../../buttons/Button"




export function StrayHomepage() {
    return(
        <section class="stray-section">
            <div class="stray-background">
                <picture>          
                    <source srcset={stray3000} media="(min-width: 3000px)" />
                    <source srcset={stray1367} media="(min-width: 1367px)" />
                    <source srcset={stray1024} media="(min-width: 1024px)" />
                    <source srcset={stray768} media="(min-width: 768px)" />
                    <source srcset={stray320} media="(max-width: 767px)" />
                    <img src={stray1367} alt="background image" />
                </picture>
            </div>

            <div class="stray-fade"></div>
            <div class="stray-text">
                <img src={straylogo} />
                <h2>Fuggi dalla città</h2>
                <p>Svela antichi misteri e trova la strada di casa 
                    in questa avventura felina unica, disponibile ora 
                    per PS5.</p>
                <Button className="button-white" link="" string="Maggiori informazioni" />
            </div>

        </section>
    )
}
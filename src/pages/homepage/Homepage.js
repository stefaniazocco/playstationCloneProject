import { useState } from "react";
import { Cookies } from "../../components/cookies/Cookies";
import { Button } from "../../components/elements/buttons/Button";
import { CardsStoreHomepage } from "../../components/elements/cards/CardsStoreHomepage";
import { Counter } from "../../components/elements/counter/StoreCounter";
import { ExplorePlay } from "../../components/elements/sections/exploreplay/ExplorePlay";
import { PlayPlus } from "../../components/elements/sections/sales-plus/PlayPlus";
import { SliderHomepage } from "../../components/elements/sections/sliderHomepage/SliderHomepage";
import { Socials } from "../../components/elements/sections/socials/Socials";
import { StoreHomepage } from "../../components/elements/sections/storeHomepage/StoreHomepage";
import { StrayHomepage } from "../../components/elements/sections/strayHomepage.js/StrayHomepage";
import { FooterMain } from "../../components/footer/FooterMain";
import { SalesPlay } from "../../components/elements/sections/sales-plus/SalesPlay"



export function Homepage(){
    const [close, setClose] = useState(true)

    function hideSection() {
        setClose(false)
    }

    return (
        <>
            <Button className="button-red" link="#" string="Maggiori informazioni"/>
            <Counter />
            <PlayPlus />
            <StrayHomepage />
            <SliderHomepage />
            <ExplorePlay />
            <SalesPlay />
            <StoreHomepage />
            <Socials />
            <FooterMain />
            
            {close === true && <Cookies hide={hideSection} />}
        </>
    )
}
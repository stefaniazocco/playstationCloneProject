import { useState } from "react";
import { Cookies } from "../../components/cookies/Cookies";
import { Button } from "../../components/elements/buttons/Button";
import { CardsStoreHomepage } from "../../components/elements/cards/CardsStoreHomepage";
import { Counter } from "../../components/elements/counter/StoreCounter";
import { Socials } from "../../components/elements/sections/socials/Socials";
import { FooterMain } from "../../components/footer/FooterMain";

//images
import tshirt from "../../assets/images/homepage/store-ps-logo-tshirt.webp"
import hoodie from "../../assets/images/homepage/store-ps-heritage-zipup-hoodie.webp"
import hat from "../../assets/images/homepage/store-ps-brand-hat.webp"
import mug from "../../assets/images/homepage/store-ps-heritage-mug.webp"

export function Homepage(){
    const [close, setClose] = useState(true)

    function hideSection() {
        setClose(false)
    }

    return (
        <>
            <Button className="button-red" link="#" string="Maggiori informazioni"/>
            <Counter />
            <CardsStoreHomepage img={hoodie} product="Felpa con zip Heritage PlayStation™" />
            <CardsStoreHomepage img={tshirt} product="Maglietta logo PlayStation" />
            <CardsStoreHomepage img={hat} product="Cappello di marca PlayStation ™ 47" />
            <CardsStoreHomepage img={mug} product="Tazza Heritage PlayStation™" />
            <Socials />
            <FooterMain />
            
            {close === true && <Cookies hide={hideSection} />}
        </>
    )
}
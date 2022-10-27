import { useState } from "react";
import { Cookies } from "../../components/cookies/Cookies";
import { Button } from "../../components/elements/buttons/Button";
import { Counter } from "../../components/elements/counter/StoreCounter";
import { FooterMain } from "../../components/footer/FooterMain";


export function Homepage(){
    const [close, setClose] = useState(true)

    function hideSection() {
        setClose(false)
    }

    return (
        <>
            <Button className="button-red" link="#" string="Maggiori informazioni"/>
            <Counter />
            <FooterMain />
            {close === true && <Cookies hide={hideSection} />}
        </>
    )
}
import { Button } from "../../components/elements/buttons/Button";
import { Counter } from "../../components/elements/counter/StoreCounter";
import { FooterMain } from "../../components/footer/FooterMain";


export function Homepage(){
    return (
        <>
            <Button className="button-red" link="#" string="Maggiori informazioni"/>
            <Counter />
            <FooterMain />
        </>
    )
}
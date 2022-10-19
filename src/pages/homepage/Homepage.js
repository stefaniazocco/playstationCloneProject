import { Button } from "../../components/elements/buttons/Button";
import { Counter } from "../../components/elements/counter/StoreCounter";


export function Homepage(){
    return (
        <>
            <Button className="button-blue" link="#" string="Maggiori informazioni"/>
            <Counter />
        </>
    )
}
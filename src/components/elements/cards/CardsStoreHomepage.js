import { Button } from "../buttons/Button";

export function CardsStoreHomepage({img, product}) {
    return(
        <div class="store-card">
            <img src={img} alt={product}/>
            <p>{product}</p>
            <Button className="button-red" link="#" string="Acquista" />
        </div>
    )
}
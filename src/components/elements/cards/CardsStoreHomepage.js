import { Button } from "../buttons/Button";

export function CardsStoreHomepage({img, product, link,string}) {
    return(
        <div class="store-card">
            <img src={img} alt={product}/>
            <p>{product}</p>
            <Button className="button-red buttonStore" link={link}  string={string}/>
        </div>
    )
}
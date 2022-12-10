import { Button } from "../buttons/Button";
import { ButtonSelf } from "../buttons/ButtonSelf";

export function CardsStoreHomepage({img, product, link,string}) {
    return(
        <div class="store-card">
            <img src={img} alt={product}/>
            <p>{product}</p>
            <ButtonSelf className="button-red buttonStore" link={link} string="Acquista ora" />
        </div>
    )
}
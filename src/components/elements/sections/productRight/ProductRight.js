import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addToCart} from "../../../../redux/cartActions"
import { store } from "../../../../redux/store"
import { Counter } from "../../counter/StoreCounter"
import { Select } from "../../select/Select"
import "./productRight.scss"
import { ProductTable } from "./ProductTable"
import { ProductTitle } from "./ProductTitle"

export function ProductRight({product}){
    const productR = useSelector((state) => state.product);
    const myprod = productR.find(prod => prod.name === product.name)
    console.log(myprod)
    // const [value, setValue] = useState(options[0])

    return(
        <div className="product-right">
            <ProductTitle product={product} />

            <div className="product-quantity d-flex">

                {product.hasSize ?
                    <>
                        <Select product={product} />
                        
                        <div className="quantity-div">
                            <Counter product={product} />
                        </div> 
                    </> : 
                    <ProductTable product={product} />
                }

            </div>

            <div className="price-description">
                I prezzi includono l’IVA del Regno Unito. Per spedizioni al di fuori del Regno Unito, il costo dell’IVA sarà ricalcolato in fase di checkout.
            </div>
            <button className="add-to-cart" onClick={() =>store.dispatch(addToCart(product.name))}>Aggiungi al carrello</button>
            <div><Link className="shipping-info">Informazioni sulla spedizione</Link></div>
        </div>
    )
}
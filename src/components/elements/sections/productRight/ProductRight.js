import { useState } from "react"
import { Link } from "react-router-dom"
import { addToCart } from "../../../../redux/cartActions"
import { store } from "../../../../redux/store"
import { Counter } from "../../counter/StoreCounter"
import { Select } from "../../select/Select"
import "./productRight.scss"
import { ProductTable } from "./ProductTable"
import { ProductTitle } from "./ProductTitle"

const options = [
    {label : "S adulto - 70.00€", value: "S adulto", available: true},
    {label : "M adulto - 70.00€", value: "M adulto", available: true},
    {label : "L adulto - 70.00€", value: "L adulto", available: true},
    {label : "XL adulto - 70.00€", value: "XL adulto", available: true},
    {label : "2XL adulto - 72.00€", value: "2XL adulto", available: true},
  ]
export function ProductRight({product}){

    const [value, setValue] = useState(options[0])

    return(
        <div className="product-right">
            <ProductTitle product={product} />

            <div className="product-quantity d-flex">

                {product.hasSize ?
                    <>
                        <Select product={product} value={value} onChange={o => setValue(o)} options={options} />
                        
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
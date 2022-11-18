import { useState } from "react"
import { Link } from "react-router-dom"
import { Counter } from "../../counter/StoreCounter"
import { Select } from "../../select/Select"
import "./productRight.scss"
import { ProductTable } from "./ProductTable"
import { ProductTitle } from "./ProductTitle"

const options = [
    {label : "S adulto - 70.00€", value: 1, available: true},
    {label : "M adulto - 70.00€", value: 2, available: true},
    {label : "L adulto - 70.00€", value: 3, available: true},
    {label : "XL adulto - 70.00€", value: 4, available: true},
    {label : "2XL adulto - 72.00€", value: 5, available: true},
  ]
export function ProductRight({hasSize}){

    const [value, setValue] = useState(options[0])

    return(
        <div class="product-right">
            <ProductTitle />


            

            <div class="product-quantity d-flex">

                {hasSize ?
                    <>
                        <Select value={value} onChange={o => setValue(o)} options={options} />
                        
                        <div class="quantity-div">
                            <Counter />
                        </div> 
                    </> :
                    <ProductTable />
                }

            </div>

            <div class="price-description">
                I prezzi includono l’IVA del Regno Unito. Per spedizioni al di fuori del Regno Unito, il costo dell’IVA sarà ricalcolato in fase di checkout.
            </div>
            <button class="add-to-cart">Aggiungi al carrello</button>
            <div><Link class="shipping-info">Informazioni sulla spedizione</Link></div>
        </div>
    )
}
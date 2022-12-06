import { useEffect } from "react"
import { useState } from "react"

export function ProductTable({product}){
    const [quantity, setQuantity] = useState(1)
    function changeQuantity(event){
        const newQuantity = event.target.value.slice(0, 2)
       setQuantity(newQuantity) 
    }
    useEffect(() =>{
        localStorage.setItem(`Quantity${product.name}`, quantity)
    }, [quantity])

    return(
        <table class="product-table">
            <thead class="product-thead">
                <tr>
                    <th>Quantità</th>
                    <th>Prezzo</th>
                    <th>Inventario</th>
                </tr>
            </thead>
            <tbody class="product-tbody">
                <tr>
                    <td><input class="product-input" type="number" value={quantity} onChange={changeQuantity}/></td>
                    <td>{product.price}</td>
                    <td>In magazzino</td>
                </tr>
            </tbody>
        </table>
    )
}
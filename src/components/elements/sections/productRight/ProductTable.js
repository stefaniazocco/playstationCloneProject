import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux";
import { counterModify } from "../../../../redux/counterActions";
import { store } from "../../../../redux/store";
import "./productTable.scss"

export function ProductTable({product}){
    // const [quantity, setQuantity] = useState(1)
    // function changeQuantity(event){
    //     const newQuantity = event.target.value.slice(0, 2)
    //    setQuantity(newQuantity) 
    // }
    // useEffect(() =>{
    //     localStorage.setItem(`Quantity${product.name}`, quantity)
    // }, [quantity])

    const counter = useSelector((state) => state.counter);
    const prodCounter = counter.find(prod => prod.name === product.name)




    return(
        <table className="product-table">
            <thead className="product-thead">
                <tr>
                    <th>Quantità</th>
                    <th>Prezzo</th>
                    <th>Inventario</th>
                </tr>
            </thead>
            <tbody className="product-tbody">
                <tr>
                    <td><input className="product-input" type="number" value={prodCounter.quantity} onChange={(e) => store.dispatch(counterModify(product.name, e))}/></td>
                    <td>{product.price}</td>
                    <td>In magazzino</td>
                </tr>
            </tbody>
        </table>
    )
}
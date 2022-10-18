import { useState } from "react"
import "./store-counter.css"


export function useCounter(){
    const [counter, setCounter] = useState(1)

    function handleIncrement(){
        setCounter((c) => c + 1)
    }

    function handleDecrement(){
        setCounter((c) => c > 0 ? c - 1 : c)
    }

    return {
        counter: counter,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
    }
}

export function StoreCounter(){

    const {counter, onIncrement, onDecrement} = useCounter()

    return (
        <div className="quantity-div">
            <label className="quantity-label"><strong>Scegli quantità</strong></label>
            <div className="d-flex counter-div">
                <button type="button" id="btn-minus" onClick={onDecrement}><div id="cross"></div></button>
                <input type="number" id="result" value={counter} />
                <button type="button" id="btn-plus" onClick={onIncrement}><div id="cross"></div></button>
            </div>
        </div>
    )
}
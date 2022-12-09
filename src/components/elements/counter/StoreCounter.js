import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { counterDecrement, counterIncrement, counterModify } from "../../../redux/counterActions"
import { store } from "../../../redux/store"



export function useCounter(){
    const [counter, setCounter] = useState(1)

    function handleIncrement(){
        setCounter((c) => Number(c) + 1)
    }

    function handleDecrement(){
        setCounter((c) => c > 0 ? c - 1 : c)
        console.log(counter)
    }

    function handleInputChange(event){
        const value = event.target.value
        console.log(event)
        setCounter(value.toString())
    }
    

    return {
        counter: counter,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
        onChange: handleInputChange
    }
}

export function Counter({product}){

    // const {counter, onIncrement, onDecrement, onChange} = useCounter()
    const counter = useSelector((state) => state.counter);
    const prodCounter = counter.find(prod => prod.name === product.name)

    // useEffect(() => {
    //     localStorage.setItem(`Quantity${product.name}`, counter)
        
    // }, [counter])

    return (
        <div className="quantity-div">
            <label className="quantity-label"><strong>Scegli quantità</strong></label>
            <div className="d-flex counter-div">
                <button type="button" id="btn-minus" onClick={() => store.dispatch(counterDecrement(product.name))}><div id="cross"></div></button>
                <input type="number" id="result" value={prodCounter.quantity} onChange={(e) => store.dispatch(counterModify(product.name, e))} />
                <button type="button" id="btn-plus" onClick={() => store.dispatch(counterIncrement(product.name))}><div id="cross"></div></button>
            </div>
        </div>
    )
}
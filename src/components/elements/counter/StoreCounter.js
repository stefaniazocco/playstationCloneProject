import { useState } from "react"


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
        setCounter(value.toString())
    }

    return {
        counter: counter,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
        onChange: handleInputChange
    }
}

export function Counter(){

    const {counter, onIncrement, onDecrement, onChange} = useCounter()

    return (
        <div className="quantity-div">
            <label className="quantity-label"><strong>Scegli quantità</strong></label>
            <div className="d-flex counter-div">
                <button type="button" id="btn-minus" onClick={onDecrement}><div id="cross"></div></button>
                <input type="number" id="result" value={counter}  onChange={onChange} />
                <button type="button" id="btn-plus" onClick={onIncrement}><div id="cross"></div></button>
            </div>
        </div>
    )
}
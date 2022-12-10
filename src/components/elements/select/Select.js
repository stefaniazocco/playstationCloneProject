import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { chooseSize } from "../../../redux/selectActions";
import { store } from "../../../redux/store";
import "./select.scss"

export function Select({ product }) {
    const size = useSelector((state) => state.size);
    const prodSize = size.find(prod => prod.name === product.name)

    const [isOpen, setIsOpen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(0)
    
    function selectOption(option, e) {
        console.log()
        if (option !== prodSize) store.dispatch(chooseSize(product.name, option))
    }

    function isOptionSelected(option) {
        return option === prodSize
    }

    useEffect(() => {
        if (isOpen) setHighlightedIndex(0) // highlight first li every time it opens
    }, [isOpen])

    return (
        <div>
            <div className="flexa">
                <label><strong>Scegli quantità</strong></label>
                <a href="#"><span>Guida alle taglie</span></a>
            </div>

            <div
                onBlur={() => setIsOpen(false)}         //close when click off
                onClick={() => setIsOpen(prev => !prev)} // toggle
                tabIndex={0}
                className="select-container">
                <span className="value">{`${prodSize.size} - ${product.price}`}<span className="stock">{product.options[0].available ? " - In magazzino" : " - Non disponibile"}</span></span>
                <div className="caret"></div>
                <ul className={`${"options"} ${isOpen ? "show" : ""}`}>
                    {product.options.map((option, index) => (
                        <li onClick={e => {
                            e.stopPropagation()
                            selectOption(option, e)
                            setIsOpen(false)
                        }}
                            onMouseEnter={() => setHighlightedIndex(index)}
                            key={option.value}
                            className={`${"option"} ${isOptionSelected(option) ?
                                "selected" : ""} ${index === highlightedIndex ?
                                    "highlighted" : ""} `}>{`${option.value} - ${product.price}`}<span className="stock">{option.available ? " - In magazzino" : " - Non disponibile"}</span></li>
                    )
                    )}
                </ul>
            </div>
        </div>
    )
}

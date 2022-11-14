import React, { useEffect, useState } from "react";
import "./select.scss"

export function Select({ value, onChange, options }) {
    const [isOpen, setIsOpen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(0)

    function selectOption(option) {
        if (option !== value) onChange(option)
    }

    function isOptionSelected(option) {
        return option === value
    }

    useEffect(() => {
        if (isOpen) setHighlightedIndex(0) // highlight first li every time it opens
    }, [isOpen])
    return (
        <div>
            <div class="flexa">
                <label><strong>Scegli quantità</strong></label>
                <a href="#"><span>Guida alle taglie</span></a>
            </div>

            <div
                onBlur={() => setIsOpen(false)}         //close when click off
                onClick={() => setIsOpen(prev => !prev)} // toggle
                tabIndex={0}
                className="select-container">
                <span className="value">{value?.label}<span className="stock">{value.available ? " - In magazzino" : " - Non disponibile"}</span></span>
                <div className="caret"></div>
                <ul className={`${"options"} ${isOpen ? "show" : ""}`}>
                    {options.map((option, index) => (
                        <li onClick={e => {
                            e.stopPropagation()
                            selectOption(option)
                            setIsOpen(false)
                        }}
                            onMouseEnter={() => setHighlightedIndex(index)}
                            key={option.label}
                            className={`${"option"} ${isOptionSelected(option) ?
                                "selected" : ""} ${index === highlightedIndex ?
                                    "highlighted" : ""} `}>{option.label}<span className="stock">{option.available ? " - In magazzino" : " - Non disponibile"}</span></li>
                    )
                    )}
                </ul>
            </div>
        </div>
    )
}
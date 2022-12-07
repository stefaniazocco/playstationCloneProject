import React, { useEffect, useState } from "react";
import "./select.scss"

const options = [
    "Italy", "France", "Germany", "China"
  ]

export function SelectForm() {
    const [value, setValue] = useState(options[0])
    const [isOpen, setIsOpen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(0)

    function selectOption(option) {
        if (option !== value) setValue(option)
    }

    function isOptionSelected(option) {
        return option === value
    }

    useEffect(() => {
        if (isOpen) setHighlightedIndex(0) // highlight first li every time it opens
    }, [isOpen])

    return (
        <div>
            <div
                onBlur={() => setIsOpen(false)}         //close when click off
                onClick={() => setIsOpen(prev => !prev)} // toggle
                tabIndex={0}
                className="select-container">
                <span className="value">{value}</span>
                <div className="caret"></div>
                <ul className={`${"options"} ${isOpen ? "show" : ""}`}>
                    {options.map((option, index) => (
                        <li onClick={e => {
                            e.stopPropagation()
                            selectOption(option)
                            setIsOpen(false)
                        }}
                            onMouseEnter={() => setHighlightedIndex(index)}
                            key={option}
                            className={`${"option"} ${isOptionSelected(option) ?
                                "selected" : ""} ${index === highlightedIndex ?
                                    "highlighted" : ""} `}>{option}</li>
                    )
                    )}
                </ul>
            </div>
        </div>
    )
}
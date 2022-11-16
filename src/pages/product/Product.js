import { useState } from "react";
import { Counter } from "../../components/elements/counter/StoreCounter";
import { ProductNav } from "../../components/elements/sections/productNav/ProductNav";
import { Select } from "../../components/elements/select/Select";

const options = [
    {label : "S adulto - 70.00€", value: 1, available: true},
    {label : "M adulto - 70.00€", value: 2, available: true},
    {label : "L adulto - 70.00€", value: 3, available: true},
    {label : "XL adulto - 70.00€", value: 4, available: true},
    {label : "2XL adulto - 72.00€", value: 5, available: true},
  ]

export function Product(){

    const [value, setValue] = useState(options[0])

    return(
        <>
            <ProductNav />
            
            <div class="d-flex">
                <Select value={value} onChange={o => setValue(o)} options={options} />
                <Counter />
            </div>
        </>
    )
}
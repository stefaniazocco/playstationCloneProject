import { combineReducers, createStore } from "redux";
import { productReducer, counterReducer } from "./CartReducer.js";



const rootReducer = combineReducers({
    product: productReducer,
    // counter: counterReducer,
    // size: sizeReducer,
    // quantity: quantityReducer,
})

export const store = createStore(rootReducer)


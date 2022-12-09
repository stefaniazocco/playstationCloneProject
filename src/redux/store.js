import { combineReducers, createStore } from "redux";
import { productReducer, selectReducer } from "./CartReducer.js";
import { counterReducer } from "./CounterReducer.js";



const rootReducer = combineReducers({
    product: productReducer,
    size: selectReducer,
    counter: counterReducer
})

export const store = createStore(rootReducer)


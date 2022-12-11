import { products } from "../pages/product/products"
import { DECREMENT, INCREMENT, MODIFY } from "./counterActions"

const defaultStateCounter = Object.values(products).map(prod => {
    return {
        name: prod.name,
        quantity: 1
    }
})

export function counterReducer(state = defaultStateCounter, action){
    switch(action.type){
        case INCREMENT: {
            return state.map(product =>{
                if(product.name === action.payload.name) {
                    return {...product, 
                        quantity: product.quantity + action.payload.quantity
                    }
                }
                return product
            })
        }
        case DECREMENT: {
            return state.map(product =>{
                if(product.name === action.payload.name) {
                    return {...product, 
                        quantity: product.quantity > 0 
                        ? product.quantity - action.payload.quantity 
                        : product.quantity
                    }
                    
                }
                return product
            })
        }        
        case MODIFY: {
            return state.map(product =>{
                if(product.name === action.payload.name) {
                    return {...product, ...action.payload}
                }
                return product
            })
        }

        default : {
            return state
        }
    }
}
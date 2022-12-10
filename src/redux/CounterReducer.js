import { DECREMENT, INCREMENT, MODIFY } from "./counterActions"

const defaultStateCounter = [{
    name: "hoodie",
    quantity: 1
},
{
    name: "tshirt",
    quantity: 1
},
{
    name: "hat",
    quantity: 1
},
{
    name: "mug",
    quantity: 1
}
]

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
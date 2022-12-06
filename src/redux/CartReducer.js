import { ADDPRODUCT, EDITPRODUCT, REMOVEPRODUCT } from "./cartActions"

const defaultStateProd = []
const defaultStateCount = 1


export function productReducer(state = defaultStateProd, action){
    switch(action.type){
        case ADDPRODUCT: {
            return [...state, action.payload]
        }
        case REMOVEPRODUCT: {
            return state.filter(product => product.name !== action.payload)
        }        
        case EDITPRODUCT: {
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
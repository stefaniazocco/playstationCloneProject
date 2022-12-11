import { products } from "../pages/product/products"
import { ADDPRODUCT, EDITPRODUCT, REMOVEPRODUCT, CLEARPRODUCT } from "./cartActions"
import { CHANGESIZE } from "./selectActions"

const defaultStateProd = []


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
        case CLEARPRODUCT: {
            return []
        }

        default : {
            return state
        }
    }
}

const defaultStateSize = Object.values(products).map(prod => {
    return prod.hasSize && {
        name: prod.name,
        size: prod.options[0].value
    }
})


export function selectReducer(state = defaultStateSize, action){
    switch (action.type){
        case CHANGESIZE :{
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

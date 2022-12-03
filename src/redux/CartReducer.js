import { ADDPRODUCT, REMOVEPRODUCT } from "./cartActions"

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
        // case EDIT: {
        //     return state.map(todo =>{
        //         if(todo.id === action.payload.id) {
        //             return {...todo, ...action.payload}
        //         }
        //         return todo
        //     })
        // }
        default : {
            return state
        }
    }
}
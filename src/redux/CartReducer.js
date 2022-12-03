import { ADDPRODUCT, INCREMENT, DECREMENT } from "./cartActions"

const defaultStateProd = []
const defaultStateCount = 1


export function productReducer(state = defaultStateProd, action){
    switch(action.type){
        case ADDPRODUCT: {
            return [...state, action.payload]
        }
        // case REMOVE: {
        //     return state.filter(todo => todo.id !== action.payload)
        // }        
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

// export function counterReducer(state = defaultStateCount, action){
//     switch(action.type) {
//         case INCREMENT: {
//             return state + action.payload
//         }
//         case DECREMENT: {
//             return state - action.payload
//         }
//         default: {
//             return state
//         }
//     }
// }
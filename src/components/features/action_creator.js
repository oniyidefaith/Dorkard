import * as actionTypes from "./action_types"
export const increaseValue =()=>{
    return{ type : actionTypes.INCREMENT}
   
}
export const decreaseValue=()=>{
    return{
        type:actionTypes.DECREMENT
    }
}
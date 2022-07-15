import {SET_BALANCE} from "../actionTypes/loginActionType"

export const setBlance=(blance)=>{
    return {
        type:SET_BALANCE,
        payload:blance
    }
}

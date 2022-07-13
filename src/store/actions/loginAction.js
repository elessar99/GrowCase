import { SET_USER ,SET_BALANCE} from "../actionTypes/loginActionType"

export const setUser=(user)=>{
    return {
        type:SET_USER,
        payload:user
    }
}
export const setBlance=(blance)=>{
    return {
        type:SET_BALANCE,
        payload:blance
    }
}

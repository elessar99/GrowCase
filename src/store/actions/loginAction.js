import { SET_USER } from "../actionTypes/loginActionType"

export const setUser=(user)=>{
    return {
        type:SET_USER,
        payload:user
    }
}
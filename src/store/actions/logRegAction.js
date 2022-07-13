import {LOG_REG_KEY,LOGIN_PAGE,HOME_PAGE,REGISTER_PAGE} from "../actionTypes/logRegActionType";

export const setLogRegKey=(key)=>{
    return {
        type:LOG_REG_KEY,
        payload:key
    }
}
export const loginKey=(key)=>{
    return {
        type:LOGIN_PAGE,
        payload:key
    }
}
export const registerKey=(key)=>{
    return {
        type:REGISTER_PAGE,
        payload:key
    }
}
export const homeKey=(key)=>{
    return {
        type:HOME_PAGE,
        payload:key
    }
}
import {SET_TOKEN} from "../actionTypes/loginTokenActionType";

export const setToken=(token)=>{
    return {
        type:SET_TOKEN,
        payload:token
    }
}

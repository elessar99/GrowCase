import {SET_CASE} from "../actionTypes/caseActionType";


export const setCase=(caseData)=>{
    return {
        type:SET_CASE,
        payload:caseData
    }
}



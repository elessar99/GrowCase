import {AXİOS_DATA,SET_CASE} from "../actionTypes/caseActionType";
import {initialState} from "../state/caseState";
function caseReducer(state=initialState,action){
    switch (action.type) {
        case SET_CASE:
            return {case:action.payload}

        case AXİOS_DATA:
            return  {
                caseData:action.payload
            }
        default:
            return  state

    }
}
export default caseReducer
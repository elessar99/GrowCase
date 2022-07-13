import {SET_TOKEN} from "../actionTypes/loginTokenActionType";
import {tokenState} from "../state/loginTokenState";
function loginTokenReducer(state=tokenState,action){
    switch (action.type) {
        case SET_TOKEN:
            return {
                token:action.payload
            }
        default:
            return  state

    }
}
export default loginTokenReducer
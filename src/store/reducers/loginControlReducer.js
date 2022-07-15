import {controlState} from "../state/loginControlState";
function loginControlReducer(state=controlState,action){
    switch (action.type) {
        case "SET_CONTROL":
            return {
                control:action.payload
            }
        default:
            return  state

    }
}
export default loginControlReducer
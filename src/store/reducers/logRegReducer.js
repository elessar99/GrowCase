import {LOG_REG_KEY,LOGIN_PAGE,REGISTER_PAGE,HOME_PAGE} from "../actionTypes/logRegActionType";
import {initialState} from "../state/logRegState";
function logRegReducer(state=initialState,action){
    switch (action.type) {
        case LOG_REG_KEY:
            return {key:action.payload}

        case LOGIN_PAGE:
            return  {
                key:2
            }
        case REGISTER_PAGE:
            return  {
                key:3
            }
        case HOME_PAGE:
            return  {
                key:1
            }
        default:
            return  state

    }
}
export default logRegReducer
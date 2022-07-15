
import { SET_BALANCE} from "../actionTypes/loginActionType";
import { loginState } from "../state/loginState";
function blanceReducer(state=loginState,action){
    switch (action.type) {
  
        case SET_BALANCE:
            return {
                blance:action.payload,
            }
    
    
        default:
            return  state

    }
}
export default blanceReducer
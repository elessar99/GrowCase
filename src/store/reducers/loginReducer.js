import { SET_USER,SET_BALANCE } from "../actionTypes/loginActionType";
import { loginState } from "../state/loginState";

function loginReducer(state=loginState,action){
    switch (action.type) {
        case SET_USER:
            return {
                blance:action.payload.bakiye,
                userName:action.payload.userName,
                itemList:action.payload.userItems,
                __id:action.payload.__id
            }
            
        case SET_BALANCE:
            return {
                blance:action.payload,
            }
    
    
        default:
            return  state

    }
}
export default loginReducer

import { SET_USER} from "../actionTypes/loginActionType";
import { loginState } from "../state/loginState";
function loginReducer(state=loginState,action){
    switch (action.type) {
        case SET_USER:
            console.log("actionsss ",)
            return {
                blance:action.payload.bakiye,
                userName:action.payload.userName,
                itemList:action.payload.userItems,
                __id:action.payload.__id
            }
            
    
        default:
            return  state

    }
}
export default loginReducer
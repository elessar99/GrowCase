import { itemState } from "../state/itemState"

function itemReducer(state=itemState,action){
    switch (action.type) {
  
        case "SET_ITEM":
            return {
                blance:action.payload,
            }
        default:
            return  state

    }
}
export default itemReducer
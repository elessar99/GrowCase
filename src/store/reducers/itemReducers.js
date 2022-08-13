import { itemState } from "../state/itemState"

function itemReducer(state=itemState,action){
    switch (action.type) {
  
        case "SET_ITEM":
            return {
                key:action.payload.key,
                value:action.payload.value,
            }
        default:
            return  state

    }
}
export default itemReducer
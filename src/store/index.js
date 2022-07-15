import caseReducer from "./reducers/caseReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {persistReducer,persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import logRegReducer from "./reducers/logRegReducer";
import loginTokenReducer from "./reducers/loginTokenReducer";
import loginReducer from "./reducers/loginReducer";
import blanceReducer from "./reducers/blanceReducer";
import loginControlReducer from "./reducers/loginControlReducer";
const reducer=combineReducers({
    case:caseReducer,
    logRegKey:logRegReducer,
    token:loginTokenReducer,
    user:loginReducer,
    blance:blanceReducer,
    loginControl:loginControlReducer,
})
const persistConfig={
    key:"root",
    storage,
    version:1,
    whitelist:["token","user",],
    blacklist:['case',"logRegKey","blance","loginControl"]
}

const persistedReducer=persistReducer(persistConfig,reducer)
export const store=createStore(persistedReducer,applyMiddleware(thunk,logger))
export const persistor=persistStore(store)


export default  reducer
//export default rootReducer
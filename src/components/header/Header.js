import React ,{useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { setUser } from "../../store/actions/loginAction";
import { loginKey , registerKey} from "../../store/actions/logRegAction";
import './Header.css'



const Header = () =>{
    
    const keyState=useSelector(state=>state.logRegKey)
    const dispatch=useDispatch()
    const caseState=useSelector(state=>state.case)
    const userState=useSelector(state=>state.user)
    const [token, setToken] = useState(true);
    return(
        <nav className="headerNav"> 
        <a onClick={()=>{
            setToken(!token)
                }} className="webHeader">GROWCASE.net</a>
        {token&&(<div className="userLogin">
            <div>{userState.userName} </div>
            <div>hesap</div>
        </div>)}
        {!token&&(<div className="loginRegister">
            <a onClick={()=>{
                dispatch(loginKey())
                console.log(keyState)
                }} className="logRegHeader">login</a>
            <a onClick={()=>{
                dispatch(registerKey())
                console.log(keyState)
                }} className="logRegHeader">register</a>
        </div>)}
        </nav>
    )
    
}
export default Header
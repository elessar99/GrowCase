import React ,{useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { setBlance } from "../../store/actions/blanceAction";
import { setControl } from "../../store/actions/loginControlAction";
import { setToken } from "../../store/actions/loginTokenAction";
import { loginKey , registerKey} from "../../store/actions/logRegAction";
import './Header.css'



const Header = () =>{
    
    const keyState=useSelector(state=>state.logRegKey)
    const dispatch=useDispatch()
    const userState=useSelector(state=>state.user)
    const token=useSelector(state=>state.loginControl) 
    return(
        <nav className="headerNav"> 
        <a onClick={()=>{
            console.log("denemeee")
                }} className="webHeader">GROWCASE.net</a>
        {token.control&&(<div className="userLogin">
            <div>{userState.userName} </div>
            <a onClick={()=>{
                dispatch(setControl(false))
                dispatch(setToken("none"))
            }}>hesap</a>
        </div>)}
        {!token.control&&(<div className="loginRegister">
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
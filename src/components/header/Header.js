import React ,{useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { NavLink } from "react-router-dom";
import { setBlance } from "../../store/actions/blanceAction";
import { setControl } from "../../store/actions/loginControlAction";
import { setToken } from "../../store/actions/loginTokenAction";
import { homeKey, loginKey , registerKey} from "../../store/actions/logRegAction";
import './Header.css'



const Header = () =>{
    
    const keyState=useSelector(state=>state.logRegKey)
    const dispatch=useDispatch()
    const userState=useSelector(state=>state.user)
    const token=useSelector(state=>state.loginControl) 
    return(
        <nav className="headerNav"> 
        <NavLink to="/" onClick={()=>{
            dispatch(homeKey())
                }} className="webHeader">GROWCASE.net</NavLink>
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
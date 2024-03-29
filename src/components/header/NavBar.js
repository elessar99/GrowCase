import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './Header.css'

const NavBar = () =>{
    const userState=useSelector(state=>state.blance)
    const controlState=useSelector(state=>state.loginControl)
    console.log("userstate: ",userState)
    return(
        <nav className="navBar"> 
        <nav className="navBtnBar">
            <NavLink to="/" className="navHeaders">Home</NavLink>
        <NavLink to="/inventory" className="navHeaders">Inventory</NavLink>
        <NavLink to="/request/" className="navHeaders">WL Deposit Withdrawal</NavLink>
        </nav>
        {controlState.control &&(<div className="WlDl">
        
            <div className="bldlwl">
            {parseInt(userState.blance/10000)} <img className="wlimage"
                src="https://resimyukle.imageupload.workers.dev/yeyVXpB3_bgl.png"
                alt="dl"
    /> 
            </div>
            <div className="bldlwl">
                {parseInt(((userState.blance)-(parseInt(userState.blance/10000)*10000))/100)} <img className="wlimage"
                src="https://resimyukle.imageupload.workers.dev/RBMZbYMY_iaqxVDx.png"
                alt="dl"
    /> 
            </div><div className="bldlwl">
                {(userState.blance)-(parseInt(userState.blance/100)*100)} <img className="wlimage" 
                src="https://resimyukle.imageupload.workers.dev/3DLKlwca_world_lock.png"
                alt="wl"
            /> 
            </div>
        </div>)}
.
        </nav>
    )
    
}
export default NavBar
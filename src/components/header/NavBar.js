import React from "react";
import { useSelector } from "react-redux";
import './Header.css'

const NavBar = () =>{
    const userState=useSelector(state=>state.user)
    return(
        <nav className="navBar"> 
        <nav className="navBtnBar">
            <header className="navHeaders">Home</header>
        <header className="navHeaders">Inventory</header>
        <header className="navHeaders">WL Deposit Withdrawal</header>
        </nav>
        <div className="WlDl">
            {userState.blance} wl
        </div>

        </nav>
    )
    
}
export default NavBar
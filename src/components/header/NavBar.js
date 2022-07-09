import React from "react";
import './Header.css'

const NavBar = () =>{
    return(
        <nav className="navBar"> 
        <nav className="navBtnBar">
            <header className="navHeaders">Home</header>
        <header className="navHeaders">Inventory</header>
        <header className="navHeaders">WL Deposit Withdrawal</header>
        </nav>
        <div className="WlDl">
            WL DL miktarı
        </div>

        </nav>
    )
    
}
export default NavBar
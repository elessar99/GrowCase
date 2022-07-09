import React from "react";
import './Header.css'

const Header = () =>{
    return(
        <nav className="headerNav"> 
        <a href="/" className="webHeader">GROWCASE.net</a>
        <div className="loginRegister">
            <a href="#" className="logRegHeader">login</a>
            <a href="#" className="logRegHeader">register</a>
        </div>
        </nav>
    )
    
}
export default Header
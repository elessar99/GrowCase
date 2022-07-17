import {NavLink, Outlet} from 'react-router-dom'
import './Request.css'
const Request=()=>{
    return(
        <div className='request'>
        <nav className='requestNav'>
            <NavLink to="wl_deposit" >wl deposit</NavLink>
            <NavLink to="wl_withdrawal" >wl withdrawal</NavLink>
            <NavLink to="item_withdrawal" >item withdrawal</NavLink>
        </nav>
            <Outlet />
        </div>
    )
}
export default Request
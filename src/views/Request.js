import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {NavLink, Outlet, useParams} from 'react-router-dom'
import { setBlance } from '../store/actions/blanceAction';
import { setControl } from '../store/actions/loginControlAction';
import './Request.css'
const Request=()=>{
    const dispatch = useDispatch();
    const {id}=useParams()
    const caseState = useSelector((state => state.case))
    const tokenState = useSelector((state => state.token))
    const [caseInfo, setCaseInfo] = useState(0);
    useEffect(() => {
        async function controlData(token){
            const response= await axios.get(process.env.REACT_APP_URL+`/api/user/bakiyesorgu`,{
                headers: { "Authorization":`Bearer ${token}`}
            })
            if(!response.data.bakiye){
                dispatch(setControl(false))

            }
            else{
                dispatch(setBlance((response.data.bakiye)))
                console.log(response.data.bakiye)
                dispatch(setControl(true))
            }
        };
        controlData(tokenState.token)
     }, []);
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
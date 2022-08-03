import { wait } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Input from '../loginRegister/Input';
import { setBlance } from '../store/actions/blanceAction';
import './Request.css'


const WlDeposit=()=>{
    const dispatch = useDispatch();
    const blanceState = useSelector((state => state.blance))
    const tokenState = useSelector((state => state.token))
    const [listState, setListState] = useState({
        growID:"",
        word:"",
        bgl:0,
        dl:0,
        wl:0,
        blance:0,
    });
    async function fetchWl(token,growID){
        const response = await axios.post(process.env.REACT_APP_URL+`/api/user/wlistekolustur`,{
            "growId":growID,
            "istekType":"yatirma",
        },{
            headers: { "Authorization":`Bearer ${token}`}
        })
        console.log(response)
        fetcControl(tokenState.token)
    }
    async function fetcControl(token){
        const response = await axios.get(process.env.REACT_APP_URL+`/api/user/wlisteksorgu`,{
            headers: { "Authorization":`Bearer ${token}`}
        })
        if(!response.data){
            setControl(true)
            console.log("gelen response yokkkk")
        }else{
            setfetcWlInfo(response.data)
            setControl(false)
            console.log(fetcWlInfo)
        }
    }
    const [control, setControl] = useState(true);
    const [fetcWlInfo, setfetcWlInfo] = useState();
    useEffect(() => {
        fetcControl(tokenState.token);
    }, []);
    async function deleteWl(token){
        const response = await axios.get(process.env.REACT_APP_URL+`/api/user/wlisteksil`,{
            headers: { "Authorization":`Bearer ${token}`}
        })
        if(!response.data.istekStatus){
            setControl(true)
            console.log("control true")
        }else{
            setfetcWlInfo(response.data)
            setControl(false)
            console.log("sfasfa")
            console.log(response.data)
            console.log("control false")
        }
    }
    
    return(
        <><div>
        {control&&(<section>
          <div className='wlWithdrawalBody'>
          
            <div>
                <div style={{margin:"0.7em"}}>
                GrowID:<br/>
                <input value={listState.growID} onChange={(e)=>{
                setListState({ ...listState, growID:e.target.value })}}></input>
                <br/>
                </div>
            </div>
            <div>
                <button onClick={()=>{
                    fetchWl(tokenState.token,listState.growID)
                }}> Create Request </button>
            </div>
            </div> 
            </section>)}
            {!control&&(<section>
            <div className='wlWithdrawalBody'>
            {(fetcWlInfo.istekType=="cekme")&&(
                <p> 
                <strong>Wl Çekme isteginiz vardır istek devam ettigi durumda yeni bir istek oluşturamazsınız</strong><br/>
                istek statüsü: {fetcWlInfo.istekStatus}<br/>
                istek miktarı: {fetcWlInfo.istekMiktar}<br/>
                growID: {fetcWlInfo.growId}<br/>
                world name: {fetcWlInfo.worldName}
            </p>
            )}{(fetcWlInfo.istekType=="yatirma")&&(
                <p>
                <strong>Wl yatırma isteginiz vardır istek devam ettigi durumda yeni bir istek oluşturamazsınız</strong><br/>
                 istek statüsü: {fetcWlInfo.istekStatus}<br/>
                growID: {fetcWlInfo.growId}<br/>
                world name: {fetcWlInfo.worldName}
            </p>
            )}
            <button onClick={() => {
                dispatch(setBlance((blanceState.blance + fetcWlInfo.istekMiktar)))
                deleteWl(tokenState.token)
            }}>Delete</button>
            </div>
            </section>)}
            
            </div>
        </>
        
    )
}
export default WlDeposit
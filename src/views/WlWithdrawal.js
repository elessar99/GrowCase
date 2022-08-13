import { wait } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Input from '../loginRegister/Input';
import { setBlance } from '../store/actions/blanceAction';
import './Request.css'


const WlWithdrawal=()=>{
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
    async function fetchWl(token,growID,word,blance){
        const response = await axios.post(process.env.REACT_APP_URL+`/api/user/wlistekolustur`,{
            "growId":growID,
            "worldName":word,
            "istekMiktar":blance,
            "istekType":"cekme",
        },{
            headers: { "Authorization":`Bearer ${token}`}
        })
        console.log(response)
        fetcControl(tokenState.token)
        console.log("bakiye miktarı: "+blance)
    }
    async function fetcControl(token){
        const response = await axios.get(process.env.REACT_APP_URL+`/api/user/wlisteksorgu`,{
            headers: { "Authorization":`Bearer ${token}`}
        })
        if(!response.data){
            setControl(true)
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
    
    // useEffect(() => {
    //     deleteWl(tokenState.token);
    // }, [delControl])

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
                <div style={{margin:"0.7em"}}>
                    World:<br/>
                    <input value={listState.word} onChange={(e)=>{
                setListState({ ...listState, word:e.target.value })}}></input>

                    <br/>
                </div>
            </div>
            <div>
                <div>
                BGL:
                <input type={"number"} style={{width:"4em",margin:"0.65em"}}
                value={listState.bgl} onChange={(e)=>{
                setListState({ ...listState, bgl:e.target.value })}}></input>
                {listState.blance}
                </div>
                <div>
                DL :
                <input type={"number"} style={{width:"4em",margin:"0.9em"}}
                value={listState.dl} onChange={(e)=>{
                setListState({ ...listState, dl:e.target.value })}}></input>
                </div>
                <div>
                WL :
                <input type={"number"} style={{width:"4em",margin:"0.65em"}}
                value={listState.wl} onChange={(e)=>{
                setListState({ ...listState, wl:e.target.value  })
                }}></input>
                </div>
            </div>
            <div>
                <button onClick={()=>{
                    setListState({...listState,blance:((listState.bgl*10000 + listState.dl*100 + listState.wl*1))})
                    if((listState.bgl*10000 + listState.dl*100 + listState.wl*1) <= blanceState.blance){
                        fetchWl(tokenState.token,listState.growID,listState.word,((listState.bgl*10000 + listState.dl*100 + listState.wl*1)))
                        dispatch(setBlance((blanceState.blance-((listState.bgl*10000 + listState.dl*100 + listState.wl*1)))))
                    }else{

                        alert("miktar yetersiz!!!")
                    }
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
export default WlWithdrawal
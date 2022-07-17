import axios from 'axios';
import { useState } from 'react'
import { useSelector } from 'react-redux';
import Input from '../loginRegister/Input';
import './Request.css'


const WlWithdrawal=()=>{
    const tokenState = useSelector((state => state.token))
    const [listState, setListState] = useState({
        growID:"",
        word:"",
        bgl:0,
        dl:0,
        wl:0,
        blance:0
    });
    async function fetchWl(token,growID,word,blance){
        const response = await axios.post(`http://localhost:5000/api/user/wlistekolustur`,{
            "growId":growID,
            "worldName":word,
            "istekMiktar":blance,
            "istekType":"cekme",
        },{
            headers: { "Authorization":`Bearer ${token}`}
        })
        console.log(response)
    }

    return(
        <><div>
        <section>
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
                setListState({ ...listState, wl:e.target.value })}}></input>
                </div>
            </div>
            <div>
                <button onClick={()=>{
                    setListState({...listState, blance:((listState.bgl*10000 + listState.dl*100 + listState.wl*1))});
                    fetchWl(tokenState.token,listState.growID,listState.word,listState.blance)
                }}> Create Request </button>
            </div>
            </div> 
            </section>

            <section>
            <div className='wlWithdrawalBody'>
            .

            </div>
            </section>
            </div>
        </>
        
    )
}
export default WlWithdrawal
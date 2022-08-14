import './Request.css'
import ItemWithdrawalCard from '../cards/ItemWithdrawalCard'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setItem } from '../store/actions/itemAction';
import ItemCekmeCard from '../cards/ItemCekmeCard';

const ItemWithdrawal = () => {
    const [listState, setListState] = useState({
        growID:"",
        word:"",
    });
    const itemState = useSelector((state => state.item))
    const [istek, setİstek] = useState();
    const dispatch = useDispatch()
    const tokenState = useSelector((state => state.token.token));
    const [itemList, setİtemList] = useState([]);
    const [itemList2, setİtemList2] = useState("false");
    const [itemList3, setİtemList3] = useState([]);
    const [test1, setTest1] = useState(false);
    const [test, setTest] = useState(false);
    const [control, setControl] = useState(false);
    const [control2, setControl2] = useState(false);
    const fetchData = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_URL + '/api/user/itemssorgu', {
                headers: { "Authorization": `Bearer ${tokenState}` }
            })
            setİtemList(response?.data?.userItems);
            console.log("istekte olan item")
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    };
    const cekmeData = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_URL + '/api/user/itemisteksorgu', {
                headers: { "Authorization": `Bearer ${tokenState}` }
            })
            if(response.data == "istek mevcut degil"){
                console.log("istek yok")
            }else{
                setİtemList2(response?.data?.istekItems);
                setİstek(response?.data)
                setControl2(!control2)
            }
            console.log("istek ===")
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    };
    async function olusturData(val){
        const myJson = JSON.stringify(val)
        console.log(myJson)
        const response = await axios.post(process.env.REACT_APP_URL+`/api/user/itemistekolustur`,{
            "istekItems":val,
            "gId":listState.growID,
            "worldName":listState.word
        },{
            headers: { "Authorization":`Bearer ${tokenState}`}
        })
    }

    useEffect(() => {
        if(itemList3.length>0){
            setTest(false)
            setTest(true)
        }else{
            setTest(false)
        }
    }, [test1]);
    useEffect(() => {
        if(itemList2==="false"){
            console.log("boşsss")
        }else{
            console.log(itemList2)
            if(itemList2.length>0){
            setControl(false)
            setControl(true)
            console.log(itemList2)
            console.log("true oldu")
            }else{
            setControl(false)
            }
            console.log(control)
        }
        
    }, [control2]);
    useEffect(() => {
        tokenState && fetchData();
        console.log("list",itemList)
    }, [tokenState, dispatch]);

    useEffect(() => {
        tokenState && cekmeData();
    }, [tokenState, dispatch]);
    return (
        <div className='itemCekmeBody'>
        <div>
            {
                itemList.length > 0 && !control &&
                itemList.map((item) => {
                    return (
                        <>
                            <div>
                                <ItemWithdrawalCard itemName={item.key}
                                    itemMiktar={item.value}
                                    itemImg={item.itemSrc}
                                    istekItem={(istek)=>{
                                        if(control){
                                            console.log("istek mevcut")
                                        }else{
                                            let control=true;
                                        itemList3.map((item)=>{
                                            if(item.itemName==istek.itemName){
                                                item.value+=istek.value
                                                control=false;
                                            }  
                                        })
                                        if(control){
                                              itemList3.push(istek)  
                                            }
                                        setTest1(!test1)
                                        console.log(itemList3)
                                        }
                                        
                                    }}
                                />
                            </div>
                            
                        </>)
                })}
                </div>
                <div>
                {control && !test && (<div>item cekme statüsü : {istek.istekStatus}<br/>GrowID : {istek.gId} <br/> Word Name : {istek.worldName}</div>)}
                {
                (control && !test &&
                itemList2.map((item) => {
                    return (
                        <>
                            <div>
                            <ItemCekmeCard itemName={item.key}
                                    itemMiktar={item.value}
                                    itemImg={item.itemSrc}
                                />
                            </div>
                            
                            
                        </>)
                }))}
                {control && !test && (<button onClick={async()=>{
                    const response = await axios.get(process.env.REACT_APP_URL + '/api/user/itemisteksil', {
                headers: { "Authorization": `Bearer ${tokenState}` }
            })
                }}>
                sil</button>)}
                </div>
                <div>
                {                  
                    (test && !control &&
                itemList3.map((item) => {
                    console.log("denemeee")
                    return (
                        <>
                            <div>
                            <ItemCekmeCard itemName={item.itemName}
                                    itemMiktar={item.value}
                                    itemImg={item.itemImg}
                                />
                            </div>
                            
                        </>)
                }))    
                    }
                {test && !control &&(
                    <div>
                    <input value={listState.growID} onChange={(e)=>{
                setListState({ ...listState, growID:e.target.value })}} placeholder='grow id'/><br/>
                <input value={listState.word} onChange={(e)=>{
                setListState({ ...listState, word:e.target.value })}} placeholder='world name'/><br/>
                <button onClick={()=>{
                    olusturData(itemList3)
                }}>gönder</button>
                </div>)}
                </div>
        </div>
    )
}
export default ItemWithdrawal
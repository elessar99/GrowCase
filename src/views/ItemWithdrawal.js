import './Request.css'
import ItemWithdrawalCard from '../cards/ItemWithdrawalCard'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ItemWithdrawal=()=>{
    const tokenState = useSelector((state => state.token))
    const [itemList, setİtemList] = useState();
    const fetchData=async()=>{
        const response =await axios.get(process.env.REACT_APP_URL+'/api/user/itemssorgu',{
            headers: { "Authorization":`Bearer ${tokenState.token}`}
        })
        setİtemList(response.data)
        
    };
    useEffect(() => {
        fetchData();
        console.log("item sorguuu : ", itemList)
    }, []);
    return(
        <div>
        {/* <ItemWithdrawalCard itemName={itemList[0].key}
            itemImg={itemList[0].itemSrc}
            itemMiktar={itemList[0].value}
        /> */}
        {/* {itemList.map((item)=>{
                return(
                    <>
                    <div>
                    <ItemWithdrawalCard itemName={item.key}
                    itemMiktar={item.value}
                    itemImg={item.itemSrc}
                     />
                    </div>
                    </>)
            })} */}
        </div>
    )
}
export default ItemWithdrawal
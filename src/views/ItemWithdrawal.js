import './Request.css'
import ItemWithdrawalCard from '../cards/ItemWithdrawalCard'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setItem } from '../store/actions/itemAction';

const ItemWithdrawal=()=>{
    const itemState = useSelector((state => state.item))
    const dispatch=useDispatch()
    const tokenState = useSelector((state => state.token))
    const [itemList, setİtemList] = useState();
    const fetchData=async()=>{
        const response =await axios.get(process.env.REACT_APP_URL+'/api/user/itemssorgu',{
            headers: { "Authorization":`Bearer ${tokenState.token}`}
        })
        dispatch(setItem(response.data))
        setİtemList(response.data)
        console.log(response.data)
        
    };
    useEffect(() => {
        fetchData();
        console.log("item sorguuu : ", itemList)
        console.log("item sorguuu reduce : ", itemState)
    }, []);
    return(
        <div>
        <ItemWithdrawalCard/>
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
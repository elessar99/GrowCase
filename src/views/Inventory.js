import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { controlFalse, setControl } from "../store/actions/loginControlAction";
import { setBlance } from "../store/actions/blanceAction";
import ItemCard from "../cards/ItemCard";
import ItemCekmeCard from "../cards/ItemCekmeCard";
import ItemInventoryCard from "../cards/ItemInventoryCard";




const Inventory=()=>{
    const dispatch=useDispatch()
    const [itemlist, setİtemlist] = useState([]);
    

useEffect(() => {
    async function controlData(token){
        const response= await axios.get(process.env.REACT_APP_URL+`/api/user/bakiyesorgu`,{
            headers: { "Authorization":`Bearer ${token}`}
        })
        if(!response.data.bakiye){
            dispatch(setControl(false))
            console.log("token ile data baseden bakiye alamadım ")
            console.log(token)
            console.log(response.data.bakiye)

        }
        else{
            dispatch(setBlance((response.data.bakiye)))
            console.log(response.data.bakiye)
            dispatch(setControl(true))
        }
    };
    controlData(tokenState.token)
 }, []);

 const tokenState = useSelector((state => state.token))
    const fetchData=async()=>{
    const response = await axios.get(process.env.REACT_APP_URL + '/api/user/itemssorgu', {
        headers: { "Authorization": `Bearer ${tokenState.token}` }
    })
    setİtemlist(response.data.userItems)
    console.log(response.data)
}
useEffect(() => {
    fetchData()
}, []);


  return (
    <>
    <div className='request'>
        <nav className='requestNav'>
            <div>inventory</div>
            
        </nav>
        {itemlist.map((item)=>{
                    return(
                        <>
                        <div>
                    <ItemInventoryCard itemImg={item.itemSrc} itemMiktar={item.value} itemName={item.key} itemFiyat={item.itemFiyat}/>
                </div></>)
                })}
        </div>
    </>
    
  );
}

export default Inventory;

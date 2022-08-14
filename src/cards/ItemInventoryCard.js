import React, { useState } from "react";
import PropTypes from "prop-types";
import './Card.css';
import '../components/header/Header.css'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { setBlance } from '../store/actions/blanceAction';
const ItemInventoryCard = ({itemName,itemImg,itemMiktar,itemFiyat}) => {
    const dispatch = useDispatch();
    const tokenState = useSelector((state => state.token.token));
    const blanceState = useSelector((state => state.token.blance));
    const [itemMiktari, setitemMiktari] = useState(itemMiktar);
    const min=0;
    const [max, setmax] = useState(itemMiktar);
    const [value, setValue] = useState(0);
    const handleChange = event => {
        const value = Math.max(min, Math.min(max, Number(event.target.value)));
        setValue(value);
      };
      async function satData(val){
        const myJson = JSON.stringify(val)
        console.log(myJson)
        const response = await axios.post(process.env.REACT_APP_URL+`/api/user/itemsat`,{
            "itemNameList":[{
                "itemName":itemName,
                "itemCount":val
                }]
        },{
            headers: { "Authorization":`Bearer ${tokenState}`}
        })
        dispatch(setBlance(response.data))
        
    }
    return(
    <>
    <div className='itemCard'>
    <div className="itemInfo">
    <header className="itemName">{itemName}</header>
    </div>
    <img className="itemImg"
    src={itemImg}
    alt="item"/>
    <div className="itemInfo">
        <div>mevcut item : {itemMiktari}</div>
        <div><div>
        
        <div className="bldlwl">
        {parseInt(itemFiyat/10000)} <img className="wlimage"
            src="https://resimyukle.imageupload.workers.dev/yeyVXpB3_bgl.png"
            alt="dl"
/> 
        </div>
        <div className="bldlwl">
            {parseInt(((itemFiyat)-(parseInt(itemFiyat/10000)*10000))/100)} <img className="wlimage"
            src="https://resimyukle.imageupload.workers.dev/RBMZbYMY_iaqxVDx.png"
            alt="dl"
/> 
        </div><div className="bldlwl">
            {(itemFiyat)-(parseInt(itemFiyat/100)*100)} <img className="wlimage" 
            src="https://resimyukle.imageupload.workers.dev/3DLKlwca_world_lock.png"
            alt="wl"
        /> 
        </div>
    </div></div>
        <input type={"number"} value={value} onChange={handleChange}/>
        <button onClick={()=>{
            setitemMiktari(itemMiktari-value)
            satData(value)
            setValue(0)
        }}>sat</button>
    </div>
    </div>
    </>
    );
}
ItemInventoryCard.propTypes = {
    itemName: PropTypes.string,
    itemImg: PropTypes.string,
    itemMiktar: PropTypes.number,
    itemFiyat:PropTypes.number,
}
ItemInventoryCard.defaultProps = {
    itemName: "item",
    itemImg: "",
    itemMiktar: 0,
    itemFiyat:0
}
export default ItemInventoryCard;
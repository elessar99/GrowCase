import React, { useState } from "react";
import PropTypes from "prop-types";
import './Card.css';

const ItemWithdrawalCard = ({itemName,itemImg,itemMiktar,istekItem}) => {
    const min=0;
    const [max, setmax] = useState(itemMiktar);
    const [value, setValue] = useState(0);
    const [istekValue, setistekValue] = useState(itemMiktar);

    const handleChange = event => {
      const value = Math.max(min, Math.min(max, Number(event.target.value)));
      setValue(value);
    };
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
        <div>mevcut item : {istekValue}</div>
        <input placeholder="çekmek istediginiz miktar..."
            type="number"
            value={value}
            onChange={handleChange}
        />
        <button onClick={()=>{
            const istek= {itemName,value,itemImg};
            setistekValue(istekValue-value)
            setmax(istekValue-value)
            istekItem(istek)
            setValue(0)
        }
        }>ekleme</button>
    </div>
    </div>
    </>
    );
}
ItemWithdrawalCard.propTypes = {
    itemName: PropTypes.string,
    itemImg: PropTypes.string,
    itemMiktar: PropTypes.number,
    istekItem: PropTypes.func,


}
ItemWithdrawalCard.defaultProps = {
    itemName: "item",
    itemImg: "",
    itemMiktar: 0,
    istekItem:()=> null,
}
export default ItemWithdrawalCard;
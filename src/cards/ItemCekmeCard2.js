import React, { useState } from "react";
import PropTypes from "prop-types";
import './Card.css';

const ItemCekmeCard2 = ({itemName,itemImg,itemMiktar}) => {
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
        <div>mevcut item : {itemMiktar}</div>
        
    </div>
    </div>
    </>
    );
}
ItemCekmeCard2.propTypes = {
    itemName: PropTypes.string,
    itemImg: PropTypes.string,
    itemMiktar: PropTypes.number,
}
ItemCekmeCard2.defaultProps = {
    itemName: "item",
    itemImg: "",
    itemMiktar: 0,
}
export default ItemCekmeCard2;
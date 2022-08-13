import React, { useState } from "react";
import PropTypes from "prop-types";
import './Card.css';

const ItemCekmeCard = ({itemName,itemImg,itemMiktar}) => {
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
        <button>sil</button>
    </div>
    </div>
    </>
    );
}
ItemCekmeCard.propTypes = {
    itemName: PropTypes.string,
    itemImg: PropTypes.string,
    itemMiktar: PropTypes.number,
}
ItemCekmeCard.defaultProps = {
    itemName: "item",
    itemImg: "",
    itemMiktar: 0,
}
export default ItemCekmeCard;
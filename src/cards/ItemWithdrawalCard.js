import React from "react";
import PropTypes from "prop-types";
import './Card.css';

const ItemWithdrawalCard = ({itemName,itemImg,itemMiktar}) => {
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
        <input placeholder="çekmek istediginiz miktar..."/>
        <button>ekleme</button>
    </div>
    </div>
    </>
    );
}
ItemWithdrawalCard.propTypes = {
    itemName: PropTypes.string,
    itemImg: PropTypes.string,
    itemMiktar: PropTypes.number,


}
ItemWithdrawalCard.defaultProps = {
    itemName: "item",
    itemImg: "",
    itemMiktar: 0,
}
export default ItemWithdrawalCard;
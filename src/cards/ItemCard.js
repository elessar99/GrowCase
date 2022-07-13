import React from "react";
import PropTypes from "prop-types";
import './Card.css';

const ItemCard = ({itemName,itemRate,itemImg,itemType,rareRate}) => {
    return(
    <>
    <div className='itemCard'>
    <div className="itemInfo">
    <div className="itemRate">drop: {itemRate}</div>
    <header className="itemName">{itemName}</header>
    </div>
    <img className="itemImg"
    src={itemImg}
    alt="item"/>
    </div>
    </>
    );
}
ItemCard.propTypes = {
    itemName: PropTypes.string,
    itemRate: PropTypes.number,
    itemImg: PropTypes.string,
    itemType: PropTypes.string,
    rareRate: PropTypes.string


}
ItemCard.defaultProps = {
    itemName: "item",
    itemRate: "0.000",
    itemImg: "",
    itemType:"none",
    rareRate: "common"
}
export default ItemCard;
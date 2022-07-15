import React from "react";
import PropTypes from "prop-types";
import './DropItem.css';


const DropItem = ({itemName,itemImg,drop}) => {
    return(
    <>
    <div onClick={drop} className="modalItem">
    <div className='dropCard'>
    tebikler
    <div className="dropInfo">
    <header className="dropName">{itemName}</header>
    </div>
    <img className="dropImg"
    src={itemImg}
    alt="drop"/>
    </div></div>
    </>
    );
}
DropItem.propTypes = {
    itemName: PropTypes.string,
    drop: PropTypes.func,
    itemImg: PropTypes.string,
    itemType: PropTypes.string,
    rareRate: PropTypes.string


}
DropItem.defaultProps = {
    itemName: "item",
    drop: () => null,
    itemImg: "",
}
export default DropItem;
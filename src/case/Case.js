import React from "react";
import './Case.css';
import CaseCard from "../Card/CaseCard";
import PropTypes from "prop-types";
import ItemCard from "../Card/ItemCard";


const Case = ({caseName,casePrice,caseImg,caseType,itemList}) => {
    return(
    <>
    <div className="case">
     <div className="caseCardBody">
     <CaseCard caseName={caseName} caseImg={caseImg} casePrice={casePrice} />
     </div>
     <div className="itemCardBody">
     {itemList.map((item)=>{
                return(
                    <ItemCard key={item.itemName} itemName={item.itemName}
                     itemRate={item.itemRate} 
                     itemImg={item.itemSrc}
                     >    {console.log(item.itemName)}; </ItemCard>
                )
            })}
     </div>
    </div>
    </>
    );
}
Case.propTypes = {
    caseName: PropTypes.string,
    casePrice: PropTypes.string,
    caseImg: PropTypes.string,
    caseType: PropTypes.string,
    onClick: PropTypes.func,
    itemList: PropTypes.array


}
Case.defaultProps = {
    caseName: "case",
    casePrice: "000",
    caseImg: "",
    caseType:"none",
    onClick: () => null,
}
export default Case;
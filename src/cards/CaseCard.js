import React from "react";
import PropTypes from "prop-types";
import './CaseCard.css';

const CaseCard = ({caseName,casePrice,caseImg,baseSrc,caseType,onClick}) => {
    return(
    <>
    <div className="caseCard">
    <header className="caseName">{caseName}</header>
    <img className="caseImg"
    src={caseImg}
    alt="casa"/>
    <img className="caseItemImg"
    src={baseSrc}
    alt="casa" />
    <div className="caseName">{casePrice} ₺</div>
    </div>
    </>
    );
}
CaseCard.propTypes = {
    caseName: PropTypes.string,
    casePrice: PropTypes.string,
    caseImg: PropTypes.string,
    caseType: PropTypes.string,
    onClick: PropTypes.func,
    baseSrc: PropTypes.string


}
CaseCard.defaultProps = {
    caseName: "case",
    casePrice: "000",
    caseImg: "",
    caseType:"none",
    onClick: () => null,
    baseSrc: "",
}
export default CaseCard;
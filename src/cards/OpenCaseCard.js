import React from "react";
import PropTypes from "prop-types";
import './Card.css';

const OpenCaseCard = ({caseName,casePrice,caseImg,baseSrc,caseType,onClick}) => {
    return(
    <>
    <div className="openCaseCard">
    <header className="openCaseName">{caseName}</header>
    <img className="caseImg"
    src={caseImg}
    alt="casa"/>
    <img className="caseItemImg"
    src={baseSrc}
    alt="item" />
    <button className="caseOpenBtn">Open {parseInt(casePrice/100)}<img className="wlimage"
        src="https://resimyukle.imageupload.workers.dev/RBMZbYMY_iaqxVDx.png"
        alt="dl"
    /> {(casePrice)-(parseInt(casePrice/100)*100)} <img className="wlimage" src="https://resimyukle.imageupload.workers.dev/3DLKlwca_world_lock.png"
        alt="wl"
    />
    </button>
    </div>
    </>
    );
}
OpenCaseCard.propTypes = {
    caseName: PropTypes.string,
    casePrice: PropTypes.string,
    caseImg: PropTypes.string,
    caseType: PropTypes.string,
    onClick: PropTypes.func,
    baseSrc: PropTypes.string


}
OpenCaseCard.defaultProps = {
    caseName: "case",
    casePrice: "000",
    caseImg: "",
    caseType:"none",
    onClick: () => null,
    baseSrc: "",
}
export default OpenCaseCard;
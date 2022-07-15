import React, { useState } from "react";
import PropTypes from "prop-types";
import './Card.css';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import DropItem from "../components/DropItem";
import { loginKey } from "../store/actions/logRegAction";
import { setBlance } from "../store/actions/blanceAction";

const OpenCaseCard = ({caseName,casePrice,caseImg,baseSrc,caseType,onClick}) => {
    const tokenState = useSelector((state=>state.token));
    const blanceState = useSelector((state=>state.blance));
    const [dropState, setDropState] = useState(false);
    const [itemState, setİtemState] = useState();
    const dispatch = useDispatch();
    console.log(tokenState)
    const fetchData=async()=>{
        const response= await axios.post(`http://localhost:5000/api/case/kasaac`,{
            "isim":caseName
        },{
            headers: { "Authorization":`Bearer ${tokenState.token}`}
        })
        setİtemState(response.data)
        toggleModal();
        dispatch(setBlance(blanceState.blance-casePrice))
    };
    // const response= await axios.post(`http://localhost:5000/api/case/kasaac`,{
    //         "isim":caseName
    //     },{
    //         headers: { "Authorization":`Bearer ${tokenState.token}`}
    //     })
    //     console.log(response)

    const toggleModal = () => {
        setDropState(!dropState);
      };

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
    <button onClick={async()=>{
        if(tokenState.token==="none" || !tokenState.token){
            dispatch(loginKey())
        }
        else{
            fetchData();
            console.log(tokenState.token)
            
        }
    }} className="caseOpenBtn">Open {parseInt(casePrice/100)}<img className="wlimage"
        src="https://resimyukle.imageupload.workers.dev/RBMZbYMY_iaqxVDx.png"
        alt="dl"
    /> {(casePrice)-(parseInt(casePrice/100)*100)} <img className="wlimage" src="https://resimyukle.imageupload.workers.dev/3DLKlwca_world_lock.png"
        alt="wl"
    />    
    </button>
    </div>
    {dropState&&(<DropItem itemName={itemState.itemName} 
        itemImg={itemState.itemSrc} drop={()=>{
            setDropState(false)
        }}
    />)}
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
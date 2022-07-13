import CaseCard from "../cards/CaseCard";
import {useEffect,useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCase} from "../store/actions/caseAction";
import axios from "axios";
import "./CaseView.css";

const CaseView=()=>{
    const dispatch=useDispatch()
    const [data,setData]=useState([])
    const fetchData=async()=>{
        const response=await axios.get('http://localhost:5000/api/case/all')
        setData(response.data);
        console.log("kasaları aldım", data)
        dispatch(setCase(response.data));
    };
    useEffect(()=>{
        fetchData()
     },[])
     const caseState = useSelector((state=>state.case));
     const tokenState = useSelector((state=>state.token));

    return(
    <>
    <div>.</div>
    <div>
    <div className="caseBody">
    <div className="typeName">kanat</div>
            {data.map((item)=>{
                return(
                    <>
                    {item.tur==="kanat" && (<div className="caseType">
                        <a onClick={()=>{
                    }} >
                        <CaseCard key={item.isim} caseName={item.isim}
                     casePrice={item.fiyat} 
                     caseImg={item.kasaSrc}
                    caseType={item.tur}
                    baseSrc={item.bestSrc}
                     />
                    </a> 
                    </div>)}</>
                )
            })}
            <div className="typeName">hat</div>
            {data.map((item)=>{
                return(
                    <>
                    {item.tur==="hat" &&(<div className="caseType">
                        <a onClick={()=>{
                    }} >
                        <CaseCard key={item.isim} caseName={item.isim}
                     casePrice={item.fiyat} 
                     caseImg={item.kasaSrc}
                    caseType={item.tur}
                    baseSrc={item.bestSrc}
                     />
                    </a> 
                    </div>)}</>
                )
            })}

        </div>
                    
        </div>
        
    </>
        
    )
}
export default  CaseView
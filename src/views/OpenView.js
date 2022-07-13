import './View.css'

import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux'
import OpenCaseCard from '../cards/OpenCaseCard'
import axios from 'axios'
import { useEffect } from 'react'
const OpenView=()=>{
    const {id}=useParams()
    const caseState = useSelector((state => state.case))
    // const [case, setCase] = useState();
    console.log(caseState)
    const fetchData=async()=>{
        const response=await axios.get(`http://localhost:5000/api/case/n/`,{
            params:{
                name:id
            }
           
        })
         console.log(response)
    };
    useEffect(()=>{
        fetchData()
     },[])
  return (
    <>
    <div>.</div>
    <div className='headerayar'>.</div>
    <div className="openView">
    <div>
        <OpenCaseCard key={caseState.case[0].isim} caseName={caseState.case[0].isim}
                     casePrice={caseState.case[0].fiyat} 
                     caseImg={caseState.case[0].kasaSrc}
                    caseType={caseState.case[0].tur}
                    baseSrc={caseState.case[0].bestSrc}
                     />
    </div>
    <div>

    </div>
    
    </div>
        
    </>
    
  );
}

export default OpenView;

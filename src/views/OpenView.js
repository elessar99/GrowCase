import './View.css'
import { useEffect ,useState} from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import OpenCaseCard from '../cards/OpenCaseCard'
import axios from 'axios'
import ItemCard from '../cards/ItemCard'
import { setControl } from '../store/actions/loginControlAction'
import { setBlance } from '../store/actions/blanceAction'

const OpenView=()=>{
    const dispatch = useDispatch();
    const {id}=useParams()
    const caseState = useSelector((state => state.case))
    const tokenState = useSelector((state => state.token))
    const [caseInfo, setCaseInfo] = useState(0);
    console.log(caseState)
    const fetchData=async()=>{
        const response=await axios.get(`http://localhost:5000/api/case/n/`,{
            params:{
                name:id
            }
        })
        setCaseInfo(response.data)
    };
    useEffect(()=>{
        fetchData()
     },[])
     useEffect(() => {
        async function controlData(token){
            const response= await axios.get(`http://localhost:5000/api/user/bakiyesorgu`,{
                headers: { "Authorization":`Bearer ${token}`}
            })
            if(!response.data.bakiye){
                dispatch(setControl(false))

            }
            else{
                dispatch(setBlance((response.data.bakiye)))
                console.log(response.data.bakiye)
                dispatch(setControl(true))
            }
        };
        controlData(tokenState.token)
     }, []);
     console.log("itemsss",caseInfo)
     console.log("caseeee",caseState)
  return (
    <>
    <div>.</div>
    <div className='headerayar'>.</div>
    <div className="openView">
    <div>
        <OpenCaseCard key={caseInfo.kasaKey} caseName={caseInfo.isim}
                     casePrice={caseInfo.fiyat} 
                     caseImg={caseInfo.kasaSrc}
                    caseType={caseInfo.tur}
                    baseSrc={caseInfo.bestSrc}
                     />
    </div>
    <div className='itemList'>
        {caseInfo!==0 && (caseInfo.items.map((item)=>{
                return(
                    
                    <ItemCard key={item.itemKey} itemName={item.itemName}
                     itemRate={item.itemYuzdeOran} 
                     itemImg={item.itemSrc}
                     /> 
                )
            }))}

    </div>
    
    </div>
        
    </>
    
  );
}

export default OpenView;

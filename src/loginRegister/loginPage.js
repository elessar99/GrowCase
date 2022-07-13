import React, { useState ,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./Modal.css";
import axios from "axios";
import Login from "./Login";
import { homeKey, loginKey} from "../store/actions/logRegAction";
import Register from "./Register";

export default function LoginPage({rhBtn,logBtn}) {
  const [login, setlogin] = useState(false);

  const keyState=useSelector((state => state.logRegKey))
  console.log(keyState)
  const dispatch=useDispatch()

  const toggleModal = () => {
    setlogin(!login);
    dispatch(homeKey())
    console.log(keyState.key)
  };

  if(login) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  useEffect(()=>{
    if(keyState.key===1){
      setlogin(false);
    }else if(keyState.key>1){
      setlogin(true);
    }
  },[keyState])


  return (
    <>
      {login &&(
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          {keyState.key===1?console.log("key 1"):console.log("calışmadı")}
          {keyState.key===2 &&(<Login/>)}
          {keyState.key===3 &&(<Register/>)}
          </div>
        </div>
      )}
    </>
  );
}

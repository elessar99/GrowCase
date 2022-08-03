import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Modal.css";
import Form from "./Form";
import Input from "./Input";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { homeKey, registerKey } from "../store/actions/logRegAction";
import { setToken } from "../store/actions/loginTokenAction";
import { setUser } from "../store/actions/loginAction";
import { setControl } from "../store/actions/loginControlAction";
import { setBlance } from "../store/actions/blanceAction";

const Login = ({rhBtn,logBtn}) => {
    const user={
        bakiye:20,
        userName:"ali",
        itemList:null,
        __id:""
    }
    const dispatch=useDispatch()
    const [loginBtn, setLoginBtn] = useState();
    const [res, setres] = useState({
        data:{
            mesaj:"",
        }
    });
    const [userForm,setUserForm] = useState({
        userEmail:"",
        password:"",
  })
  useEffect(()=>{
    async function girisyap(){
    await axios.post(process.env.REACT_APP_URL+'/api/user/giris',{
    "email":userForm.userEmail,
    "sifre":userForm.password
 }).then((res)=>{
    if(res.data.mesaj==="Girilen email/sifre hatali"){
        console.log("login olmadı")
    }else{
        console.log(res.data.mesaj)
    dispatch(setToken(res.data.token))
    dispatch(setUser(res.data.user))
    dispatch(setControl(true))
    dispatch(homeKey())
    dispatch(setBlance(res.data.user.bakiye))
    }
    
    
    
 })}
 girisyap()
  },[loginBtn])
    return(
        <div className="">
            <Form>
                <Input value={userForm.userEmail} onChange={(e)=>{
                    setUserForm({ ...userForm, userEmail:e.target.value })
                }} />
                <Input type="password" value={userForm.password} placeholder={"şifre girin"} onChange={(e)=>{
                    setUserForm({password:e.target.value , userEmail:userForm.userEmail})
                }} />
                <div className="registerText">
                <p>
                   hala kayıt olmadınızmı<br/>kayıt olmak icin
                   <span><a className="clickBtn" onClick={()=>{dispatch(registerKey())}}> tıklayınız</a></span>. 
                </p>
                </div>
            </Form>
            <button className="login-modal" onClick={()=>{loginBtn==true ? setLoginBtn(false) : setLoginBtn((true))
            }}>login</button>
            <button onClick={()=>{dispatch(homeKey())}} className="close-modal">X</button>
        </div>
        
    );
}
Login.protoType = {
    rhBtn: PropTypes.func,
    logBtn: PropTypes.func
}
Login.defaultProps = {
    logBtn: () => null,
    rhBtn: () => null
}
export default Login;
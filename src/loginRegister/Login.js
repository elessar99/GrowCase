import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Modal.css";
import Form from "./Form";
import Input from "./Input";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { homeKey, registerKey } from "../store/actions/logRegAction";
import { setToken } from "../store/actions/loginTokenAction";

const Login = ({rhBtn,logBtn}) => {
    const dispatch=useDispatch()
    const [loginBtn, setLoginBtn] = useState();
    const [userForm,setUserForm] = useState({
        userEmail:"",
        password:"",
  })
  useEffect(()=>{
    console.log("calıştııııı")
    async function girisyap(){
    await axios.post('http://localhost:5000/api/user/giris',{
    "email":userForm.userEmail,
    "sifre":userForm.password
 }).then((res)=>{
    console.log("token", res.data);
    dispatch(setToken(res.data.token))
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
            <button className="login-modal" onClick={()=>{loginBtn==true ? setLoginBtn(false) : setLoginBtn((true)) }}>login</button>
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
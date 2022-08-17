import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Modal.css";
import Form from "./Form";
import Input from "./Input";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { homeKey, loginKey } from "../store/actions/logRegAction";

const Register = ({rhBtn,logBtn}) => {
    const dispatch=useDispatch()
    const [registerBtn, setRegisterBtn] = useState();
    const [userForm,setUserForm] = useState({
        userEmail:"",
        userName:"",
        password:"",
        rPassword:""
  })
  useEffect(()=>{
    async function girisyap(){
    await axios.post(process.env.REACT_APP_URL+'/api/user/uyeol',{
        "userName":userForm.userName,
        "email":userForm.userEmail,
        "sifre":userForm.password,
        "resifre":userForm.rPassword,
 }).then((res)=>{
 })}
 girisyap()
  },[registerBtn])
    return(
        <div className="">
            <Form>
                <Input type="email" value={userForm.userEmail} placeholder={"email giriniz.."} onChange={(e)=>{
                    setUserForm({ ...userForm, userEmail:e.target.value })
                }} /><Input value={userForm.userName} onChange={(e)=>{
                    setUserForm({ ...userForm, userName:e.target.value })
                }} /><Input type="password" value={userForm.password} placeholder={"şifre giriniz.."} onChange={(e)=>{
                    setUserForm({ ...userForm, password:e.target.value })
                }} /><Input type="password" value={userForm.rPassword} placeholder={"tekrar şifre giriniz.."} onChange={(e)=>{
                    setUserForm({ ...userForm, rPassword:e.target.value })
                }} />
                <div className="registerText">
                <p>
                   Zaten bir hesabınız varmı?<br/>giriş yapmak icin
                   <span><a className="clickBtn" onClick={()=>{dispatch(loginKey())}}> tıklayınız</a></span>. 
                </p>
                </div>
            </Form>
            <button className="register-modal" onClick={()=>{
                    if(userForm.userEmail === "" ){
                        alert("lütfen e-mail girin")
                    }else if(userForm.userName === "" ){
                        alert("lütfen username girin")
                    }else if(userForm.password.length < 6){
                        alert("şifre en az 6 haneli olmalı")
                    }else if(userForm.password === "" ){
                        alert("lütfen şifre girin")
                    }else if(userForm.password !== userForm.rPassword ){
                        alert("lütfen aynı şifreyi girin")
                    }else{
                        alert("kayıt başarılı")
                        (registerBtn == true ? setRegisterBtn(false) : setRegisterBtn(true))
                    }
                  }}>register</button>
            <button onClick={()=>{dispatch(homeKey())}} className="close-register-modal">X</button>
        </div>
        
    );
}
Register.protoType = {
    rhBtn: PropTypes.func,
    logBtn: PropTypes.func
}
Register.defaultProps = {
    logBtn: () => null,
    rhBtn: () => null
}
export default Register;
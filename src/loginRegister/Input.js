import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";


const Input=({type,placeholder,value,onChange})=>{
    return(
        <input className="input" 
        value={value} 
        type={type}
        placeholder={placeholder} 
        onChange={onChange} />
    );

}
Input.protoType = {
    value:PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string
}
Input.defaultProps = {
    placeholder: "kullanıcı adı giriniz..",
    type: "text"
}

export default Input;
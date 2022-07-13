import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";
const Form = ({children}) => {
    return(
        <div className="form">
        {children}
        </div>
    );
}
Form.protoType = {
    children: PropTypes.node
}
Form.defaultProps = {
    children: null
}
export default Form;
import React from "react";
import "./Button.css";
import {NavLink} from "react-router-dom";

const Button = (props) => {
    return (
        <NavLink to={props.url}>
            <div className="button">
                <button className="btn green-button">{props.buttonTitle}</button>
            </div>
        </NavLink>
    );
}

export default Button;
import React from "react";
import './Button.css';
import {NavLink} from "react-router-dom";

const Button = () => {
   return (
       <div className="button">
           <NavLink to='/contact'>
               <button className="sign-up btn">Sign Up</button>
           </NavLink>
        </div>
   )
}

export default Button;
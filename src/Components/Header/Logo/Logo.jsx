import React from "react";
import logo from '../../assets/logo.png';
import style from './Logo.module.css';
import {NavLink} from "react-router-dom";

const Logo = (props) => {
   return (
       <div className={`${style.logo} ${props.className}`}>
           <NavLink to='/'>
               <img src={logo} alt="logo" title="logo"/>
           </NavLink>
       </div>
   )
}

export default Logo;
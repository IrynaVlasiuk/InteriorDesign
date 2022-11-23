import React from "react";
import logo from './assets/logo.png';
import './Logo.css';

const Logo = () => {
   return (
       <div className="Logo">
            <img src={logo} alt="logo" title="logo"/>
       </div>
   )
}

export default Logo;
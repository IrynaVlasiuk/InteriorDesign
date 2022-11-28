import React from "react";
import './Button.css';
import {CNavItem, CNavLink} from "@coreui/react";

const Button = () => {
   return (
       <div className="button">
           <CNavItem>
               <CNavLink href="#contact">
                   <button className="sign-up btn">Sign Up</button>
               </CNavLink>
           </CNavItem>
        </div>
   )
}

export default Button;
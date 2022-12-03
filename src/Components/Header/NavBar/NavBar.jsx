import React from "react";
import style from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return(
        <nav className={style.menu}>
            <NavLink to='/' className={isActive => (isActive ? style.active : "")}>Home</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/shop'>Shop</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </nav>
    );
}

export default NavBar;
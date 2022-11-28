import React from "react";
import style from './NavBar.module.css';
import {CNavItem, CNavLink} from '@coreui/react';

const NavBar = () => {
    return(
        <nav className={style.menu}>
            <CNavItem>
                <CNavLink href="/">Home</CNavLink>
            </CNavItem>
            <CNavItem>
                <CNavLink href="#services">Services</CNavLink>
            </CNavItem>
            <CNavItem>
                <CNavLink href="#about-us">About</CNavLink>
            </CNavItem>
            <CNavItem>
                <CNavLink href="#blog">Blog</CNavLink>
            </CNavItem>
            <CNavItem>
                <CNavLink href="/shop">Shop</CNavLink>
            </CNavItem>
            <CNavItem>
                <CNavLink href="#contact">Contact</CNavLink>
            </CNavItem>
        </nav>
    );
}

export default NavBar;
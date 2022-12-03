import React from "react";
import style from './Header.module.css';
import NavBar from "./NavBar/NavBar";
import Button from "./Button/Button";
import Logo from "./Logo/Logo";

const Header = () => {
    return (
        <div className={style.header}>
            <Logo/>
            <NavBar/>
            <Button/>
        </div>
    );
}

export default Header;
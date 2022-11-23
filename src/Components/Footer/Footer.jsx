import React from "react";
import style from "./Footer.module.css";
import logo from "../Logo/assets/logo.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import linkedIn from "./assets/linked-in.png";

const Footer = () => {
    return (
        <footer>
            <div className={style.section}>
              <img src={logo} alt="logo"/>
              <p>But i must explain to you all this mistaken idea of dencouncing pleasure.</p>
            </div>
            <div className={style.section}>
                <p className={style.bold}>Quick Links</p>
                <p>About Our Company</p>
                <p>Services WE provide</p>
                <p>Career & Opportunity</p>
                <p>Privacy & policy</p>
                <p>Contact US</p>
            </div>
            <div className={style.section}>
                <p className={style.bold}>Company</p>
                <p>About Company</p>
                <p>Our Testimonials</p>
                <p>Latest News</p>
                <p>Our misson</p>
                <p> Get a free Quot</p>
            </div>
            <div className={style.section}>
                <p className={style.bold}>Contact us</p>
                <p>Sagrada Familia, Herba</p>
                <p>Street Front USA</p>
                <p>brandoxide@gmail.com</p>
                <p>002-568423591</p>
            </div>
            <div className={style.section}>
                <p className={style.bold}>Follow Us</p>
                <div className={style.social_network_icons}>
                    <div className={style.icon_block}><img src={facebook} alt="facebook icon"/></div>
                    <div className={style.icon_block}><img src={twitter} alt="twitter icon"/></div>
                    <div className={style.icon_block__active}><img src={instagram} alt="instagram icon"/></div>
                    <div className={style.icon_block}><img src={linkedIn} alt="linkedIn icon"/></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
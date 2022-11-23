import React from "react";
import style from "./Contact.module.css";

const Contact = () => {
    return (
        <section className={style.contact}>
            <div className={style.wrapper}>
                <h3>Don`t forget to sign up</h3>
                <div className={style.hr}></div>
                <p className={style.description}>
                    Find out early about all upcoming promotions and new product releases with
                    our newsletter.
                </p>
                <form className={style.form_subscribe} id="formSubscribe">
                    <input name="email" placeholder="Enter your email address..." type="email"/>
                    <button className={style.btn_subscribe} type="submit">Subscribe</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
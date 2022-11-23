import React from "react";
import style from "./Service.module.css";

const Service = (props) => {
    return (
        <div className={(props.isActive) ? style.serviceActive : style.service} >
            <div>
                <img src={props.img}/>
            </div>
            <div className={style.textBlock}>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Service;
import React from "react";
import style from './TextSection.module.css';
import Button from "../../Button/Button";

const TextSection = (props) => {
    return (
        <div className={style.textSection}>
            <div className={style.textBlock}>
                <hgroup>
                    <h4>{ props.content.h4 }</h4>
                    <h2>{ props.content.h2[0] }</h2>
                    <h2>{ props.content.h2[1] }</h2>
                </hgroup>
                <p className={style.description}>
                    { props.content.description }
                </p>
                <Button buttonTitle="Contact"/>
            </div>
        </div>
    );
}

export default TextSection;
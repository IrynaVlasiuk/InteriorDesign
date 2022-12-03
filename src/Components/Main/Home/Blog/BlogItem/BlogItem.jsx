import React from "react";
import style from "./BlogItem.module.css";
import Button from "../../../Common/Button/Button";

const BlogItem = (props) => {
    return (
        <div className={style.blog}>
            <div className={style.imgsection}>
                <div className={style.block}></div>
                <img className={style.bottom} src={props.blogItem.img} alt=""/>
            </div>
            <div className={style.textsection}>
                <h4>{props.blogItem.title}</h4>
                <p>{props.blogItem.description}</p>
            </div>
            <Button buttonTitle="Continue reading..."/>
        </div>
    );
}

export default BlogItem;
import React from "react";
import style from './Project.module.css';

const Project = (props) => {
    return (
        <div className={`${style.project} ${props.index%2 === 0 ? style.even: ""}`}>
            <div className={style.imgBlock}>
                <img src={props.project.img} alt="project-image"/>
            </div>
            <div className={style.textBlock}>
                <h4>{props.project.title}</h4>
                <p>{props.project.description}</p>
            </div>
        </div>
    )
}

export default Project;
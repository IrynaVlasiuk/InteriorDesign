import React from "react";
import style from "./CompletedWork.module.css";
import img from './assets/line.png';

const CompletedWork = () => {
    return (
        <section className={style.completedWork}>
            <h3>
                <span>3000+ Completed Work</span>
                <span>Which WE have Successfully Done</span>
            </h3>
            <div className={style.numbersBlock}>
                <div className={style.block}>
                    <div className={style.numberBlock}>
                        <p className={style.number}>980</p>
                        <p>Project</p>
                    </div>
                </div>
                <div className={style.blockImage}>
                    <img src={img}/>
                </div>
                <div className={style.block}>
                    <div className={style.numberBlockEven}>
                        <p className={style.number}>520</p>
                        <p>Happy Clients</p>
                    </div>
                </div>
                <div className={style.blockImageReversed}>
                    <img src={img}/>
                </div>
                <div className={style.block}>
                    <div className={style.numberBlock}>
                        <p className={style.number}>330</p>
                        <p>Winners</p>
                    </div>
                </div>
                <div className={style.blockImage}>
                    <img src={img}/>
                </div>
                <div className={style.block}>
                    <div className={style.numberBlockEven}>
                        <p className={style.number}>120</p>
                        <p>Recoment</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CompletedWork;
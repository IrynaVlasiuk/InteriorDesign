import React from "react";
import style from "./Experience.module.css";
import ImageSection from "../Common/Sections/ImageSection/ImageSection";
import img from "./assets/experience.jpg";
import Button from "../Common/Button/Button";

const Experience = () => {
    return (
        <section className={style.experience}>
            <div className={style.textBlock}>
                <h2 className={style.title}>20</h2>
                <h3>
                    <span>Years Of Successful</span>
                    <span>Working</span>
                    <span>The Market</span>
                </h3>
                <Button buttonTitle="Read more"/>
            </div>
            <ImageSection image={img} borderPosition="bottom"/>
        </section>
    );
}

export default Experience;
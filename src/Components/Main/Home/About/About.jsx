import React from "react";
import style from "./About.module.css";
import TextSection from "./TextSection/TextSection";
import ImageSection from "../../Common/Sections/ImageSection/ImageSection";
import img from "./assets/about-us.jpg";

const content = {
    h4: 'About us',
    h2: ['Interioris The Will', 'of An Epoch Mextreo'],
    description: 'There are many variations of passages of Lorem Ipsum available,\n' +
        'but the majority have suffered alteration in some form injected\n' +
        'humour, or randomised words which don\'t look even slightly\n' +
        'believable.If you are going to use a passage of Lorem Ipsum,\n' +
        'sure there isn\'t anything embarrassing hidden the middleof text.\n' +
        'All the Lorem Ipsum generators on the Internettend to repeat\n' +
        'predefined chunks as necessary,making this the first true\n' +
        'generator on the Internet.'
};

const About = () => {
    return (
        <section className={style.about} id="about-us">
            <ImageSection image={img} borderPosition="top"/>
            <TextSection content={content}/>
        </section>
    );
}

export default About;



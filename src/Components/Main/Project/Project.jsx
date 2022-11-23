import React from "react";
import "./Project.css";
import TextSection from "../Common/Sections/TextSection/TextSection";
import ImageSection from "../Common/Sections/ImageSection/ImageSection";
import img from "./assets/project.jpg";

const content = {
    h4: 'Modern Interior',
    h2: ['Create Your', 'Interior Design'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n' +
        ' veniam, quis nostrud exercitation.'
};

const Project = () => {
    return (
        <section className="Project">
            <TextSection content={content}/>
            <ImageSection image={img} borderPosition="bottom"/>
        </section>
    );
}

export default Project;
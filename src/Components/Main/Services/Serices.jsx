import React from "react";
import "./Services.css";
import Service from "./Service/Service";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import iconLeft from "./assets/left.png";
import iconRight from "./assets/right.png";

const services = [
    {
        "img": icon1,
        "title":"Interior Design",
        "isActive": false,
        "description": "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore."
    },
    {
        "img": icon2,
        "title": "Architecture",
        "isActive": true,
        "description": "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore."
    },
    {
        "img": icon3,
        "title": "Planning",
        "isActive": false,
        "description": "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore."
    }
];

let servicesElement = services.map(service =>
    <Service img={service.img} title={service.title} isActive={service.isActive} description={service.description}/>
);

const Services = () => {
    return (
        <section className="services">
            <div className="what-we-do">
                <hgroup>
                    <h4>What we do</h4>
                    <h2>Our Service</h2>
                </hgroup>
                <div className="buttons-block">
                    <div className="slider-buttons">
                        <button className="left-side">
                            <img src={iconLeft} alt=""/>
                        </button>
                        <button className="right-side active">
                            <img src={iconRight} alt=""/>
                        </button>
                    </div>
                </div>
            </div>
            {servicesElement}
        </section>
    );
}

export default Services;
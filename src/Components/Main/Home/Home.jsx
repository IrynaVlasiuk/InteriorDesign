import React from "react";
import Project from "./Project/Project";
import Services from "./Services/Serices";
import About from "./About/About";
import Experience from "./Experience/Experience";
import CompletedWork from "./CompletedWork/ComplitedWork";
import Reviews from "./Reviews/Reviews";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";

const Home = () => {
    return (
        <div className="home">
            <Project/>
            <Services/>
            <About/>
            <Experience/>
            <CompletedWork/>
            <Reviews/>
            <Blog/>
            <Contact/>
        </div>
    )
}

export default Home;
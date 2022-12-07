import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
import Services from "./Home/Services/Serices";
import About from "./Home/About/About";
import Blog from "./Home/Blog/Blog";
import Contact from "./Home/Contact/Contact";
import Projects from "./Projects/Projects";
import BlogArticle from "./Home/Blog/BlogItem/BlogArticle/BlogArticle";

const Main = () => {
   return (
       <div className="Main">
           <Routes>
               <Route
                   path="/"
                   element={<Home/>}
               />
               <Route
                   path="/projects"
                   element={<Projects/>}
               />
               <Route
                   path="/services"
                   element={<Services/>}
               />
               <Route
                   path="/about"
                   element={<About/>}
               />
               <Route
                   path="/blog"
                   element={<Blog/>}
               />
               <Route
                   path="/blog/:blogId"
                   element={<BlogArticle/>}
               />
               <Route
                   path="contact"
                   element={<Contact/>}
               />
           </Routes>
       </div>
   )
}

export default Main;
import React from "react";
import style from "./Blog.module.css";
import image1 from "./assets/blog_img_1.jpg";
import image2 from "./assets/blog_img_2.jpg";
import BlogItem from "./BlogItem/BlogItem";

const blogItems = [
    {
        "id": 1,
        "img": image1,
        "title": "2020 Interior Design Trends",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua."
    },
    {
        "id": 2,
        "img": image2,
        "title": "28 Notable Product at ARC Interior Design",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua."
    }
];

let blogItemsElement = blogItems.map(blogItem => <BlogItem blogItem={blogItem}/>);

const Blog = () => {
    return (
        <section className={style.blog} id="blog">
            <div className={style.wrapper}>
            <hgroup>
                <h4>Latest News</h4>
                <h3>From Our Blog</h3>
            </hgroup>
                {blogItemsElement}
            </div>
        </section>
    );
}

export default Blog;
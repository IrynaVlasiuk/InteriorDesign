import React from "react";
import style from "./BlogArticle.module.css";
import { useParams } from "react-router-dom";
import image1 from "./assets/article_img_1.jpg";
import image2 from "./assets/article_img_2.jpg";

const articles = [
    {
        "id": 1,
        "img": image1,
        "title": "2020 Interior Design Trends",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna" +
            " aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute" +
            " irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat" +
            " non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        "id": 2,
        "img": image2,
        "title": "28 Notable Product at ARC Interior Design",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna" +
            " aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute" +
            " irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat" +
            " non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    }
];

const BlogArticle = () => {
    const id = useParams().blogId;
    const article = articles.find(article => article.id === Number(id))

    return (
        <div className={style.blogArticle}>
            <div className={style.bannerBlock}>
                <img src={ article.img } alt="banner"/>
            </div>
            <h2 className={style.title}>{ article.title }</h2>
            <p className={style.description}>{ article.description }</p>
        </div>
    );
}

export default BlogArticle;
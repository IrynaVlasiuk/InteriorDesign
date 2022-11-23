import React from "react";
import "./Reviews.css";
import iconLeft from "../Services/assets/left.png";
import iconRight from "../Services/assets/right.png";
import Review from "./Review/Review";
import avatar1 from "./assets/avatar1.jpg";
import avatar2 from "./assets/avatar2.jpg";

const clients = [
    {
        "name": "Louis Saville",
        "avatar": avatar1,
        "workPosition": "CEO at Google inc",
        "review":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        "name": "Rekha Varadwaz",
        "avatar": avatar2,
        "workPosition": "Manager at Nike inc",
        "review":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

let clientsElement = clients.map(client => <Review client={client}/>);

const Reviews = () => {
    return (
        <section className="Reviews">
            <hgroup>
                <h4>Testimonials</h4>
                <h3>Client says about us</h3>
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
            <div className="reviews-block">
                {clientsElement}
            </div>
        </section>
    );
}

export default Reviews;
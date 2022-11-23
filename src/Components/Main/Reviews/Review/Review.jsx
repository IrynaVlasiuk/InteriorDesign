import React from "react";
import "./Review.css";
import quotes from "../assets/quotes.png";

const Review = (props) => {
    return (
        <div className="Review">
            <img src={props.client.avatar} alt="avatar" className="avatar"/>
            <div className="quotes-block"><img src={quotes} alt="quotes"/></div>
            <div className="review-block">
                <p className="client-info">
                    <span className="name">{props.client.name}</span>
                    <span>/</span>
                    <span className="work-position">{props.client.workPosition}</span>
                </p>
                <p className="review">
                    {props.client.review}
                </p>
            </div>
        </div>
    );
}

export default Review;
import React from "react";
import './ImageSection.css';

const ImageSection = (props) => {
    return (
        <div className="image-section">
            <div className={"block-border " + props.borderPosition}></div>
            <img className={props.borderPosition} src={props.image} alt=""/>
        </div>
    );
}

export default ImageSection;
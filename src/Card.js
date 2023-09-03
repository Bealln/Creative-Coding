import React from "react";
import './Card.css';
import Project from "./media/Project1.png"

const Card = () => {
    return(
        <div className = "CardStyle" >
            <img alt= 'preview' src={Project} /> 

                <h2> Project name</h2>
                <p> Little description</p>
        </div>


    );
}

export default Card;
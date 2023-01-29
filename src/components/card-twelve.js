import React from "react";
import "../styles/cards.css"
import image from "../assets/derrick-henry.jpeg"

export function CardTwelve() {
    return (
        <div id="card-twelve">
            <img src={image} alt="Image of Derrick Henry" />
            <span>Derrick Henry</span>
        </div>
    );
}
import React from "react";
import "../styles/cards.css"
import image from "../assets/derrick-henry.jpeg"

export function CardTwelve() {
    return (
        <div className="card twelve" id="12">
            <img src={image} alt="Image of Derrick Henry" />
            <span>Derrick Henry</span>
        </div>
    );
}
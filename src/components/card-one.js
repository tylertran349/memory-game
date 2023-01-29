import React from "react";
import "../styles/cards.css"
import image from "../assets/patrick-mahomes.jpg"

export function CardOne() {
    return (
        <div id="card-one">
            <img src={image} alt="Image of Patrick Mahomes" />
            <span>Patrick Mahomes</span>
        </div>
    );
}
import React from "react";
import "../styles/cards.css"
import image from "../assets/patrick-mahomes.jpg"

export function CardOne() {
    return (
        <div className="card one" id="1">
            <img src={image} alt="Image of Patrick Mahomes" />
            <span>Patrick Mahomes</span>
        </div>
    );
}
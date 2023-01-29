import React from "react";
import "../styles/cards.css"
import image from "../assets/josh-allen.jpeg"

export function CardEight() {
    return (
        <div id="card-eight">
            <img src={image} alt="Image of Josh Allen" />
            <span>Josh Allen</span>
        </div>
    );
}
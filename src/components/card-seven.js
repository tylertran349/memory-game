import React from "react";
import "../styles/cards.css"
import image from "../assets/justin-jefferson.jpg"

export function CardSeven() {
    return (
        <div id="card-seven">
            <img src={image} alt="Image of Justin Jefferson" />
            <span>Justin Jefferson</span>
        </div>
    );
}
import React from "react";
import "../styles/cards.css"
import image from "../assets/justin-jefferson.jpg"

export function CardSeven() {
    return (
        <div className="card seven" id="7">
            <img src={image} alt="Image of Justin Jefferson" />
            <span>Justin Jefferson</span>
        </div>
    );
}
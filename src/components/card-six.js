import React from "react";
import "../styles/cards.css";
import image from "../assets/myles-garrett.webp";

export function CardSix() {
    return (
        <div id="card-six">
            <img src={image} alt="Image of Myles Garrett" />
            <span>Myles Garrett</span>
        </div>
    );
}
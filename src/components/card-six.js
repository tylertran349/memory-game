import React from "react";
import "../styles/cards.css";
import image from "../assets/myles-garrett.webp";

export function CardSix() {
    return (
        <div className="card six" id="6">
            <img src={image} alt="Image of Myles Garrett" />
            <span>Myles Garrett</span>
        </div>
    );
}
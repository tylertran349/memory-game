import React from "react";
import "../styles/cards.css"
import image from "../assets/tyreek-hill.jpg"

export function CardFour() {
    return (
        <div id="card-four">
            <img src={image} alt="Image of Tyreek Hill" />
            <span>Tyreek Hill</span>
        </div>
    );
}
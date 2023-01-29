import React from "react";
import "../styles/cards.css"
import image from "../assets/tyreek-hill.jpg"

export function CardFour() {
    return (
        <div className="card four" id="4">
            <img src={image} alt="Image of Tyreek Hill" />
            <span>Tyreek Hill</span>
        </div>
    );
}
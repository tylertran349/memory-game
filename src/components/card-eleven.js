import React from "react";
import "../styles/cards.css"
import image from "../assets/tj-watt.jpeg"

export function CardEleven() {
    return (
        <div id="card-eleven">
            <img src={image} alt="Image of Jalen Ramsey" />
            <span>Jalen Ramsey</span>
        </div>
    );
}
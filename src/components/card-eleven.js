import React from "react";
import "../styles/cards.css"
import image from "../assets/jalen-ramsey.jpg"

export function CardEleven() {
    return (
        <div className="card eleven" id="11">
            <img src={image} alt="Image of Jalen Ramsey" />
            <span>Jalen Ramsey</span>
        </div>
    );
}
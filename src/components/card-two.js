import React from "react";
import "../styles/cards.css"
import image from "../assets/aaron-donald.webp"

export function CardTwo() {
    return (
        <div className="card two" id="2">
            <img src={image} alt="Image of Aaron Donald" />
            <span>Aaron Donald</span>
        </div>
    );
}
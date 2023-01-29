import React from "react";
import "../styles/cards.css"
import image from "../assets/joe-burrow.jpeg"

export function CardThree() {
    return (
        <div className="card three" id="3">
            <img src={image} alt="Image of Joe Burrow" />
            <span>Joe Burrow</span>
        </div>
    );
}
import React from "react";
import "../styles/cards.css"
import image from "../assets/aaron-rodgers.jpeg"

export function CardNine() {
    return (
        <div className="card nine" id="9">
            <img src={image} alt="Image of Aaron Rodgers" />
            <span>Aaron Rodgers</span>
        </div>
    );
}
import React from "react";
import "../styles/cards.css";
import image from "../assets/trent-williams.jpg";

export function CardFive() {
    return (
        <div className="card five" id="5">
            <img src={image} alt="Image of Trent Williams" />
            <span>Trent Williams</span>
        </div>
    );
}
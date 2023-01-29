import React from "react";
import "../styles/cards.css"
import image from "../assets/tj-watt.jpeg"

export function CardTen() {
    return (
        <div className="card ten" id="10">
            <img src={image} alt="Image of T.J. Watt" />
            <span>T.J. Watt</span>
        </div>
    );
}
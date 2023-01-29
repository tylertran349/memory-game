import React, { useState } from "react";
import "../styles/app.css";
import { CardOne } from "./card-one";
import { CardTwo } from "./card-two";
import { CardThree } from "./card-three";
import { CardFour } from "./card-four";
import { CardFive } from "./card-five";
import { CardSix } from "./card-six";
import { CardSeven } from "./card-seven";
import { CardEight } from "./card-eight";
import { CardNine } from "./card-nine";
import { CardTen } from "./card-ten";
import { CardEleven } from "./card-eleven";
import { CardTwelve } from "./card-twelve";

export function attachCardListeners() {

    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", handleCardClick);
    });
}

const handleCardClick = (e) => {
    console.log(e.currentTarget.id); // currentTarget points to the exact element that the handler is bound to
}

export function CardContainer() {
    let cards = [
        <CardOne />,
        <CardTwo />,
        <CardThree />,
        <CardFour />,
        <CardFive />,
        <CardSix />,
        <CardSeven />,
        <CardEight />,
        <CardNine />,
        <CardTen />,
        <CardEleven />,
        <CardTwelve />,
    ]

    function shuffleCards(cardsArray) {
        // Use Durstenfeld shuffle algorithm (an optimized version of Fisher-Yates shuffle algorithm)
        for (let i = cardsArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
        }
        return cardsArray;
    }

    return (
        <div id="cards">
            {shuffleCards(cards)}
        </div>
    )
}
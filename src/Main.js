import React from "react";
import MailButton from "./Buttons.js";
import { Buttons } from "./Buttons.js";

export default function MainContent() {
  return (
    <div className="Main">
      <div className="headings">
        <p className="heading3">Chellappan R</p>
        <p className="heading6">Front-End Developer</p>
      </div>
      <MailButton />
      <div className="About">
        <p>About</p>
        <p>
        Hi, I'm Chellappan R, an aspiring Front-End Developer with a deep enthusiasm for exploring and learning about Generative AI.
        </p>
      </div>
      <div className="Interests">
        <p>Interests</p>
        <p>
          I'm dedicated to expanding my knowledge. Love to game and code. Enjoy
          watching 20 men go around a track for 2 hours in weekends.
        </p>
      </div>
      <Buttons />
    </div>
  );
}

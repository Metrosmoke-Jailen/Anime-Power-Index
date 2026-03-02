import React from "react";
import { useNavigate } from "react-router-dom";
import "./RandomMatchupButton.module.css";

function RandomMatchupButton({ characters }) {
  const navigate = useNavigate();

  const generateMatchup = () => {
    if (!characters || characters.length < 2) {
      alert("Not enough characters to generate a battle.");
      return;
    }

    let firstIndex = Math.floor(Math.random() * characters.length);
    let secondIndex;

    do {
      secondIndex = Math.floor(Math.random() * characters.length);
    } while (secondIndex === firstIndex);

    const fighters = [characters[firstIndex], characters[secondIndex]];

    navigate("/battle", { state: { fighters } });
  };

  return (
    <button className="randomBtn" onClick={generateMatchup}>
        🎲 Generate Random Battle
    </button>
  );
}

export default RandomMatchupButton;
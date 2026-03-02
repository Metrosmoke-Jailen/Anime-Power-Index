import React, { useState } from "react";
import { calculateOverallScore } from "../utils/filter";
import styles from "./BattleSimulator.module.css";

function BattleSimulator({ character1, character2, votes, darkMode }) {
  const [winner, setWinner] = useState(null);
  const [isBattling, setIsBattling] = useState(false);
  const [health1, setHealth1] = useState(100);
  const [health2, setHealth2] = useState(100);
  const [battleText, setBattleText] = useState("");
  const [impact, setImpact] = useState(false);

  if (!character1 || !character2) return null;

  const getAuraColor = (character) => {
    const score = calculateOverallScore(character, votes);
    if (score > 80) return "#ff2e63";      // Elite power
    if (score > 60) return "#6a00ff";      // High tier
    if (score > 40) return "#00eaff";      // Mid tier
    return "#888";                         // Low tier
  };

  const simulateBattle = () => {
  setIsBattling(true);
  setWinner(null);
  setHealth1(100);
  setHealth2(100);
  setBattleText("The arena falls silent...");

  const score1 = calculateOverallScore(character1, votes);
  const score2 = calculateOverallScore(character2, votes);

  let currentHealth1 = 100;
  let currentHealth2 = 100;

  const interval = setInterval(() => {
    const crit1 = Math.random() < 0.15;
    const crit2 = Math.random() < 0.15;

    const damage1 = (Math.random() * 8 + score1 / 20) * (crit1 ? 2 : 1);
    const damage2 = (Math.random() * 8 + score2 / 20) * (crit2 ? 2 : 1);

    currentHealth1 = Math.max(currentHealth1 - damage2, 0);
    currentHealth2 = Math.max(currentHealth2 - damage1, 0);

    setHealth1(currentHealth1);
    setHealth2(currentHealth2);

    if (crit1 || crit2) {
      setBattleText("🩸 CRITICAL HIT!");
    } else {
      setBattleText("Blades clash in a storm of sparks!");
    }

    setImpact(true);
    setTimeout(() => setImpact(false), 250);

    // ✅ Proper finish condition
    if (currentHealth1 <= 0 || currentHealth2 <= 0) {
      clearInterval(interval);

      setTimeout(() => {
        if (currentHealth1 <= 0 && currentHealth2 <= 0) {
          setWinner("Draw");
        } else if (currentHealth1 <= 0) {
          setWinner(character2.name);
        } else {
          setWinner(character1.name);
        }
        setIsBattling(false);
      }, 600);
    }
  }, 700);
};

  return (
    <div
      className={`${styles.simulator} ${darkMode ? styles.dark : styles.light} ${
        impact ? styles.shake : ""
      }`}
    >
      <h2>⚔ Battle Simulator</h2>

      <div className={styles.arena}>
        <div className={styles.fighter}>
          <h3>{character1.name}</h3>
          <div className={styles.healthBar}>
            <div
              className={styles.healthFill}
              style={{ width: `${health1}%`, backgroundColor: getAuraColor(character1) }}
            />
          </div>
        </div>

        <div className={styles.fighter}>
          <h3>{character2.name}</h3>
          <div className={styles.healthBar}>
            <div
              className={styles.healthFill}
              style={{ width: `${health2}%`, backgroundColor: getAuraColor(character2) }}
            />
          </div>
        </div>
      </div>

      <button onClick={simulateBattle} disabled={isBattling} className={styles.battleButton}>
        {isBattling ? "⚡ Battle in Progress..." : "Start Battle"}
      </button>

      {isBattling && <p className={styles.battleText}>{battleText}</p>}

      {winner && (
        <h2 className={`${styles.winner} ${winner === "Draw" ? styles.draw : styles.victory}`}>
          {winner === "Draw" ? "It's a Draw!" : `🏆 ${winner} Wins!`}
        </h2>
      )}
    </div>
  );
}

export default BattleSimulator;
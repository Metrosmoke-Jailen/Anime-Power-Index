import React from "react";
import { calculateOverallScore } from "../utils/filter";
import styles from "./ComparisonPanel.module.css";

function ComparisonPanel({ character1, character2, votes, darkMode }) {
  if (!character1 || !character2) return null;

  const score1 = calculateOverallScore(character1, votes);
  const score2 = calculateOverallScore(character2, votes);

  const winner =
    score1 > score2
      ? character1.name
      : score2 > score1
      ? character2.name
      : "Draw";

  const StatBar = ({ label, value1, value2 }) => (
    <div className={styles.statRow}>
      <div className={styles.statLabel}>{label}</div>
      <div className={styles.barContainer}>
        <div
          className={styles.bar1}
          style={{ width: `${value1}%` }}
        />
        <div
          className={styles.bar2}
          style={{ width: `${value2}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className={`${styles.panel} ${darkMode ? styles.dark : styles.light}`}>
      <h2 className={styles.title}>⚔ Battle Results ⚔</h2>

      <div className={styles.header}>
        <div className={`${styles.character} ${winner === character1.name ? styles.winnerGlow : ""}`}>
          <h3>{character1.name}</h3>
          <span className={styles.score}>{score1}</span>
        </div>

        <div className={styles.vs}>VS</div>

        <div className={`${styles.character} ${winner === character2.name ? styles.winnerGlow : ""}`}>
          <h3>{character2.name}</h3>
          <span className={styles.score}>{score2}</span>
        </div>
      </div>

      {winner === "Draw" ? (
        <div className={styles.draw}>🤝 It's a Draw!</div>
      ) : (
        <div className={styles.winnerText}>🏆 {winner} Wins!</div>
      )}

      <div className={styles.statsSection}>
        <StatBar
          label="Strength"
          value1={character1.stats.strength}
          value2={character2.stats.strength}
        />
        <StatBar
          label="Speed"
          value1={character1.stats.speed}
          value2={character2.stats.speed}
        />
        <StatBar
          label="Intelligence"
          value1={character1.stats.intelligence}
          value2={character2.stats.intelligence}
        />
      </div>
    </div>
  );
}

export default ComparisonPanel;
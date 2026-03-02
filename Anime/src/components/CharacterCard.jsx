import React from "react";
import { Link } from "react-router-dom";
import { calculateOverallScore } from "../utils/filter";
import styles from "./CharacterCard.module.css";

function CharacterCard({
  character,
  votes,
  handleVote,
  rank,
  onSelect,
  isSelected,
  darkMode
}) {
  if (!character || !character.stats) return null;

  const overallScore = calculateOverallScore(character, votes);

  const borderColor =
    rank === 1
      ? "gold"
      : rank === 2
      ? "silver"
      : rank === 3
      ? "#cd7f32"
      : darkMode
      ? "#444"
      : "#ccc";

  const PowerBar = ({ label, value }) => (
    <div className={styles.statContainer}>
      <div className={styles.statLabel} title={`${label}: ${value}`}>
        <small>{label}</small>
        <span>{value}</span>
      </div>

      <div className={styles.statBar}>
        <div
          className={styles.statFill}
          style={{
            width: `${value}%`
          }}
        />
      </div>
    </div>
  );

  return (
    <div
      onClick={() => onSelect(character)}
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      style={{
        border: `2px solid ${borderColor}`,
        boxShadow:
          rank <= 3
            ? `0 0 20px ${borderColor}, 0 0 40px ${borderColor}`
            : "none",
        backgroundColor: darkMode ? "#1e1e1e" : "#f9f9f9",
        color: darkMode ? "#fff" : "#000"
      }}
    >
      {rank <= 3 && (
        <div className={styles.rankBadge}>
          #{rank}
        </div>
      )}

      <h3>{character.name}</h3>

      <p className={styles.voteText}>
        Votes: {votes?.[character.id] || 0}
      </p>

      <div className={styles.overallContainer}>
        <span>Overall Power</span>
        <strong>{overallScore}</strong>
      </div>

      <div className={styles.overallBar}>
        <div
          className={styles.overallFill}
          style={{ width: `${overallScore}%` }}
        />
      </div>

      <PowerBar label="Strength" value={character.stats.strength} />
      <PowerBar label="Speed" value={character.stats.speed} />
      <PowerBar label="Intelligence" value={character.stats.intelligence} />

      <div className={styles.buttonGroup}>
        <button
          className={styles.voteButton}
          onClick={(e) => {
            e.stopPropagation();
            handleVote(character.id, "up");
          }}
        >
          👍
        </button>

        <button
          className={styles.voteButton}
          onClick={(e) => {
            e.stopPropagation();
            handleVote(character.id, "down");
          }}
        >
          👎
        </button>
      </div>

      <div className={styles.shareLink}>
        <Link to={`/character/${character.id}`}>🔗 Share</Link>
      </div>
    </div>
  );
}

export default CharacterCard;
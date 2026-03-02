import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import characters from "../data/characters";
import { calculateOverallScore } from "../utils/filter";
import styles from "./CharacterPage.module.css";

function CharacterPage({ darkMode }) {
  const { id } = useParams();
  const character = characters.find((c) => String(c.id) === String(id));
  const [votes, setVotes] = useState({});

  useEffect(() => {
    const storedVotes = JSON.parse(localStorage.getItem("votes")) || {};
    setVotes(storedVotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(votes));
  }, [votes]);

  const handleVote = (type) => {
    setVotes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + (type === "up" ? 1 : -1),
    }));
  };

  const resetVotes = () => {
    setVotes((prev) => ({ ...prev, [id]: 0 }));
  };

  if (!character) return <h2>Character not found.</h2>;

  const overallScore = calculateOverallScore(character, votes);

  const getTier = () => {
    if (overallScore >= 90) return "God Tier 🔱";
    if (overallScore >= 75) return "S Tier ⚡";
    if (overallScore >= 60) return "A Tier 🔥";
    if (overallScore >= 45) return "B Tier";
    return "C Tier";
  };

  const alignmentClass =
    character.alignment?.toLowerCase() === "evil"
      ? styles.evil
      : character.alignment?.toLowerCase() === "neutral"
      ? styles.neutral
      : styles.good;

  const PowerBar = ({ label, value }) => (
    <div className={styles.statBlock}>
      <div className={styles.statHeader}>
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <div className={styles.barBackground}>
        <div
          className={styles.barFill}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );

  return (
    <div
      className={`${styles.container} ${alignmentClass} ${
        darkMode ? styles.dark : styles.light
      }`}
    >
      <Link to="/" className={styles.backLink}>
        ⬅ Back
      </Link>

      <div className={styles.headerSection}>
        {character.image && (
          <img
            src={character.image}
            alt={character.name}
            className={styles.characterImage}
          />
        )}

        <div>
          <h1>{character.name}</h1>
          <div className={styles.tierBadge}>{getTier()}</div>

          <p><strong>Universe:</strong> {character.universe}</p>
          <p><strong>Alignment:</strong> {character.alignment}</p>
          <p><strong>Power Type:</strong> {character.powerType}</p>
          <p><strong>Votes:</strong> {votes[id] || 0}</p>
        </div>
      </div>

      <div className={styles.overallSection}>
        <h2>Overall Power: {overallScore}</h2>

        <div className={styles.overallBar}>
          <div
            className={styles.overallFill}
            style={{ width: `${overallScore}%` }}
          />
        </div>
      </div>

      <div className={styles.statsSection}>
        <PowerBar label="Strength" value={character.stats.strength} />
        <PowerBar label="Speed" value={character.stats.speed} />
        <PowerBar label="Intelligence" value={character.stats.intelligence} />
      </div>

      <div className={styles.voteBtns}>
        <button onClick={() => handleVote("up")}>👍 Upvote</button>
        <button onClick={() => handleVote("down")}>👎 Downvote</button>
        <button onClick={resetVotes}>♻ Reset</button>
      </div>
    </div>
  );
}

export default CharacterPage;
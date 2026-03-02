import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import characters from "../data/characters";
import ComparisonPanel from "../components/ComparisonPanel";
import RandomMatchupButton from "../components/RandomMatchupButton";
import styles from "./ComparePage.module.css";

function ComparePage({ darkMode }) {
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [flash, setFlash] = useState(false); // For cinematic flash
  const battleRef = useRef(null);

  const toggleCharacter = (character) => {
    const alreadySelected = selectedCharacters.find(
      (c) => c.id === character.id
    );

    if (alreadySelected) {
      setSelectedCharacters(
        selectedCharacters.filter((c) => c.id !== character.id)
      );
    } else if (selectedCharacters.length < 2) {
      setSelectedCharacters([...selectedCharacters, character]);
    }
  };

  // Auto Scroll + Reset Flash When Two Selected
  useEffect(() => {
    if (selectedCharacters.length === 2 && battleRef.current) {
      battleRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Trigger VS flash
      setFlash(true);
      const timeout = setTimeout(() => setFlash(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [selectedCharacters]);

  // Random 2 Fighters
  const selectRandomTwo = () => {
    const shuffled = [...characters].sort(() => 0.5 - Math.random());
    setSelectedCharacters(shuffled.slice(0, 2));
  };

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>

      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>⚔ Character Compare Arena</h1>
        <p className={styles.subtitle}>
          Select two warriors and let destiny calculate the outcome.
        </p>
      </div>

      {/* Buttons Row */}
      <div className={styles.buttonsRow}>
        <Link to="/">
          <button className={styles.randomBtn}>⬅ Back to Home</button>
        </Link>

        <button className={styles.randomBtn} onClick={selectRandomTwo}>
          🎲 Random 2 Fighters
        </button>
      </div>

      {/* Top Battle Section */}
      {selectedCharacters.length === 2 && (
        <div
          ref={battleRef}
          className={`${styles.topBattleSection} ${flash ? styles.flash : ""}`}
        >
          <div className={styles.vsContainer}>
            <span className={styles.vsText}>VS</span>
          </div>

          <ComparisonPanel
            character1={selectedCharacters[0]}
            character2={selectedCharacters[1]}
            darkMode={darkMode}
          />

          <Link to="/battle" state={{ fighters: selectedCharacters }}>
            <button className={styles.battleBtn}>
              🔥 Simulate Battle
            </button>
          </Link>
        </div>
      )}

      <p className={styles.counter}>
        {selectedCharacters.length}/2 Fighters Selected
      </p>

      {/* Character Grid */}
      <div className={styles.grid}>
        {characters.map((char) => {
          const isSelected = selectedCharacters.some(
            (c) => c.id === char.id
          );

          return (
            <div
              key={char.id}
              onClick={() => toggleCharacter(char)}
              className={`${styles.card} ${
                isSelected ? styles.selected : ""
              }`}
            >
              <h3>{char.name}</h3>
              <p>{char.anime}</p>

              {isSelected && (
                <span className={styles.selectedBadge}>
                  ✓ Selected
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ComparePage;
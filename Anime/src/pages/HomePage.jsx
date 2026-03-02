import React, { useState, useEffect } from "react";
import characters from "../data/characters";
import CharacterCard from "../components/CharacterCard";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import ComparisonPanel from "../components/ComparisonPanel";
import { applyAllFilters } from "../utils/filter";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

function HomePage({ darkMode }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [universeFilter, setUniverseFilter] = useState("");
  const [alignmentFilter, setAlignmentFilter] = useState("");
  const [powerTypeFilter, setPowerTypeFilter] = useState("");
  const [votes, setVotes] = useState({});
  const [selectedCharacters, setSelectedCharacters] = useState([]);

  useEffect(() => {
    const storedVotes = JSON.parse(localStorage.getItem("votes")) || {};
    setVotes(storedVotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(votes));
  }, [votes]);

  const handleVote = (id, type) => {
    setVotes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + (type === "up" ? 1 : -1),
    }));
  };

  const handleSelect = (character) => {
    setSelectedCharacters((prev) => {
      const exists = prev.find((c) => c.id === character.id);
      if (exists) return prev.filter((c) => c.id !== character.id);
      if (prev.length < 2) return [...prev, character];
      return [prev[1], character];
    });
  };

  const filteredCharacters = applyAllFilters(
    characters,
    { searchQuery, universe: universeFilter, alignment: alignmentFilter, powerType: powerTypeFilter },
    votes
  );

  return (
    <div className={`${styles.container} ${darkMode ? "dark" : "light"}`}>
      <h1>🔥 Anime Character Power Index 🔥</h1>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
        <SearchBar query={searchQuery} setQuery={setSearchQuery} darkMode={darkMode} />
        <FilterPanel
          universeFilter={universeFilter}
          setUniverseFilter={setUniverseFilter}
          alignmentFilter={alignmentFilter}
          setAlignmentFilter={setAlignmentFilter}
          powerTypeFilter={powerTypeFilter}
          setPowerTypeFilter={setPowerTypeFilter}
        />
      </div>

      <ComparisonPanel selectedCharacters={selectedCharacters} darkMode={darkMode} />

      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <Link to="/compare">
          <button className={styles.compareBtn}>⚔ Go to Compare Arena</button>
        </Link>

        <Link to="/powers">
          <button className={styles.compareBtn}>📖 Power Encyclopedia</button>
        </Link>
      </div>

      <div className={styles.grid}>
        {filteredCharacters.map((char, index) => (
          <CharacterCard
            key={char.id}
            character={char}
            votes={votes}
            rank={index + 1}
            handleVote={handleVote}
            onSelect={handleSelect}
            isSelected={selectedCharacters.some((c) => c.id === char.id)}
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
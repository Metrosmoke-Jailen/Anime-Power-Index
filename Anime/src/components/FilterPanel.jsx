import React from "react";
import styles from "./FilterPanel.module.css";

function FilterPanel({
  universeFilter,
  setUniverseFilter,
  alignmentFilter,
  setAlignmentFilter,
  powerTypeFilter,
  setPowerTypeFilter
}) {
  return (
    <div className={styles.filterContainer}>
      <label className={styles.filterLabel}>
        Universe:
        <select
          value={universeFilter}
          onChange={(e) => setUniverseFilter(e.target.value)}
          className={styles.filterSelect}
        >
          <option value="">All</option>
          <option value="Dragon Ball">Dragon Ball</option>
          <option value="Naruto">Naruto</option>
          <option value="One Piece">One Piece</option>
          <option value="Bleach">Bleach</option>
          <option value="Seven Deadly Sins">Seven Deadly Sins</option>
          <option value="Demon Slayer">Demon Slayer</option>
          <option value="Jujutsu Kaisen">Jujutsu Kaisen</option>
          <option value="My Hero Academia">My Hero Academia</option>
          <option value="Attack on Titan">Attack on Titan</option>
          <option value="Fairy Tail">Fairy Tail</option>
          <option value="Magi">Magi</option>
          <option value="Hunter x Hunter">Hunter x Hunter</option>
          <option value="Black Clover">Black Clover</option>
          <option value="Chainsaw Man">Chainsaw Man</option>
          <option value="Tokyo Ghoul">Tokyo Ghoul</option>
          <option value="Sword Art Online">Sword Art Online</option>
          <option value="JoJo's Bizarre Adventure">JoJo's Bizarre Adventure</option>
          <option value="Code Geass">Code Geass</option>
          <option value="One Punch Man">One Punch Man</option>
          <option value="Death Note">Death Note</option>
          <option value="Solo Leveling">Solo Leveling</option>
          <option value="Blue Exorcist">Blue Exorcist</option>
          <option value="Fate">Fate</option>
          <option value="Yu Yu Hakusho">Yu Yu Hakusho</option>
          <option value="Mob Psycho 100">Mob Psycho 100</option>
        </select>
      </label>

      <label className={styles.filterLabel}>
        Alignment:
        <select
          value={alignmentFilter}
          onChange={(e) => setAlignmentFilter(e.target.value)}
          className={styles.filterSelect}
        >
          <option value="">All</option>
          <option value="Hero">Hero</option>
          <option value="Anti-Hero">Anti-Hero</option>
          <option value="Villain">Villain</option>
        </select>
      </label>

      <label className={styles.filterLabel}>
        Power Type:
        <select
          value={powerTypeFilter}
          onChange={(e) => setPowerTypeFilter(e.target.value)}
          className={styles.filterSelect}
        >
          <option value="">All</option>
          <option value="Ki">Ki</option>
          <option value="Godly Ki">Godly Ki</option>
          <option value="Chakra">Chakra</option>
          <option value="Nen">Nen</option>
          <option value="Cursed Energy">Cursed Energy</option>
          <option value="Devil Fruit">Devil Fruit</option>
          <option value="Quirk">Quirk</option>
          <option value="Magic">Magic</option>
          <option value="Swordsmanship">Swordsmanship</option>
          <option value="Martial Arts">Martial Arts</option>
          <option value="Combat">Combat</option>
          <option value="Dual Blades">Dual Blades</option>
          <option value="Rapier Combat">Rapier Combat</option>
          <option value="Breath Style">Breath Style</option>
          <option value="Beast Breathing">Beast Breathing</option>
          <option value="Demon">Demon</option>
          <option value="Devil Hybrid">Devil Hybrid</option>
          <option value="Blood Devil">Blood Devil</option>
          <option value="Control Devil">Control Devil</option>
          <option value="Titan">Titan</option>
          <option value="Stand">Stand</option>
          <option value="Geass">Geass</option>
          <option value="Shadow Monarch">Shadow Monarch</option>
          <option value="Psychic">Psychic</option>
          <option value="Spirit Energy">Spirit Energy</option>
          <option value="Anti-Magic">Anti-Magic</option>
          <option value="Soul Magic">Soul Magic</option>
          <option value="Limitless Strength">Limitless Strength</option>
          <option value="Cyborg">Cyborg</option>
          <option value="Death Note">Death Note</option>
          <option value="Detective Genius">Detective Genius</option>
          <option value="Gate of Babylon">Gate of Babylon</option>
          <option value="Demon Flames">Demon Flames</option>
        </select>
      </label>
    </div>
  );
}

export default FilterPanel;
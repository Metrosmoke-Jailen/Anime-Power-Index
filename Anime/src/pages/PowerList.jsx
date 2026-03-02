import React from "react";
import { powerSystems } from "../data/powerSystems";
import PowerCard from "../components/power/PowerCard";
import { Link } from "react-router-dom";
import styles from "./PowerList.module.css";

function PowerList() {
  return (
    <div className={styles.container}>
      {/* Sticky Back Button */}
      <div className={styles.stickyBack}>
        <Link to="/">
          <button className={styles.backBtn}>🏠 Back to Character Index</button>
        </Link>
      </div>

      <h1>🌌 Anime Power Systems</h1>
      <p>Explore all major anime power systems, their rules, strengths, and notable users.</p>

      <div className={styles.grid}>
        {powerSystems.map((power) => (
          <PowerCard key={power.id} power={power} />
        ))}
      </div>
    </div>
  );
}

export default PowerList;
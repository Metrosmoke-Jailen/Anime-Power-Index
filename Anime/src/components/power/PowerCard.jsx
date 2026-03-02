// src/components/power/PowerCard.jsx
import { Link } from "react-router-dom";
import styles from "./PowerCard.module.css";

function PowerCard({ power }) {
  return (
    <div className={styles.card}>
      <h3>{power.name}</h3>
      <p>{power.rules.substring(0, 80)}...</p>

      <div className={styles.stats}>
        <span>💪 {power.avgStats.strength}</span>
        <span>⚡ {power.avgStats.speed}</span>
        <span>🧠 {power.avgStats.intelligence}</span>
      </div>

      <Link to={`/powers/${power.id}`}>
        <button className={styles.exploreBtn}>Explore →</button>
      </Link>
    </div>
  );
}

export default PowerCard;
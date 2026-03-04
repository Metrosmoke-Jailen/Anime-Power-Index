import { Link } from "react-router-dom";
import styles from "./PowerCard.module.css";

function PowerCard({ power }) {
  const avg = power.stats?.avgCharacterStats || {};

  const firstRule =
    power.rules && power.rules.length > 0
      ? power.rules[0].description
      : "No rules defined.";

  return (
    <div className={styles.card}>
      <h3>{power.name}</h3>

      <p>{firstRule.substring(0, 100)}...</p>

      <div className={styles.stats}>
        <span>💪 {avg.strength || 0}</span>
        <span>⚡ {avg.speed || 0}</span>
        <span>🧠 {avg.intelligence || 0}</span>
      </div>

      <div className={styles.systemMeta}>
        <span>Complexity: {power.stats?.complexity}</span>
      </div>

      <Link to={`/powers/${power.id}`}>
        <button className={styles.exploreBtn}>Explore →</button>
      </Link>
    </div>
  );
}

export default PowerCard;
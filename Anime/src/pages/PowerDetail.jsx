// src/pages/PowerDetail.jsx
import { useParams, Link } from "react-router-dom";
import { powerSystems } from "../data/powerSystems";
import PowerTabs from "../components/power/PowerTabs";
import styles from "./PowerDetail.module.css";

function PowerDetail() {
  const { id } = useParams();
  const power = powerSystems.find((p) => p.id === id);

  if (!power) return <h2>Power system not found</h2>;

  return (
    <div className={styles.container}>
      <h1>⚡ {power.name}</h1>
      <div className={styles.avgStats}>
        <span>💪 {power.stats?.avgCharacterStats?.strength}</span>
        <span>⚡ {power.stats?.avgCharacterStats?.speed}</span>
        <span>🧠 {power.stats?.avgCharacterStats?.intelligence}</span>
      </div>

      <div className={styles.systemStats}>
        <p>System Strength: {power.stats?.strength}</p>
        <p>Versatility: {power.stats?.versatility}</p>
        <p>Complexity: {power.stats?.complexity}</p>
        <p>Scalability: {power.stats?.scalability}</p>
      </div>

      <PowerTabs power={power} />

      <div style={{ marginTop: "2rem" }}>
        <Link to="/powers">
          <button className={styles.backBtn}>🔙 Back to Power List</button>
        </Link>
      </div>
    </div>
  );
}

export default PowerDetail;
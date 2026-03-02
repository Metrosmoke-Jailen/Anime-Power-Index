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
        <span>💪 {power.avgStats.strength}</span>
        <span>⚡ {power.avgStats.speed}</span>
        <span>🧠 {power.avgStats.intelligence}</span>
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
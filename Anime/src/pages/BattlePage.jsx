import React from "react";
import { useLocation, Link } from "react-router-dom";
import BattleSimulator from "../components/BattleSimulator";
import styles from "./BattlePage.module.css";

function BattlePage({ darkMode }) {
  const location = useLocation();
  const fighters = location.state?.fighters || [];

  if (fighters.length < 2) return <p>No fighters selected.</p>;

  return (
    <div className={`${styles.container} ${darkMode ? "dark" : "light"}`}>
      <Link to="/compare" className={styles.backBtn}>⬅ Back to Compare</Link>
      <BattleSimulator character1={fighters[0]} character2={fighters[1]} darkMode={darkMode} />
    </div>
  );
}

export default BattlePage;
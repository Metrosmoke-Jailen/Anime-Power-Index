// src/components/power/PowerTabs.jsx
import { useState } from "react";
import styles from "./PowerTabs.module.css";

function PowerTabs({ power }) {
  const [activeTab, setActiveTab] = useState("rules");

  const tabs = [
    { key: "rules", label: "Rules" },
    { key: "strengths", label: "Strengths" },
    { key: "weaknesses", label: "Weaknesses" },
    { key: "users", label: "Notable Users" },
    { key: "comparison", label: "Comparison" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "rules": return <p>{power.rules}</p>;
      case "strengths": return <p className={styles.green}>{power.strengths}</p>;
      case "weaknesses": return <p className={styles.red}>{power.weaknesses}</p>;
      case "users": return <ul>{power.notableUsers.map(u => <li key={u}>{u}</li>)}</ul>;
      case "comparison": return <p>{power.comparison}</p>;
      default: return null;
    }
  };

  return (
    <div className={styles.panel}>
      <div className={styles.tabHeader}>
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={`${styles.tabBtn} ${activeTab === tab.key ? styles.active : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>{renderContent()}</div>
    </div>
  );
}

export default PowerTabs;
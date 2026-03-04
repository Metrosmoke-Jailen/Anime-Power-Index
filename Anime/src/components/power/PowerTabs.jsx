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
      case "rules":
        return (
          <div>
            {power.rules?.map((rule, index) => (
              <div key={index} className={styles.ruleCard}>
                <h4>{rule.title}</h4>
                <p>{rule.description}</p>
                <p className={styles.consequence}>
                  ⚠ {rule.consequence}
                </p>
              </div>
            ))}
          </div>
        );

      case "strengths":
        return (
          <ul className={styles.green}>
            {power.strengths?.map((s, i) => (
              <li key={i}>✔ {s}</li>
            ))}
          </ul>
        );

      case "weaknesses":
        return (
          <ul className={styles.red}>
            {power.weaknesses?.map((w, i) => (
              <li key={i}>✖ {w}</li>
            ))}
          </ul>
        );

      case "users":
        return (
          <ul>
            {power.notableUsers?.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
        );

      case "comparison":
        return (
          <div>
            {Object.entries(power.comparison || {}).map(([key, value]) => (
              <div key={key}>
                <strong>{key}:</strong>{" "}
                {Array.isArray(value) ? value.join(", ") : String(value)}
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.panel}>
      <div className={styles.tabHeader}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`${styles.tabBtn} ${
              activeTab === tab.key ? styles.active : ""
            }`}
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
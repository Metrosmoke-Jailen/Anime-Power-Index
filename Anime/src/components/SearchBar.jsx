import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ query, setQuery, darkMode }) {
  return (
    <input
      className={`${styles.search} ${darkMode ? styles.dark : styles.light}`}
      type="text"
      placeholder="Search character..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default SearchBar;
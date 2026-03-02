import React from "react";
import styles from "./Footer.module.css";

function Footer({ darkMode }) {
  return (
    <footer className={`${styles.footer} ${darkMode ? styles.dark : styles.light}`}>
      <p>© 2026 Anime Power Index | All rights reserved</p>
    </footer>
  );
}

export default Footer;
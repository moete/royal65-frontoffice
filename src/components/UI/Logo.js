import React from "react";

import styles from "./Logo.module.css";
function Logo() {
  return (
    <div className={styles.logo}>
      <img src="/icon.svg" alt="logo" />
      <h5>GAINIO</h5>
    </div>
  );
}

export default Logo;

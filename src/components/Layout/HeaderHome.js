import React from "react";

import { NavbarMenu } from "./../Shared";
import Button from "../UI/Button";
import styles from "./HeaderHome.module.css";
function HeaderHome() {
  return (
    <header className={styles["header-home"]}>
      <NavbarMenu />
      <div className={styles.banner}>
        <div className={styles["showcase-content"]}>
          <h1>PLAY & GAIN</h1>
          <h1 style={{ color: "var(--clr-primary-cyan)" }}>REWARDS</h1>
          <p className="extra-large-text">
            Free, Fun & Fair Rewards For Everyone
          </p>
          <Button value="START PLAYING!" />
        </div>
      </div>
    </header>
  );
}

export default HeaderHome;

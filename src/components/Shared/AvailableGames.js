import React from "react";

import Button from "./../UI/Button";
import GridCards from "./../Shared/GridCards.js";
import rightArrow from "./../../assets/icons/rightArrow.svg";

import styles from "./AvailableGames.module.css";
function AvailableGames() {
  return (
    <section className={styles["available-game"]}>
      <div className={styles["available-content"]}>
        <div>
          <h2>Available games</h2>
          <p>To meet today's challenges & earn cryptocurrency</p>
        </div>
        <div>
          <Button value="TOP GAMES" icon={rightArrow} />
          <Button value="Tournaments" icon={rightArrow} />
        </div>
      </div>
      <GridCards className={styles["grid-fix-position"]} />
    </section>
  );
}

export default AvailableGames;

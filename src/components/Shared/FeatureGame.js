import React from "react";

import PlayWinEarn from "./PlayWinEarn";
import Button from "./../UI/Button";
import rightArrow from "./../../assets/icons/rightArrow.svg";
import placeholder from "./../../assets/images/placeholder.svg";
import styles from "./FeatureGame.module.css";

function FeatureGame() {
  return (
    <section className={styles["feature-game"]}>
      <PlayWinEarn className={styles["pwe-fix-position"]} />
      <div className={styles["feature-content"]}>
        <div>
          <h1>Featured games</h1>
          <p>To meet today's challenges & earn cryptocurrency</p>
        </div>
        <Button value="Show all" icon={rightArrow} />
      </div>
      <div className={styles["feature-carousel"]}>
        <img src={placeholder} alt="random img" />
        <img src={placeholder} alt="random img" />
        <img src={placeholder} alt="random img" />
        <img src={placeholder} alt="random img" />
        <img src={placeholder} alt="random img" />
        <img src={placeholder} alt="random img" />
        <img src={placeholder} alt="random img" />
      </div>
    </section>
  );
}

export default FeatureGame;

import React from "react";

import PlayWinEarn from "./PlayWinEarn";
import Button from "./../UI/Button";
import rightArrow from "./../../assets/icons/rightArrow.svg";
import Carousel from "./Carousel";
import styles from "./FeatureGame.module.css";

function FeatureGame() {
  return (
    <section className={styles["feature-game"]}>
      <PlayWinEarn className={styles["pwe-fix-position"]} />
      <div className={styles["feature-content"]}>
        <div>
          <h2>Featured games</h2>
          <p>To meet today's challenges & earn cryptocurrency</p>
        </div>
        <Button value="Show all" icon={rightArrow} />
      </div>
      <Carousel />
    </section>
  );
}

export default FeatureGame;

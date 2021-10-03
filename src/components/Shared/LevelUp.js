import React from "react";

import levelupimg from "./../../assets/images/levelUpIllustration.svg";
import freespinsimg from "./../../assets/images/freespins.svg";
import bonusesimg from "./../../assets/images/bonuses.svg";
import tournamentsimg from "./../../assets/images/tournaments.svg";

import styles from "./../Shared/LevelUp.module.css";
function LevelUp(props) {
  return (
    <section className={`${styles["level-up"]} ${props.className}`}>
      <div className={styles["level-up-wrapper"]}>
        <img src={levelupimg} alt="gamer desktop setup" />
        <div className={styles["level-up-content"]}>
          <h2>level up! get rewards</h2>
          <p className="medium-text">
            Each time you reach a new level you'll get a reward
          </p>
          <div className={styles["level-up-figure-container"]}>
            <figure>
              <img src={freespinsimg} alt="freespinsimg" />
              <figcaption className={"medium-text"}>freespins</figcaption>
            </figure>
            <figure>
              <img src={bonusesimg} alt="gift img" />
              <figcaption>bonuses</figcaption>
            </figure>
            <figure>
              <img src={tournamentsimg} alt="prise of a tournament" />
              <figcaption>tournaments</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LevelUp;

import React from "react";

import Button from "./../UI/Button";
import { TopThreeWinners } from "./../Shared";
import todaysWinnersImage from "./../../assets/images/todaysWinnersBg.svg";
import trophyImage from "./../../assets/images/trophy.svg";
import styles from "./BiggestWinners.module.css";

function BiggestWinners() {
  return (
    <div
      className={styles["biggest-winners"]}
      style={{ backgroundImage: `URL(${todaysWinnersImage})` }}
    >
      <div className={styles["biggest-winners-wrapper"]}>
        <div className={styles["biggest-winners-content"]}>
          <h2>
            Biggest <span>winners</span> today
          </h2>
          <Button value="start playing!" />
        </div>
        <img src={trophyImage} alt="trophy for winners" />
        <TopThreeWinners />
      </div>
    </div>
  );
}

export default BiggestWinners;

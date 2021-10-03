import React from "react";

import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { LatestActivities, LevelUp } from "./../components/Shared";
import AvailableGames from "../components/Shared/Games/AvailableGames";
import BiggestWinners from "../components/Shared/Games/BiggestWinners";
import bgGames from "./../assets/images/bgGames.svg";
import styles from "./Games.module.css";
function Games() {
  return (
    <div className={styles["games-page"]}>
      <Header title="Games" pageLocation="Home > Games" bgImg={bgGames} />
      <AvailableGames />
      <BiggestWinners />
      <LatestActivities className={styles["fixing-latest-height"]} />
      <LevelUp className={styles["fixing-position"]} />
      <Footer />
    </div>
  );
}

export default Games;

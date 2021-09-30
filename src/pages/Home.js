import React from "react";

import HeaderHome from "../components/Layout/HeaderHome";
import FeatureGame from "../components/Shared/FeatureGame";
import AvailableGames from "../components/Shared/AvailableGames";
import LevelUp from "../components/Shared/LevelUp";
import BiggestWinners from "../components/Shared/BiggestWinners";
import styles from "./Home.module.css";
import Counter from "../components/Shared/Counter";
import LatestActivities from "../components/Shared/LatestActivities";

const Home = () => {
  return (
    <main className={styles.showcase}>
      <HeaderHome />
      <FeatureGame />
      <AvailableGames />
      <div className={styles["level-up-wrapper"]}>
        <LevelUp />
        <BiggestWinners />
        <Counter />
        <LatestActivities />
      </div>
    </main>
  );
};

export default Home;

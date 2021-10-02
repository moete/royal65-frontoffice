import React from "react";

import {
  FeatureGame,
  AvailableGames,
  LevelUp,
  BiggestWinners,
  Counter,
  LatestActivities,
  CommonQuestions,
} from "../components/Shared";
import HeaderHome from "../components/Layout/HeaderHome";
import Footer from "../components/Layout/Footer";
import styles from "./Home.module.css";

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
        <CommonQuestions />
        <Footer />
      </div>
    </main>
  );
};

export default Home;

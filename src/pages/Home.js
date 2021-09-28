import React from "react";

import HeaderHome from "../components/Layout/HeaderHome";
import FeatureGame from "../components/Shared/FeatureGame";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles.showcase}>
      <HeaderHome />
      <FeatureGame />
    </main>
  );
};

export default Home;

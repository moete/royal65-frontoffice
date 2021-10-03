import React from "react";

import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import TournamentsGames from "../components/Shared/Tournaments/TournamentsGames";
import bgTournaments from "./../assets/images/bgTournaments.svg";
import styles from "./Tournaments.module.css";
function Tournaments() {
  return (
    <div className={styles["tournaments-page"]}>
      <Header
        title="tournaments"
        pageLocation="Home > Tournaments"
        bgImg={bgTournaments}
      />
      <TournamentsGames />
      <Footer />
    </div>
  );
}

export default Tournaments;

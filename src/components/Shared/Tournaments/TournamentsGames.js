import React from "react";

import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

import GridTournaments from "./GridTournaments";
import styles from "./TournamentsGames.module.css";
function TournamentsGames() {
  return (
    <section className={styles["tournaments-games"]}>
      <div className={styles["tournaments-games-heading"]}>
        <h2>
          Tournaments <span>Games</span>
        </h2>
        <p>Play in multi-player tournaments or head to head for cash prizes.</p>
      </div>
      <SearchBar />
      <FilterBar />
      <GridTournaments />
    </section>
  );
}

export default TournamentsGames;

import React from "react";
import GridCards from "../GridCards";

import SearchBar from "./SearchBar";
import styles from "./AvailableGames.module.css";
function AvailableGames() {
  return (
    <section className={styles["available-games"]}>
      <div className={styles["available-games-heading"]}>
        <h2>
          Available <span>Games</span>
        </h2>
        <p>To meet today's challenges & earn cryptocurrency</p>
      </div>
      <SearchBar />
      <GridCards />
    </section>
  );
}

export default AvailableGames;

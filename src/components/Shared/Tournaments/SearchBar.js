import React from "react";

import SearchIcon from "./../../../assets/icons/SearchIcon.svg";
import Button from "../../UI/Button";
import styles from "./SearchBar.module.css";
function SearchBar() {
  return (
    <div className={styles["search-bar"]}>
      <div className={styles["input-container"]}>
        <img src={SearchIcon} alt="search" />
        <input type="text" placeholder="What’s your game?" />
      </div>
      <div className={styles["btn-container"]}>
        <Button value="All" className={styles["icon-fix"]} />
        <Button value="today" className={styles["icon-fix"]} />
        <Button value="this week" className={styles["icon-fix"]} />
      </div>
    </div>
  );
}

export default SearchBar;

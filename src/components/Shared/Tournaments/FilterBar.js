import React from "react";

import listViewBtn from "./../../../assets/icons/listViewBtn.svg";
import gridViewBtn from "./../../../assets/icons/gridViewBtn.svg";
import FilterDropdown from "../../UI/FilterDropdown";
import styles from "./FilterBar.module.css";
function FilterBar() {
  return (
    <div className={styles["filterbar-container"]}>
      <div className={styles["filterbar-dropdown"]}>
        <FilterDropdown
          heading="Upcoming"
          options={["upcoming1", "upcoming2", "upcoming3"]}
        />
        <FilterDropdown
          heading="Select Team Size"
          options={["team1", "team2", "team3"]}
        />
        <FilterDropdown
          heading="Select Entry Fee"
          options={["fee1", "fee2", "fee3"]}
        />
      </div>
      <div className={styles["filter-btn-container"]}>
        <img src={gridViewBtn} alt="grid icon" />
        <img src={listViewBtn} alt="list icon" />
      </div>
    </div>
  );
}

export default FilterBar;

import React from "react";
import { NavLink } from "react-router-dom";

import GlobeIcon from "./../../assets/icons/GlobeIcon.svg";
import downArrow from "./../../assets/icons/down_arrow.svg";

import styles from "./PagesDropdown.module.css";
function PagesDropdown() {
  const [isOpenDropdown, setIsOpenDropDown] = React.useState(false);

  return (
    <div className={styles["navbar-custom-dropdown"]}>
      <div
        className={styles["navbar-custom-dropdown-header"]}
        onClick={() => setIsOpenDropDown(!isOpenDropdown)}
      >
        <img src={GlobeIcon} alt="earth icon" />
        <span>Pages</span>
        <img src={downArrow} alt="down arrow for pages dropdown" />
      </div>

      <ul
        className={`${styles["navbar-custom-list"]} ${
          isOpenDropdown && styles["navbar-custom-list-toggle"]
        }`}
      >
        <li onClick={() => setIsOpenDropDown(!isOpenDropdown)}>
          <NavLink to="/about" activeClassName={styles["active"]}>
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PagesDropdown;

import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../UI/Logo";
import styles from "./Navbar.module.css";
import PagesDropdown from "../UI/PagesDropdown";
import LanguagesDropdown from "../UI/LanguagesDropdown";

function Navbar(props) {
  return (
    <nav className={`${styles.nav} ${props.className}`}>
      <Logo className={styles["logo-display"]} />
      <div className={`${styles["right-side-nav-container"]}`}>
        <ul>
          <li>
            <NavLink exact={true} to="/" activeClassName={styles["active"]}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/games" activeClassName={styles["active"]}>
              GAMES
            </NavLink>
          </li>
          <li>
            <NavLink to="/tournaments" activeClassName={styles["active"]}>
              TOURNAMENTS
            </NavLink>
          </li>
          <li>
            <PagesDropdown />
          </li>
          <li>
            <LanguagesDropdown />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

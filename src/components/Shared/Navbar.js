import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../UI/Logo";
import GlobeIcon from "./../../assets/icons/GlobeIcon.svg";
import styles from "./Navbar.module.css";

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
          <li className={styles.pages}>
            <img src={GlobeIcon} alt="earth icon" />
            <select name="pages">
              <option>Pages</option>
              <option>About</option>
              <option>Page 2</option>
              <option>Page 3</option>
            </select>
          </li>
          <li>
            <select name="language">
              <option>EN</option>
              <option>FR</option>
              <option>TN</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

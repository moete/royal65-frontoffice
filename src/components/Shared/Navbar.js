import React from "react";

import Button from "./../UI/Button";
import Logo from "./../UI/Logo";
import GlobeIcon from "./../../assets/icons/GlobeIcon.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className={styles.nav}>
      <Logo />
      <div
        className={`${styles["right-side-nav-container"]} ${
          isNavbarOpen && styles["right-side-nav-mobile"]
        }`}
      >
        <ul>
          <li>Home</li>
          <li>GAMES</li>
          <li>TOURNAMENTS</li>
          <li className={styles.pages}>
            <img src={GlobeIcon} alt="earth icon" />
            <select name="pages">
              <option>Pages</option>
              <option>Page1</option>
              <option>Page12</option>
              <option>Page13</option>
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
        <div className={styles["btn-container"]}>
          <Button value="register" />
          <Button value="sign up" btnLook="signin" />
        </div>
      </div>
      <GiHamburgerMenu
        className={styles["burger-icon"]}
        onClick={toggleNavbar}
      />
    </nav>
  );
}

export default Navbar;

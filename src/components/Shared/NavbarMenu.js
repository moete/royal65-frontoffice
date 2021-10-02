import React from "react";

import { Navbar } from ".";
import Button from "../UI/Button";
import Login from "./AuthComponents/Login";
import Register from "./AuthComponents/Register";

import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./NavbarMenu.module.css";
function NavbarMenu() {
  /* Login and register modal  handlers */
  const [loginIsShown, setLoginIsShown] = React.useState(false);
  const showloginHandler = () => {
    setLoginIsShown(true);
  };
  const hideloginHandler = () => {
    setLoginIsShown(false);
  };
  const [registerIsShown, setRegisterIsShown] = React.useState(false);
  const showregisterHandler = () => {
    setRegisterIsShown(true);
  };
  const hideregisterHandler = () => {
    setRegisterIsShown(false);
  };

  /* Navbar toggle for responsive purpose */
  const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <>
      {loginIsShown && <Login onClose={hideloginHandler} />}
      {registerIsShown && <Register onClose={hideregisterHandler} />}
      <div
        className={`${styles["navbar-menu"]} ${
          isNavbarOpen ? styles["toggle-navbar"] : ""
        }`}
      >
        <Navbar />
        <div className={styles["navbar-btn-container"]}>
          <Button value="sign up" btnLook="blue" onClick={showloginHandler} />
          <Button
            value="register"
            btnLook="register"
            onClick={showregisterHandler}
          />
        </div>
      </div>
      <GiHamburgerMenu
        className={styles["burger-icon"]}
        onClick={toggleNavbar}
      />
    </>
  );
}

export default NavbarMenu;

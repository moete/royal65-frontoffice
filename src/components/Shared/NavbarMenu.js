import React from "react";
import { Navbar } from ".";
import Button from "../UI/Button";
import Login from "./AuthComponents/Login";
import Register from "./AuthComponents/Register";

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
      {loginIsShown && (
        <Login
          onClose={hideloginHandler}
          onOpenRegister={showloginHandler}
        />
      )}
      {registerIsShown && (
        <Register
          onClose={hideregisterHandler}
          onOpenLogin={showregisterHandler}
        />
      )}
      <div
        className={`${styles["navbar-menu"]} ${isNavbarOpen ? styles["toggle-navbar"] : ""
          }`}
      >
        <Navbar />
        <div className={styles["navbar-btn-container"]}>
          <Button
            value="sign in"
            className={styles["signin-btn"]}
            onClick={showloginHandler}
          />
          <Button value="register" onClick={showregisterHandler} />
        </div>
      </div>
      <div
        className={`${styles["navbar-burger-menu"]} ${
          isNavbarOpen && styles["animate-burger"]
        }`}
        onClick={toggleNavbar}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}

export default NavbarMenu;

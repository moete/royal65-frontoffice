import React from "react";

import { NavbarMenu } from "./../Shared";
import styles from "./Header.module.css";
function HeaderHome(props) {
  const { title, pageLocation, bgImg } = props;
  return (
    <header
      className={styles["header-shared-menu"]}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <NavbarMenu />
      <div className={styles["header-shared-menu-content"]}>
        <h2>{title}</h2>
        <p>{pageLocation}</p>
      </div>
    </header>
  );
}

export default HeaderHome;

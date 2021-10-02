import React from "react";

import { Navbar, SocialMediaBar } from "./../Shared";
import Button from "./../UI/Button";
import newsLetterImg from "./../../assets/images/newsLetterImg.svg";
import styles from "./Footer.module.css";

function NewsLetter() {
  return (
    <div
      className={styles["news-letter-container"]}
      style={{ backgroundImage: `url(${newsLetterImg})` }}
    >
      <h3>want gaming & esports news straight to your inbox</h3>
      <p>to get Exclusive benefits</p>
      <div className={styles["news-letter-custom-input-container"]}>
        <input type="text" placeholder="Enter your email address" />
        <Button value="Subscribe" type="submit" />
      </div>
    </div>
  );
}
function Footer() {
  return (
    <footer className={styles["global-footer"]}>
      <NewsLetter />
      <div className={styles["global-footer-content"]}>
        <div className={styles["global-footer-nav"]}>
          <Navbar />
          <SocialMediaBar />
        </div>
        <p>
          Copyright © Gainio | Designed by <span>Pixelasis</span>. ALL RIGHTS
          RESERVED
        </p>
      </div>
    </footer>
  );
}

export default Footer;

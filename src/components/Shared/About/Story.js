import React from "react";

import storyIllustration from "./../../../assets/images/storyIllustration.svg";
import Button from "../../UI/Button";
import styles from "./Story.module.css";
function Story() {
  return (
    <section className={styles["story-container"]}>
      <div
        className={styles["story-about-us"]}
        style={{ backgroundImage: `url(${storyIllustration})` }}
      >
        <div>
          <div>
            <h2>200*</h2>
            <p>We're proud of our partners</p>
          </div>
          <div>
            <h2>20 mil.</h2>
            <p>A happy is a loyal customer</p>
          </div>
          <div>
            <h2>2010—</h2>
            <p>We've been Gaming company since</p>
          </div>
        </div>
      </div>
      <div className={styles["story-content"]}>
        <h2>THE STORY BEHIND Gainio TEAM</h2>
        <p>
          Welcome to Gainio — a perfect place to chill and enjoy some high-level
          entertainment. The best part? Everything is available for you right
          here! Enjoy our rich array of charming slots, card games, lotteries,
          and VIP level treatment!
        </p>
        <div className={styles["story-btn-container"]}>
          <Button
            value="Join our team"
            className={styles["story-btn-custom-join"]}
          />
          <Button
            value="Read More"
            className={styles["story-btn-custom-read"]}
          />
        </div>
      </div>
    </section>
  );
}

export default Story;

import React from "react";
import { SocialMediaBar } from "..";

import winnersAvatar from "./../../../assets/images/winnersAvatar.svg";
import styles from "./Team.module.css";
function Team() {
  return (
    <section className={styles["story-team"]}>
      <div className={styles["story-team-container"]}>
        <div className={styles["story-team-header"]}>
          <h2>Our amazing team</h2>
          <p>Our small team is an incredible group of people</p>
        </div>

        <div className={styles["story-team-cards"]}>
          <div>
            <img src={winnersAvatar} alt="team ember profile photo1" />
            <h4>Jane Cooper</h4>
            <SocialMediaBar />
          </div>
          <div>
            <img src={winnersAvatar} alt="team ember profile photo2" />
            <h4>Jane Cooper</h4>
            <SocialMediaBar />
          </div>
          <div>
            <img src={winnersAvatar} alt="team ember profile photo3" />
            <h4>Jane Cooper</h4>
            <SocialMediaBar />
          </div>
          <div>
            <img src={winnersAvatar} alt="team ember profile photo4" />
            <h4>Jane Cooper</h4>
            <SocialMediaBar />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;

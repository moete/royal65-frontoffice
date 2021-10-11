import React from "react";

import storyMulti from "./../../../assets/icons/storyMulti.svg";
import storyFast from "./../../../assets/icons/storyFast.svg";
import storySecurity from "./../../../assets/icons/storySecurity.svg";
import storyTransparent from "./../../../assets/icons/storyTransparent.svg";
import storyLeadingBrand from "./../../../assets/images/storyLeadingBrand.svg";
import styles from "./LeadingBrand.module.css";
function LeadingBrand() {
  return (
    <section
      className={styles["story-leading-brand"]}
      style={{ backgroundImage: `url(${storyLeadingBrand})` }}
    >
      <div className={styles["story-leading-container"]}>
        <div className={styles["story-leading-content"]}>
          <h2>The story behind gainio team</h2>
          <p>
            Gainio has created tremendous performance in the industry. While
            dedicating to build a playground on your finger tip, Gainio gaming
            attracts great amounts of wagers, has now become the first-tier
            gaming product.
          </p>
        </div>
        <div className={styles["story-leading-items"]}>
          <div>
            <img src={storyMulti} alt="icon for multi accounts" />
            <h4>Multi- Account</h4>
          </div>
          <div>
            <img src={storyTransparent} alt="icon for Transparent" />
            <h4>Transparent</h4>
          </div>
          <div>
            <img src={storySecurity} alt="icon for Security" />
            <h4>Security</h4>
          </div>
          <div>
            <img src={storyFast} alt="icon for Fast withdraw" />
            <h4>Fast withdraw</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeadingBrand;

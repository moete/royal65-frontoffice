import React from "react";

import earnImage from "./../../assets/images/earn.svg";
import winImage from "./../../assets/images/win.svg";
import playImage from "./../../assets/images/play.svg";

import styles from "./PlayWinEarn.module.css";
function PlayWinEarn(props) {
  return (
    <div className={`${styles.pwe} ${props.className}`}>
      <div className={styles.item}>
        <img src={playImage} alt="play icon" />
        <div>
          <h4>PLAY</h4>
          <p className=".medium-text">
            A huge collection of web and mobile games
          </p>
        </div>
      </div>
      <div className={styles.item}>
        <img src={winImage} alt="win icon" />
        <div>
          <h4>WIN</h4>
          <p className=".medium-text">
            Points and cash from playing and competing
          </p>
        </div>
      </div>
      <div className={styles.item}>
        <img src={earnImage} alt="earn icon" />
        <div>
          <h4>EARN</h4>
          <p className=".medium-text">
            Your Wombucks or prize money from challenges
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlayWinEarn;

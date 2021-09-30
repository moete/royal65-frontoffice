import React from "react";

import placeholder from "./../../assets/images/placeholder.svg";
import styles from "./Carousel.module.css";
function Carousel() {
  return (
    <div className={styles["feature-carousel"]}>
      <img src={placeholder} alt="random img1" />
      <img src={placeholder} alt="random img2" />
      <img src={placeholder} alt="random img3" />
      <img src={placeholder} alt="random img4" />
      <img src={placeholder} alt="random img5" />
      <img src={placeholder} alt="random img6" />
      <img src={placeholder} alt="random img7" />
    </div>
  );
}

export default Carousel;

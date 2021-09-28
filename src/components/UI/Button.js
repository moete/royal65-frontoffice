import React from "react";

import styles from "./Button.module.css";

function Button(props) {
  const { type, btnLook, value, onClick, icon } = props;
  let cssClasses;

  switch (btnLook) {
    case "signin":
      cssClasses = `${styles.btn} ${styles["signin-btn"]} medium-text`;
      break;
    default:
      cssClasses = `${styles.btn} medium-text`;
  }

  return (
    <button className={cssClasses} onClick={onClick} type={type || "button"}>
      {value}
      {icon && (
        <img src={icon} alt="custom icon" style={{ marginLeft: "10px" }} />
      )}
    </button>
  );
}

export default Button;

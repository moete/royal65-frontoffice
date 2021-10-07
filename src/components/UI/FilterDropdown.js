import React from "react";

import arrowImg from "./../../assets/icons/Vector.svg";
import styles from "./FilterDropdown.module.css";
function FilterDropdown(props) {
  const [isOpenDropdown, setIsOpenDropdown] = React.useState(false);
  return (
    <div className={styles["filter-dropdown"]}>
      <div
        className={styles["filter-item"]}
        onClick={() => setIsOpenDropdown(!isOpenDropdown)}
      >
        <p>{props.heading}</p>
        <img
          src={arrowImg}
          alt="arrow down"
          className={
            isOpenDropdown ? styles["filter-animate-arrow"] : undefined
          }
        />
      </div>

      <ul
        className={`${styles["filter-options"]} ${
          isOpenDropdown ? styles["filter-opt"] : undefined
        }  `}
      >
        {props.options?.map((option, index) => {
          return <li key={index}>{option}</li>;
        })}
      </ul>
    </div>
  );
}

export default FilterDropdown;

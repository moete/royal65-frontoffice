import React from "react";

import QuestionItem from "./QuestionItem";
import styles from "./QuestionsList.module.css";

function QuestionsList(props) {
  const { data, heading } = props;
  return (
    <div className={styles["question-list-container"]}>
      <h4>{heading}</h4>
      <div className={styles["items-container"]}>
        {data.map((elem) => {
          return <QuestionItem data={elem} key={elem.id} />;
        })}
      </div>
    </div>
  );
}

export default QuestionsList;

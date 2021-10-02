import React from "react";

import plusIcon from "./../../assets/icons/plusIcon.svg";
import minusIcon from "./../../assets/icons/minusIcon.svg";
import styles from "./../Shared/QuestionItems.module.css";

function Item(props) {
  const [isOpenQuestion, setIsOpenQuestion] = React.useState(false);
  const { data } = props;
  return (
    <div className={styles["question-item"]}>
      <div>
        <h6>{data.question}</h6>
        {!isOpenQuestion && (
          <img
            src={plusIcon}
            alt="plus icon"
            onClick={() => setIsOpenQuestion(true)}
          />
        )}
        {isOpenQuestion && (
          <img
            src={minusIcon}
            alt="minus icon"
            onClick={() => setIsOpenQuestion(false)}
          />
        )}
      </div>
      <p className={isOpenQuestion ? styles["showAnswer"] : null}>
        {data.answer ? data.answer : "No answer found!"}
      </p>
    </div>
  );
}

function QuestionItems(props) {
  const { data } = props;
  return (
    <React.Fragment>
      {data.map((question) => {
        return <Item data={question} key={question.id} />;
      })}
    </React.Fragment>
  );
}

export default QuestionItems;

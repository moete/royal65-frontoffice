import React from "react";

import QuestionItems from "./../Shared/QuestionItems";
import FAQIllustration from "./../../assets/images/FAQIllustration.svg";
import styles from "./CommonQuestions.module.css";

const questions = [
  {
    id: 1,
    question: "Can I earn money playing on Gainio?",
    answer: "",
  },
  {
    id: 2,
    question: "Are there any benefits other than money?",
    answer:
      "Duis sapien justo, posuere interdum mauris eu, tincidunt placerat ante. Curabitur aliquet leo ipsum, at maximus dolor fringilla vel. Aliquam sagittis elementum volutpat. Vestibulum vel arcu nisl.",
  },
  {
    id: 3,
    question: "What is a challenge, and how do I join one?",
    answer: "",
  },
  {
    id: 4,
    question: "Can I earn money playing on Gainio?",
    answer: "",
  },
  {
    id: 5,
    question: "Who do I compete against in the challenges?",
    answer: "",
  },
  {
    id: 6,
    question: "How does G-Loot collect game data?",
    answer: "",
  },
];
function CommonQuestions() {
  return (
    <div className={styles["common-question"]}>
      <header>
        <h2>Our most common questions</h2>
        <p>
          Do you have a question about gainio? Please contact us! We would love
          to answer your questions.
        </p>
      </header>
      <section>
        <img
          src={FAQIllustration}
          alt="common questions section illustration"
        />
        <article>
          <QuestionItems data={questions} />
        </article>
      </section>
    </div>
  );
}

export default CommonQuestions;

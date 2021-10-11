import React from "react";

import Button from "../components/UI/Button";
import Header from "../components/Layout/Header";
import bgFAQ from "../assets/images/bgFAQ.svg";
import QuestionsList from "../components/Shared/FAQ/QuestionsList";
import Footer from "../components/Layout/Footer";

import styles from "./FAQ.module.css";

const accountQA = [
  {
    id: 1,
    question: "How do I create an Gainio account?",
    answer: "",
  },
  {
    id: 2,
    question: "Help! I've forgotten my password!",
    answer:
      "Duis sapien justo, posuere interdum mauris eu, tincidunt placerat ante. Curabitur aliquet leo ipsum, at maximus dolor fringilla vel. Aliquam sagittis elementum volutpat. Vestibulum vel arcu nisl.",
  },
  {
    id: 3,
    question: "How do I add another currency to my account?",
    answer: "",
  },
  {
    id: 4,
    question: "How do I switch from one currency to another?",
    answer: "",
  },
];
const dwQA = [
  {
    id: 1,
    question: "What currencies does Gainio accept?",
    answer: "",
  },
  {
    id: 2,
    question: "How long till a deposit shows up on my account?",
    answer:
      "Duis sapien justo, posuere interdum mauris eu, tincidunt placerat ante. Curabitur aliquet leo ipsum, at maximus dolor fringilla vel. Aliquam sagittis elementum volutpat. Vestibulum vel arcu nisl.",
  },
  {
    id: 3,
    question: "Will I be charged any fees for making deposits or withdrawals?",
    answer: "",
  },
  {
    id: 4,
    question:
      "I have made a deposit but the Bitcoins have not been credited to my account. What should I do?",
    answer: "",
  },
];
const gamesQA = [
  {
    id: 1,
    question: "Are Gainio's games fair?",
    answer: "",
  },
  {
    id: 2,
    question: "Can I play the casino games without spending any money?",
    answer:
      "Duis sapien justo, posuere interdum mauris eu, tincidunt placerat ante. Curabitur aliquet leo ipsum, at maximus dolor fringilla vel. Aliquam sagittis elementum volutpat. Vestibulum vel arcu nisl.",
  },
  {
    id: 3,
    question:
      "What happens if the game I’m playing freezes in the middle of a round?",
    answer: "",
  },
  {
    id: 4,
    question:
      "I can’t get the casino game to start when I click the link. What should I do?",
    answer: "",
  },
  {
    id: 5,
    question: "Why do I have some unfinished games showing in my Profile?",
    answer: "",
  },
];
const securityQA = [
  {
    id: 1,
    question: "Is all my information secure at Gainio?",
    answer: "",
  },
  {
    id: 2,
    question:
      "Will I need to verify my account when I make a deposit or withdrawal?",
    answer:
      "Duis sapien justo, posuere interdum mauris eu, tincidunt placerat ante. Curabitur aliquet leo ipsum, at maximus dolor fringilla vel. Aliquam sagittis elementum volutpat. Vestibulum vel arcu nisl.",
  },
  {
    id: 3,
    question: "How do I submit my documents?",
    answer: "",
  },
  {
    id: 4,
    question: "How long does it take before my documents are approved?",
    answer: "",
  },
  {
    id: 5,
    question: "Can my documents be rejected?",
    answer: "",
  },
  {
    id: 6,
    question: "Where can I see the status of my documents?",
    answer: "",
  },
];
function FAQ() {
  return (
    <div className={styles["faq-container"]}>
      <Header title="FAQ" pageLocation="Home > FAQ" bgImg={bgFAQ} />
      <section className={styles["frequent-questions"]}>
        <div className={styles["heading"]}>
          <h2>Frequently asked questions</h2>
          <p>
            Play in multi-player tournaments or head to head for cash prizes.
          </p>
        </div>
        <div className={styles["faq-btn-container"]}>
          <Button value="My account" className={styles["custom-btn"]} />
          <Button
            value="Deposits & Withdrawals"
            className={styles["custom-btn"]}
          />
          <Button value="Games" className={styles["custom-btn"]} />
          <Button value="Security" className={styles["custom-btn"]} />
        </div>
        <QuestionsList heading="my account" data={accountQA} />
        <QuestionsList heading="Deposits & withdrawals" data={dwQA} />
        <QuestionsList heading="Games" data={gamesQA} />
        <QuestionsList heading="Security" data={securityQA} />
      </section>
      <Footer />
    </div>
  );
}

export default FAQ;

import React from "react";

import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import {} from "./../components/Shared";
import bgGames from "./../assets/images/bgAbout.svg";
import styles from "./About.module.css";
function About() {
  return (
    <div className={styles["About-page"]}>
      <Header title="About us" pageLocation="Home > About Us" bgImg={bgGames} />
      <Footer />
    </div>
  );
}

export default About;

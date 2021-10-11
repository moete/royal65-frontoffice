import React from "react";

import Header from "../components/Layout/Header";
import Story from "../components/Shared/About/Story";
import LeadingBrand from "../components/Shared/About/LeadingBrand";
import Team from "../components/Shared/About/Team";
import Footer from "../components/Layout/Footer";
import {} from "./../components/Shared";
import bgGames from "./../assets/images/bgAbout.svg";
import styles from "./About.module.css";
function About() {
  return (
    <main className={styles["About-page"]}>
      <Header title="About us" pageLocation="Home > About Us" bgImg={bgGames} />
      <Story />
      <LeadingBrand />
      <Team />
      <Footer />
    </main>
  );
}

export default About;

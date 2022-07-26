import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={styles.div}>
      LandingPage
      <Link to={"/home"}> Home </Link>
    </div>
  );
}

export default LandingPage;

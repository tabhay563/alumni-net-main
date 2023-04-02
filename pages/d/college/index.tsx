import React from "react";
import Navigation from "../../../components/reusables/Navigation";
import styles from "../../../styles/PageStyles/Home.module.scss";

export default function Chat() {
  return (
    <div className={styles.container}>
      <Navigation />
      <h1 className={styles.heading}>
          Verify List
      </h1>
      <div className={styles.cardgrid}>
        
      </div>
    </div>
  );
}

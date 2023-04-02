import React from "react";
import Navigation from "../../../components/reusables/Navigation";
import styles from "../../../styles/PageStyles/College/Verify.module.scss";

import Verifycard from '../../../components/Cards/Verifycard'

export default function Chat() {
  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.headers}>
      <h1 className={styles.heading}>Alumni Management</h1>
      <h3 className={styles.subheading}>Verify Heading</h3>
      </div>
      <div className={styles.main}>
        <Verifycard />
        <Verifycard />
        <Verifycard />
        <Verifycard />
        <Verifycard />
      </div>
    </div>
  );
}

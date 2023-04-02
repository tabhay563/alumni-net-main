import React from "react";
import styles from "./Progress.module.scss";

const Progress = ({steps}: any) => {


  return (
    <>
      <div className={styles.progress__bar} >
        
        <div className={`${styles.card__head_title} ${styles.active}`}>
          <div className={styles.circle__background}>
            <h1 className={styles.count}>1</h1>
          </div>
          <h1 className={styles.title}>Your Profile</h1>
        </div>
        <div className={styles.card__head_title}>
          <div className={styles.circle__background}>
            <h1 className={styles.count}>2</h1>
          </div>
          <h1 className={styles.title}>College Information</h1>
        </div>
        <div className={styles.card__head_title}>
          <div className={styles.circle__background}>
            <h1 className={styles.count}>3</h1>
          </div>
          <h1 className={styles.title}>Current Working Info</h1>
        </div>
        </div>
     
    </>
  );
};

export default Progress;

import React from "react";
import AlumniDashboardLayout from "../../../../layout/AlumniDashboardLayout";
import styles from "../../../../styles/Dashboard/Details.module.scss";



 function Details() {
  return (
    <>
      <div className={styles.upper__content}>
        <div className={styles.profile__img_container}>
          <div className={styles.profile__img}>
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="profile"
            />
          </div>
          <div className={styles.Upper__text}>
            <h1 className={styles.heading}>Apoorv Jain</h1>
            <p className={styles.subtitles}>
              
            </p>
          </div>
        </div>
      </div>

    <div className={styles.main}>
        <div className={styles.main__left}>
            <h1 className={styles.main__left__heading}>About</h1>
        </div>
        <div className={styles.main__right}>
            <h1 className={styles.main__right__heading}>About</h1>
        </div>
    </div>
    </>
  );
}

Details.PageLayout =AlumniDashboardLayout ;
export default Details;
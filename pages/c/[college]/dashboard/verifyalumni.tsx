import React from 'react'
import Verifycard from '../../../../components/Cards/Verifycard';
import DashboardLayout from '../../../../layout/DashboardLayout'
import styles from "../../../../styles/PageStyles/College/Verify.module.scss";


const VerifyAlumni = () => {
  return (
    <>
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
    </>
  )
}


VerifyAlumni.PageLayout = DashboardLayout;
export default VerifyAlumni;
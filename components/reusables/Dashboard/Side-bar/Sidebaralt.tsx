import React from "react";
import styles from "./Sidebar.module.scss";
import {MdOutlineManageAccounts, MdVerified} from 'react-icons/md';
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase"


const Sidebaralt = () => {
  const [user] = useAuthState(auth);

  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <span className={styles.logo}>Alumni Connect</span>
      </div>
      <hr />
      <div className={styles.center}>
        <ul>
            <p className={styles.title}>Alumni Management</p>
          <li className={styles.nav_link}>
          <MdOutlineManageAccounts className={styles.icons}/>
            <span className={styles.link_text}><Link href={`/c/${user?.uid}/dashboard/alumnimanager`} passHref >Alumni Manager</Link></span>
          </li>
          <li className={styles.nav_link}>
          <MdVerified className={styles.icons}/>
            <span className={styles.link_text}><Link href={`/c/${user?.uid}/dashboard/verifyalumni`} passHref >Verify Alumni </Link></span>
          </li>
            <p className={styles.title}>Profile Management</p>
          <li className={styles.nav_link}>
          <CgProfile className={styles.icons}/>
          <span className={styles.link_text}><Link href={`/c/${user?.uid}/dashboard/editprofile`} passHref >Edit Profile</Link></span>
          </li>
          <li className={styles.nav_link}>
            <IoIosNotificationsOutline className={styles.icons}/>
            <span className={styles.link_text}><Link href={`/c/${user?.uid}/dashboard/notices`} passHref >Notices</Link></span>
          </li>
        </ul>
      </div>
     
    </div>
  );
};

export default Sidebaralt;

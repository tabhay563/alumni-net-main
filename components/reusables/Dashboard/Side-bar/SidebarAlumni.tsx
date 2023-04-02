import React from "react";
import styles from "./Sidebar.module.scss";
import {MdOutlineManageAccounts, MdVerified} from 'react-icons/md';
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase"
import { FaDonate } from "react-icons/fa";
import { BiGroup } from "react-icons/bi";


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
          <li>
          <MdOutlineManageAccounts className={styles.icon}/>
            <Link href={`/c/${user?.uid}/dashboard/my-details`} passHref >Alumni Manager</Link>
          </li>
          <li>
          <MdVerified className={styles.icon}/>
            <Link href={`/c/${user?.uid}/dashboard/profile`} passHref >Verify Alumni </Link>
          </li>
            <p className={styles.title}>Profile Management</p>
          <li>
          <CgProfile className={styles.icon}/>
          <Link href={`/c/${user?.uid}/dashboard/posts`} passHref >Edit Profile</Link>
          </li>
          <li>
            <IoIosNotificationsOutline className={styles.icon}/>
            <Link href={`/c/${user?.uid}/dashboard/notices`} passHref >Notices</Link>
          </li>
          <li>
            <BiGroup className={styles.icon}/>
            <Link href={`/c/${user?.uid}/dashboard/connections`} passHref >Notices</Link>
          </li>
          <li>
            <FaDonate className={styles.icon}/>
            <Link href={`/c/${user?.uid}/dashboard/donations`} passHref >Notices</Link>
          </li>
        </ul>
      </div>
     
    </div>
  );
};

export default Sidebaralt;

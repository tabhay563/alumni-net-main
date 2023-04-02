import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import Link from "next/link";
import { GiHamburgerMenu, GiRamProfile } from "react-icons/gi";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosNotificationsOutline,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { GrContactInfo } from "react-icons/gr";
import { AiOutlineProfile, AiOutlineTeam } from "react-icons/ai";
import { BsFilePost } from "react-icons/bs";
import { FaDonate } from "react-icons/fa";
import { CgDetailsMore, CgProfile } from "react-icons/cg";
import { auth } from "../../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { MdOutlineManageAccounts, MdVerified } from "react-icons/md";

const SidebarColl = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <nav className={styles.sidebar}>
        <div className={styles.nav_menu}>
          <div className={styles.menu}>
            <ul className={styles.nav_links}>
              <li className={styles.nav_link}>
                <MdOutlineManageAccounts className={styles.icons} />
                <span className={styles.link_text}>
                  <Link
                    href={`/c/${user?.uid}/dashboard/alumnimanager`}
                    passHref
                  >
                    Alumni Manager
                  </Link>
                </span>
              </li>
              <li className={styles.nav_link}>
                <MdVerified className={styles.icons} />
                <span className={styles.link_text}>
                  <Link
                    href={`/c/${user?.uid}/dashboard/verifyalumni`}
                    passHref
                  >
                    Verify Alumni
                  </Link>
                </span>
              </li>
         
              <li className={styles.nav_link}>
                <CgProfile className={styles.icons} />
                <span className={styles.link_text}>
                  <Link href={`/c/${user?.uid}/dashboard/editprofile`} passHref>
                    Edit Profile
                  </Link>
                </span>
              </li>
              <li className={styles.nav_link}>
                <IoIosNotificationsOutline className={styles.icons} />
                <span className={styles.link_text}>
                  <Link href={`/c/${user?.uid}/dashboard/notices`} passHref>
                    Notices
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SidebarColl;

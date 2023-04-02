import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import Link from "next/link";
import { GiHamburgerMenu, GiRamProfile } from "react-icons/gi";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { GrContactInfo } from "react-icons/gr";
import { AiOutlineProfile, AiOutlineTeam } from "react-icons/ai";
import { BsFilePost } from "react-icons/bs";
import { FaDonate } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { auth } from "../../../../firebase"
import { useAuthState } from "react-firebase-hooks/auth";


const Sidebar = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <nav className={styles.sidebar}>
        
        <div className={styles.nav_menu}>
          <div className={styles.menu}>
            <ul className={styles.nav_links}>
              <li className={styles.nav_link}>
                <CgDetailsMore
                  className={styles.icons}
                  
                />
                <Link  href={`/a/${user?.uid}/dashboard/my-details`} passHref>
                 <span  className={styles.link_text}>My Details</span>
                </Link>
              </li>
              <li className={styles.nav_link}>
                <AiOutlineProfile
                  className={styles.icons}
                  
                />
                <Link  href={`/a/${user?.uid}/dashboard/profile`} passHref>
                 <span  className={styles.link_text}>Profile</span>
                </Link>
              </li>
              <li className={styles.nav_link}>
                <BsFilePost
                  className={styles.icons}
                  
                />
                <Link  href={`/a/${user?.uid}/post`} passHref>
                <span  className={styles.link_text}>Posts</span>
                </Link>
              </li>
             
              <li className={styles.nav_link}>
                <AiOutlineTeam
                  className={styles.icons}
                  
                />
                <Link  href={`/a/${user?.uid}/dashboard/my-connections`} passHref>
                 <span  className={styles.link_text}>Connections</span>
                </Link>
              </li>
              <li className={styles.nav_link}>
                <FaDonate
                  className={styles.icons}
                  
                />
                <Link  href={`/a/${user?.uid}/dashboard/donation`} passHref>
                 <span  className={styles.link_text}>Donations</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;

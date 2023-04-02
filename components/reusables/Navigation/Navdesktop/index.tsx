import React, { useEffect, useState } from "react";
import styles from "./Navdesktop.module.scss";

import Link from "next/link";
import { useRouter } from "next/router";

import { GoSearch } from "react-icons/go";

import Dropdown from "../Nav/Dropdown";
import Searchbox from "../Nav/Searchbox";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase";

export default function Navdesktop() {
  const [dropdown, setDropdown] = useState(false);
  const [searchbox, setSearchbox] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  const router = useRouter();

  const handleSearchClick = () => {
    setSearchbox(!searchbox);
  };
  const handleProfileClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className={styles.container}>
      <div className={styles.block_logo}>
        <img src="/assets/logo.ico" style={{ height: "100%" }} />
        <span className="">SERINITY PATH</span>
      </div>
      <div className={styles.block_menu}>
        <div
          className={`${styles.navitem} ${
            router.pathname == "/a" ? styles.navitem__active : ""
          }`}
        >
          <Link href="/a" passHref>
            Home
          </Link>
        </div>
        <div
          className={`${styles.navitem} ${
            router.pathname == "/a/explore" ? styles.navitem__active : ""
          }`}
        >
          <Link href="/a/explore" passHref>
            Explore
          </Link>
        </div>
        <div
          className={`${styles.navitem} ${
            router.pathname == "/a/notice" ? styles.navitem__active : ""
          }`}
        >
          <Link href="/a/notices" passHref>
            Notices
          </Link>
        </div>
        <div
          className={`${styles.navitem} ${
            router.pathname == "/a/chat" ? styles.navitem__active : ""
          }`}
        >
          <Link href="/a/chat" passHref>
            Messenger
          </Link>
        </div>
      </div>
      <div className={styles.block_profile}>
        <div className={styles.searchicon}>
          <GoSearch onClick={handleSearchClick} />
        </div>
        <div className={styles.profile}>
          {user?.photoURL && (
            <img
              src={user?.photoURL}
              className={styles.profilepic}
              onClick={handleProfileClick}
              alt="profilepic"
            />
          )}
        </div>
        {dropdown && <Dropdown />}
        {searchbox && <Searchbox />}
      </div>
    </div>
  );
}

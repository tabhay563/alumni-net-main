import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";

import Link from "next/link";
import { useRouter } from "next/router";

import { GoSearch } from "react-icons/go";

import Dropdown from "../Nav/Dropdown";
import Searchbox from "../Nav/Searchbox";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase";
import { GiHamburgerMenu } from "react-icons/gi";
import Bottombar from "../Navmobile/Bottombar";
import { AiFillHome } from "react-icons/ai";
import { BsFillBellFill, BsChatLeftTextFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import Navmenu from "../Navmobile/Navmenu";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [searchbox, setSearchbox] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  // Navmobile

  //Changing Menu
  const [showmenu, setShowmenu] = useState(false);
  function handleChangeMenu() {
    setShowmenu(!showmenu);
  }

  const [value, setValue] = useState("");
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(value);
  }
  function handleChange(e: any) {
    setValue(e.target.value);
  }

  const router = useRouter();

  const handleSearchClick = () => {
    setSearchbox(!searchbox);
  };
  const handleProfileClick = () => {
    setDropdown(!dropdown);
  };

  return (
    
    <div className={styles.container}>
      <div className={styles.topcontainer}>
        <div className={styles.block_logo}>
          <img src="/icon.png" style={{ height: "100%" }} />
          <span className={styles.title}>Alumni Connect</span>
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
              
      {/* mobile view */}
      <div className={styles.navmobile}>
        <div className={styles.navmobile__top}>
          <div className={styles.navmobile__top__container}>
            <div className={styles.navmobile__top__container__menu_button}>
              <GiHamburgerMenu onClick={handleChangeMenu}/>
            </div>
            <div className={styles.navmobile__top__container__searchbox}>
              <form onSubmit={handleSubmit}>
                <input
                  className={
                    styles.navmobile__top__container__searchbox__input_search
                  }
                  type="text"
                  placeholder="Search.."
                  name="search"
                  value={value}
                  onChange={handleChange}
                ></input>
              </form>
            </div>
            <div className={styles.navmobile__top__container__profile}></div>
          </div>
        </div>

        {/* Bottombar */}
        <div className={styles.navmobile__bottom}>
          <div className={styles.navmobile__bottom__container}>
            <li className={router.pathname == "/" ? styles.active : ""}>
              <Link href="/">
                <AiFillHome />
              </Link>
            </li>
            <li className={router.pathname == "/notice" ? styles.active : ""}>
              <Link href="/notice">
                <BsFillBellFill />
              </Link>
            </li>
            <li className={router.pathname == "/a" ? "active" : ""}>
              <Link href="/a">
                <IoIosAddCircle />
              </Link>
            </li>
            <li className={router.pathname == "/b" ? "active" : ""}>
              <Link href="/b">
                <FaGraduationCap />
              </Link>
            </li>
            <li className={router.pathname == "/c" ? "active" : ""}>
              <Link href="/c">
                <BsChatLeftTextFill />
              </Link>
            </li>
          </div>
        </div>
      </div>
      {showmenu&&<Navmenu handleChangeMenu={handleChangeMenu}/>}
    </div>
  );
}

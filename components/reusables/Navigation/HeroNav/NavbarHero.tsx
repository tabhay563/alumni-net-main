import * as React from "react";
import { FaGraduationCap } from "react-icons/fa";
import styles from "../../../../styles/PageStyles/HeroPage/Nav.module.scss";
export interface IAppProps {}

export function NavbarHero(props: IAppProps) {
  const [toggleNav, setToggleNav] = React.useState(false);

  const navToggle = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <a className={styles.navlogo}>
            <FaGraduationCap />
            SERINITY PATH
          </a>
          <ul
            className={
              toggleNav === false
                ? styles.navmenu
                : styles.navmenu + " " + styles.active
            }
          >
            <li className={styles.navitem}>
              <a href="#" className={styles.navlink}>
                Home
              </a>
            </li>
            <li className={styles.navitem}>
              <a href="#features" className={styles.navlink}>
                Features
              </a>
            </li>
            <li className={styles.navitem}>
              <a href="#about" className={styles.navlink}>
                About
              </a>
            </li>
            <li className={styles.navitem}>
              <a href="#contact" className={styles.navlink}>
                Contact
              </a>
            </li>
          </ul>
          <button
            className={
              toggleNav === false
                ? styles.hamburger
                : styles.hamburger + " " + styles.active
            }
            onClick={navToggle}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>
    </>
  );
}

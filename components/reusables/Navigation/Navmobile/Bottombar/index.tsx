import styles from "./Bottombar.module.scss";
import {AiFillHome} from "react-icons/ai";
import {BsFillBellFill, BsChatLeftTextFill} from "react-icons/bs";
import {IoIosAddCircle} from "react-icons/io";
import { FaGraduationCap} from "react-icons/fa";


import { useRouter } from "next/router";
import Link from "next/link";

const Bottombar = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      
        <li className={router.pathname == "/" ? styles.active : ""}>
          <Link href="/" ><AiFillHome /></Link>
        </li>
        <li className={router.pathname == "/notice" ? styles.active : ""}>
          <Link href="/notice"><BsFillBellFill /></Link>
        </li>
        <li className={router.pathname == "/a" ? "active" : ""}>
          <Link href="/a"><IoIosAddCircle /></Link>
        </li>
        <li className={router.pathname == "/b" ? "active" : ""}>
          <Link href="/b"><FaGraduationCap /></Link>
        </li>
        <li className={router.pathname == "/c" ? "active" : ""}>
          <Link href="/c"><BsChatLeftTextFill /></Link>
        </li>

        
        
        
        
        
      
    </div>
  );
};

export default Bottombar;

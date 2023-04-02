import styles from "./Navmobile.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";

import { useState } from "react";
import Navmenu from "./Navmenu";
import Bottombar from "./Bottombar";
import Link from "next/link";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase";


const Navmobile = () => {
  const [value, setValue] = useState("");
  const [showmenu, setShowmenu] = useState(false);
  const [user, loading, error] = useAuthState(auth);


  function handleChangeMenu() {
    setShowmenu(!showmenu);
  }
  function handleChange(e:any) {
    setValue(e.target.value);
  }
  function handleSubmit(e:any) {
    e.preventDefault();
    console.log(value);
  }
  if(!showmenu){
  return (
    <>
    <div className={styles.container}>
      <div className={styles.menu_button}>
        <GiHamburgerMenu onClick={handleChangeMenu} />
      </div>
      <div className={styles.searchbox}>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.input_search}
            type="text"
            placeholder="Search.."
            name="search"
            value={value}
            onChange={handleChange}
          ></input>
        </form>
      </div>
      <Link href={`/a/${user?.uid}/dashboard`} passHref>
      <div className={styles.profile}>
      {user?.photoURL && (
            <img
              src={user?.photoURL}
              className={styles.profilepic}
              alt="profilepic"
            />
      )}
      </div>
      </Link>
    </div>
    <Bottombar />
    </>
  );
  }else{
    return <Navmenu handleChangeMenu={handleChangeMenu} />
  }
};
export default Navmobile;

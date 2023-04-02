import styles from "./Dropdown.module.scss";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../../firebase";

const Dropdown = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className={styles.container}>
      <div className={styles.listitem}>
        <Link href={`/a/${user?.uid}`} passHref>
          {"Profile"}
        </Link>
      </div>
      <div className={styles.listitem}>
        <Link href={`/a/${user?.uid}/dashboard`} passHref>
          {"Dashboard"}
        </Link>
      </div>
      <div className={styles.listitem}>
        <Link href={`/a/${user?.uid}/post`} passHref>
          {"Posts"}
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;

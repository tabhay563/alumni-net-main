import type { NextPage } from "next";
import styles from "../styles/PageStyles/Home.module.scss";

import { useEffect } from "react";
import { logout } from "../firebase/authFunctions";

const Notice: NextPage = () => {
  useEffect(() => {
    logout();
  });
  return <></>;
};

export default Notice;

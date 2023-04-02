import React, { useEffect, useState } from "react";
import styles from "./Navigation.module.scss";

import { useRouter } from "next/router";

import Navdesktop from "./Navdesktop";
import Navmobile from "./Navmobile";

export default function Navigation() {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 800) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    const updateMedia = () => {
      if (window.innerWidth < 800) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const router = useRouter();

  return (
    <div className={styles.container}>
      {isMobile ? (
        <Navmobile />
      ) : (
        <Navdesktop />
      )}
    </div>
  );
}

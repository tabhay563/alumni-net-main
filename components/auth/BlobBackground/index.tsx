import React from "react";
import styles from "./LoginBackground.module.scss";

export default function BlobBackground() {
  return (
    <div className={styles.container}>
      <img
        src="/assets/images/auth/BlobTL.svg"
        className={styles.TL}
        alt="Top Left Blob"
      />
      <img
        src="/assets/images/auth/BlobTR.svg"
        className={styles.TR}
        alt="Top Right Blob"
      />
      <img
        src="/assets/images/auth/BlobBL.svg"
        className={styles.BL}
        alt="Bottom Left Blob"
      />
      <img
        src="/assets/images/auth/BlobBR.svg"
        className={styles.BR}
        alt="Bottom Right Blob"
      />
    </div>
  );
}

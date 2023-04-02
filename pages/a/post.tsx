import React from "react";
import Postoverlay from "../../components/home/Postoverlay";
import PostCard from "../../components/Noticepost/Postcard";
import Navigation from "../../components/reusables/Navigation";
import styles from "../../styles/PageStyles/Home.module.scss";

export default function Chat() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Postoverlay />
    </div>
  );
}



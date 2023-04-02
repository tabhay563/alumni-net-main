import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { GiShare } from "react-icons/gi";
import { GoComment } from "react-icons/go";
import styles from "./PostCard.module.scss";

export default function PostCard(props: {}) {
  return (
    <div className={styles.container}>
      <div className={styles.user_info}>
        <img
          src={"https://picsum.photos/seed/picsum/50/50"}
          alt="Profile Pic"
          className={styles.profile_pic}
        />
        <div className={styles.info}>
          <span className={styles.name}>{"Janmejay Joshi"}</span>
          <span className={styles.timestamp}>{"46 min ago"}</span>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.textcontent}>{"Hello There Guys"}</div>
        <div className={styles.mediacontent}></div>
      </div>
      <div className={styles.controls}>
        <div>
          <AiOutlineLike />
          <span className={styles.counter}>{"1233"}</span>
        </div>
        <GiShare />
        <GoComment />
      </div>
    </div>
  );
}

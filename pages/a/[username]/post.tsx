import React from "react";


import PostCard from "../../../components/Noticepost/Postcard";
import styles from "../../../styles/PageStyles/Alumni/Post.module.scss"
const Post = () => {
  return (
    <div className={styles.cont}>
        <PostCard />
        <PostCard />
        <PostCard />
    </div>
  );
};



export default Post;
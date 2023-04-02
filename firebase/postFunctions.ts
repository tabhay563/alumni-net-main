import {
  query,
  getDocs,
  collection,
  where,
  doc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";

import { User } from "firebase/auth";
import { db } from ".";

const setPost = async (title: string, postContent: string, user: User) => {
  if (user != null) {
    try {
      await updateDoc(doc(db, "user", user.uid), {
        posts: arrayUnion({
          title: title,
          post: postContent,
          timestamp: Date.now(),
        }),
      });
    } catch (err) {
      console.error(err);
    }
  }
};

const getPosts = async (title: string) => {
  try {
    const q = query(collection(db, "user"), where("title", "==", title));
    const threads = await getDocs(q);
    return threads;
  } catch (err) {
    console.log(err);
  }
};

export { getPosts, setPost };

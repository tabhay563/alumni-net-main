import {
  query,
  getDocs,
  collection,
  where,
  addDoc,
  doc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";

import { User } from "firebase/auth";
import { db } from ".";

const verifyAlumni = async (userRef: string) => {
    try {
      await updateDoc(doc(db, "user", userRef), {
        verified: true
      });
    } catch (err) {
      console.error(err);
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

export type ThreadID = string;

export interface MessageInterface {
  uid: string;
  profile_pic: string;
  message?: string;
  imageURL?: string;
  timestamp: Date;
}

export interface Thread {
  id: string;
  title: string;
  college: string;
  chat: Array<MessageInterface>;
}

export { getPosts, setPost };

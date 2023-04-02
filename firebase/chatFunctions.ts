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

const postMessage = async (thread: string, message: string, user: User) => {
  if (user != null) {
    try {
      await updateDoc(doc(db, "chat_threads", thread), {
        chat: arrayUnion({
          uid: user.uid,
          profile_pic: user.photoURL,
          message: message,
          timestamp: Date.now(),
        }),
      });
    } catch (err) {
      console.error(err);
    }
  }
};

const addThread = async (title: string, college: string) => {
  await addDoc(collection(db, "chat_threads"), {
    title: title,
    college: college,
    chat: [],
  });
};

const getThreadList = async (title: string) => {
  try {
    const q = query(
      collection(db, "chat_threads"),
      where("title", "==", title)
    );
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

export { postMessage, addThread, getThreadList };

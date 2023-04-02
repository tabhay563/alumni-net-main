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

interface PostInterface {
  title : string;
  postContent: string;
  timestamp: Date;
}

interface UserDataInterface {
        name: string;
        bio:string; 
        college_info: string;
        work_info: string;
        authProvider: string;
        email: string;
        posts: Array<null | PostInterface>,
        conections: Array<string>,
        donations: Array<string>,
}

const updateDetails = async (user: User, data: UserDataInterface) => {
  if (user.email != null) {
    try {
      await updateDoc(doc(db, "users", user.email), {
        ...data
      });
    } catch (err) {
      console.error(err);
    }
  }
};



export { updateDetails };

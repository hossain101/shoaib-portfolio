import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";

export const getAllPosts = async () => {
  return getDocs(collection(db, "posts")).then((querySnapshot) => {
    const data = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return data;
  });
};

export const getThreePosts = async () => {
  const postsRef = collection(db, "posts");

  // Create a query to order posts by timestamp and limit to first 3
  const q = query(postsRef, orderBy("Timestamp"), limit(3));

  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return data;
};

export const getPost = async (title: string) => {
  return await getDoc(doc(db, `posts/${title}`)).then((snapshot) =>
    snapshot.data()
  );
};

import { auth, db } from "../firebase/firebase";
import { updateDoc,doc } from "firebase/firestore";
export const updateUserInfo = async (data) => {
  const user = auth.currentUser;
  if (!user) return;

  const userRef = doc(db, "users", user.uid);
  await updateDoc(userRef, data);
};
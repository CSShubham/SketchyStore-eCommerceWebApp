import { auth ,db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc,setDoc ,getDoc} from "firebase/firestore";
export const doCreateUserWithEmailAndPassword = async (
  email,
  password,
  username
) => {
  try {
    const userData = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userData.user;

    await updateProfile(user, {
      displayName: username,
    });
    await setDoc(doc(db, "users", user.uid), {
      username,
      email,
      phoneNumber: "", // new field
      address: {
        line1: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      },
      wishlist: [],
      cart: [],
      orders: [],
    });
    return user;
  } catch (error) {
    console.error("Signup Error:", error.message);
    throw error;
  }
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    console.error("Login Error:", error.message);
    throw error;
  }
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user=result.user;
  
  const userRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(userRef);
  if (!docSnap.exists()) {
    await setDoc(userRef, {
      username: user.displayName || "NoName",
      email: user.email,
      phoneNumber: "",
      address: {
        line1: "",
        city: "",
        state: "",
        postalCode: "",
        country: ""
      },
      wishlist: [],
      cart: [],
      orders: []
    });
  }
    return user;
};
export const doSignOut = () => {
  return auth.signOut();
};

import {
  GoogleAuthProvider,
  signInAnonymously,
  signOut,
  signInWithPopup,
  User,
} from "firebase/auth";

import { addDoc, collection } from "firebase/firestore";

export const useAuth = () => {
  const googleAuthProvider = new GoogleAuthProvider();

  const auth = useFirebaseAuth();
  const user = useCurrentUser();
  const router = useRouter();

  const db = useFirestore();
  const userRef = collection(db, "users");
  const userCollections = useCollection<User>(userRef);

  async function signInWithGoogle() {
    if (!auth) return;
    const user = await signInWithPopup(auth, googleAuthProvider);

    if (
      userCollections.value.findIndex((i) => i.email === user.user.email) < 0
    ) {
      await addUser(user.user);
    }

    if (user.user) {
      router.push("/");
    }
  }

  async function signInAnonymous() {
    if (!auth) return;
    await signInAnonymously(auth);
    router.push("/");
  }

  async function signOutC() {
    if (!auth) return;
    await signOut(auth);

    router.push("/login");
  }

  function isAuthenticated() {
    return !!user;
  }

  async function addUser(user: User) {
    const { displayName, email, emailVerified, isAnonymous, photoURL, uid } =
      user;
    const u = await addDoc(userRef, {
      displayName,
      email,
      emailVerified,
      isAnonymous,
      photoURL,
      uid,
    });
    return u;
  }

  return {
    user,
    isAuthenticated,
    signInWithGoogle,
    signInAnonymous,
    signOutC,
  };
};

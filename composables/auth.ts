import {
  signInWithRedirect,
  GoogleAuthProvider,
  signInAnonymously,
  signOut,
  signInWithPopup,
} from "firebase/auth";

export const useAuth = () => {
  const googleAuthProvider = new GoogleAuthProvider();

  const auth = useFirebaseAuth();
  const user = useCurrentUser();
  const router = useRouter();

  async function signInWithGoogle() {
    if (!auth) return;
    const user = await signInWithPopup(auth, googleAuthProvider);

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

  return {
    user,
    isAuthenticated,
    signInWithGoogle,
    signInAnonymous,
    signOutC,
  };
};

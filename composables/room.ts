import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useCollection } from "vuefire";

export interface Room {
  id?: string;
  name: string;
  displayName?: string;
  photoUrl?: string;
}

export const useRoom = () => {
  const db = useFirestore();

  const { user } = useAuth();
  const roomRef = collection(db, "rooms");
  const rooms = useCollection<Room>(roomRef);

  const myRoom = computed(() => {
    return user.value ? doc(roomRef, user.value.uid) : null;
  });

  async function addRoom(room: Room) {
    if (!user.value || !myRoom.value) return;
    const docRef = await addDoc(roomRef, {
      id: "",
      ...room,
      createdAt: serverTimestamp(),
      displayName: user.value.displayName,
      photoUrl: user.value.photoURL,
    });
    return docRef;
  }

  async function removeRoom(room: Room) {
    await deleteDoc(doc(roomRef, room.id));
  }

  return {
    rooms,
    addRoom,
    removeRoom,
  };
};

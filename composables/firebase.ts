import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  serverTimestamp,
} from "firebase/firestore";
import { useCollection } from "vuefire";

export interface Room {
  id?: string;
  name: string;
}

export const useFirebase = () => {
  const db = useFirestore();

  const roomRef = collection(db, "rooms");
  const rooms = useCollection<Room>(roomRef);

  async function addRoom(room: Room) {
    const docRef = await addDoc(roomRef, {
      ...room,
      createdAt: serverTimestamp(),
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

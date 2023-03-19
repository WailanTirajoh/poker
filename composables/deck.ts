import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { useCollection } from "vuefire";

export interface Deck {
  id?: string;
  values: string;
}

export const useDeck = () => {
  const db = useFirestore();

  const deckRef = collection(db, "decks");
  const decks = useCollection<Deck>(deckRef);

  async function addDeck(deck: Deck) {
    const docRef = await addDoc(deckRef, {
      ...deck,
      createdAt: serverTimestamp(),
    });
    return docRef;
  }

  async function removeDeck(deck: Deck) {
    await deleteDoc(doc(deckRef, deck.id));
  }

  return {
    decks,
    addDeck,
    removeDeck,
  };
};

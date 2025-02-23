import { useEffect, useState } from "react";
import { database } from "./config";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";

type TCollectionName = "prices";

const cache: Record<string, any[]> = {};

export const useGetData = <T>(collectionName: TCollectionName) => {
  const value = collection(database, collectionName);
  const [data, setData] = useState<T[]>(cache[collectionName] || []); // Initialize with cached data if available
  const [loading, setLoading] = useState<boolean>(!cache[collectionName]); // Skip loading if data is cached
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // If data is already cached, no need to fetch again
    if (cache[collectionName]) {
      setData(cache[collectionName]);
      setLoading(false);
      return;
    }

    const unsubscribe = onSnapshot(
      value,
      (snapshot: QuerySnapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as T[];

        // Update state and cache
        setData(items);
        cache[collectionName] = items; // Store data in cache
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [collectionName]);

  return { data, loading, error };
};

export const addData = async <T>(
  collectionName: TCollectionName,
  data: any
) => {
  const value = collection(database, collectionName);

  try {
    const docRef = await addDoc(value, {
      enService: data["enService"],
      huService: data["huService"],
      price: data["price"],
      onPromotion: data["onPromotion"],
      promotionPrice: data["promotionPrice"],
      serviceCategory: data["serviceCategory"],
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};

export const deleteData = async (
  id: string,
  collectionName: TCollectionName
) => {
  try {
    const deleteValue = doc(database, collectionName, id);
    await deleteDoc(deleteValue);
  } catch (error) {
    console.error("Error deleting document: ", error);
    throw error;
  }
};

export const editData = async (
  id: string,
  collectionName: TCollectionName,
  data: any
) => {
  try {
    const updateData = doc(database, collectionName, id);
    await updateDoc(updateData, {
      enService: data["enService"],
      huService: data["huService"],
      price: data["price"],
      onPromotion: data["onPromotion"],
      promotionPrice: data["promotionPrice"],
      serviceCategory: data["serviceCategory"],
    });
  } catch (error) {
    console.error("Error updating document: ", error);
    throw error;
  }
};

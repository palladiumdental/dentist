import React, { useEffect, useState } from "react";
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

export const useGetData = <T>(collectionName: TCollectionName) => {
  const value = collection(database, collectionName);
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      value,
      (snapshot: QuerySnapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as T[];
        setData(items);
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
      service: data["service"],
      price: data["price"],
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
      service: data["service"],
      price: data["price"],
    });
  } catch (error) {
    console.error("Error updating document: ", error);
    throw error;
  }
};

import React, { useEffect, useState } from "react";
import { database } from "./config";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

type TCollectionName = "prices";

export const useGetData = <T>(collectionName: TCollectionName) => {
  const value = collection(database, collectionName);
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // Start loading
        const docs = await getDocs(value);
        setData(docs.docs.map((doc) => ({ ...(doc.data() as T), id: doc.id })));
      } catch (err) {
        setError(err as Error); // Catch any errors
      } finally {
        setLoading(false); // End loading
      }
    };
    getData();
  }, [collectionName]);

  return { data, loading, error };
};

export const useAddData = async <T>(
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

export const useDeleteData = async (
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

export const useEditData = async (
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

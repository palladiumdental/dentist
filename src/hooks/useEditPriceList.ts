import { useState } from "react";

const useEditPriceList = (initialState: any) => {
  const [priceData, setPriceData] = useState(initialState);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.error("There was an error sending the email!", error);
    }
  };

  return {
    priceData,
    handleChange,
    handleSubmit,
  };
};

export default useEditPriceList;

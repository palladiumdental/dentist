import React from "react";
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "../helpers/stringFns";

type LocalizeProps = {
  text: string;
  isFirstLetterCapital?: boolean;
};

const Localize: React.FC<LocalizeProps> = ({ text, isFirstLetterCapital }) => {
  const { t } = useTranslation();
  const lowerCaseText = text.toLowerCase();

  return (
    <>
      {isFirstLetterCapital
        ? capitalizeFirstLetter(t(lowerCaseText))
        : t(lowerCaseText)}
    </>
  );
};

export default Localize;

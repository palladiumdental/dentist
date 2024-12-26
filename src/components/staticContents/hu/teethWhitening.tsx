import React from "react";
import ContentWrapper from "../contentWrapper";
import about1 from "../../../assets/teethWhitening1.png";
import about2 from "../../../assets/teethWhitening2.png";

const TeethWhitening: React.FC = () => {
  const mainContent = {
    title: "Otthoni Fogfehérítés",
    description: `Az otthoni fogfehérítés egy kényelmes módja annak, hogy saját otthonában érje el a kívánt fehérséget. Klinikánkon a következő lépések biztosítják, hogy a fehérítés hatékony és biztonságos legyen.`,
  };
  const subContetnt = [
    {
      title: "Lenyomat Készítése és Egyedi Sín Készítése",
      description: `Első lépésként fogorvosunk alaposan megvizsgálja fogait és szájüregét, majd lenyomatot készít a fogairól. Ezt a lenyomatot használjuk arra, hogy pontosan illeszkedő, egyedi fehérítő sínt készítsünk, amely optimális kontaktust biztosít a fehérítő anyag és a fogak között.`,
    },
    {
      title: "Sín Készítése",
      description: `A lenyomat alapján készítjük el az Ön számára egyedi fehérítő sínt, amely tökéletesen illeszkedik fogaihoz. Ez a személyre szabott sín biztosítja, hogy a fehérítő anyag egyenletesen és hatékonyan oszoljon el a fogak felszínén.`,
    },
    {
      title: "Fehérítő Anyag és Használati Utasítások",
      description: `Miután elkészült a sín, fogorvosunk átadja Önnek a fehérítő anyagot és részletes használati utasításokat. Bemutatjuk, hogyan kell alkalmazni a fehérítő gélt a síneken, és miként kell helyesen viselni a síneket. Fontos, hogy pontosan kövesse az utasításokat a legjobb eredmények érdekében.`,
    },
    {
      title: "Otthoni Használat",
      description: `Az otthoni fehérítés során alkalmazza a fehérítő gélt a sínek belsejébe, majd helyezze be a síneket a fogaira az ajánlott időtartamra. A kezelés során rendszeresen ellenőrizheti a fogak színének változását, és szükség esetén konzultálhat fogorvosával az eredmények optimalizálása érdekében.`,
    },
    {
      title: "Utókezelés és Eredmények Megőrzése",
      description: `A kezelés után fogorvosunk tanácsot ad arra vonatkozóan, hogyan tartsa fenn a fogak fehérségét, és hogyan ápolja fogait a további szuvasodások és elszíneződések elkerülése érdekében. A helyes utókezelés segít abban, hogy a fehérség hosszú távon megmaradjon.`,
    },
    {
      description: `Az otthoni fogfehérítés egy hatékony módja annak, hogy ragyogó mosolyt érjen el saját kényelmében, személyre szabott sínek és szakértői útmutatásunk révén. Kérjük, vegye igénybe szolgáltatásainkat, hogy Ön is élvezhesse a szép és fehér fogak előnyeit.`,
    },
  ];

  return (
    <ContentWrapper
      mainContent={mainContent}
      subContents={subContetnt}
      firstImage={about1}
      secondImage={about2}
    />
  );
};

export default TeethWhitening;

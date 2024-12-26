import React from "react";
import ContentWrapper from "../contentWrapper";
import about1 from "../../../assets/ToothExtraction1.png";
import about2 from "../../../assets/ToothExtraction2.png";

const ToothExtractionHu: React.FC = () => {
  const mainContent = {
    title: "Fájdalommentes Foghúzás Klinikánkon",
    description: `Klinikánkon a foghúzás során a legmodernebb technológiákat és módszereket alkalmazzuk, hogy a kezelés teljesen fájdalommentes legyen. Az alábbi lépések biztosítják a kényelmes és zökkenőmentes élményt:`,
  };
  const subContetnt = [
    {
      title: "Helyi Érzéstelenítés",
      description: `A foghúzás előtt helyi érzéstelenítőt alkalmazunk, amely teljesen blokkolja a fájdalomérzést a kezelési területen. Ezen kívül anesztetikus gélt használunk az érzéstelenítő injekció előtt, hogy az injekció beadása is minimális diszkomforttal járjon.`,
    },
    {
      title: "Kíméletes Technikák",
      description: `Tapasztalt szakembereink kíméletes technikákat alkalmaznak a fog eltávolítására, amelyek minimalizálják a fájdalmat és a szöveti traumát.`,
    },
    {
      title: "Utókezelés és Gondoskodás",
      description: `A foghúzást követően részletes utókezelési útmutatót adunk, amely segít a gyors felépülésben és a kellemetlenségek minimalizálásában.`,
    },
    {
      description: `Célunk, hogy a foghúzás folyamatát a lehető legkényelmesebb és legkisebb fájdalommal járó élménnyé tegyük. Bármilyen kérdése van, szakértőink készséggel állnak rendelkezésére.`,
    },
  ];

  return (
    <ContentWrapper
      mainContent={mainContent}
      subContents={subContetnt}
      firstImage={about1}
      secondImage={about2}
      moveSecondSubDown
    />
  );
};

export default ToothExtractionHu;

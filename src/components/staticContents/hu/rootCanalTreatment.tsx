import React from "react";
import ContentWrapper from "../contentWrapper";
import about1 from "../../../assets/about-1.jpg";
import about2 from "../../../assets/about-2.jpg";

const RootCanalTreatmentHu: React.FC = () => {
  const mainContent = {
    title: "Fájdalommentes és Modern Digitális Gyökérkezelés Klinikánkon",
    description: `Klinikánkon a gyökérkezelést a legújabb technológiával és fájdalommentes módszerekkel végezzük, hogy a lehető legkellemesebb élményt nyújtsuk Önnek.`,
  };
  const subContetnt = [
    {
      title: "Digitális Diagnózis",
      description: `Az első lépésben modern digitális röntgenberendezéseink segítségével pontosan diagnosztizáljuk a fog gyökérproblémáit. Ez a technológia lehetővé teszi a pontos képet és az optimális kezelési terv elkészítését.`,
    },
    {
      title: "Fájdalommentes Érzéstelenítés",
      description: `A gyökérkezelés előtt helyi érzéstelenítőt alkalmazunk, amely biztosítja, hogy a kezelés teljesen fájdalommentes legyen. Emellett anesztetikus gélt használunk az érzéstelenítő injekció előtt, így az injekció beadása is minimális diszkomforttal jár.`,
    },
    {
      title: "Modern Kezelési Technikák",
      description: `Az eljárást modern, digitális eszközökkel végezzük, amelyek pontosan és hatékonyan tisztítják meg a gyökércsatornákat. Az innovatív technológiáknak köszönhetően a kezelés gyorsabb, pontosabb és kényelmesebb.`,
    },
    {
      title: "Precíz Tömés",
      description: `A gyökérkezelés után a fogat gondosan tömjük és helyreállítjuk, hogy biztosítsuk a hosszú távú eredményeket és a természetes megjelenést. Ezekkel a modern és fájdalommentes módszerekkel klinikánkon a gyökérkezelés gyorsan, hatékonyan és kellemesen végezhető el.`,
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

export default RootCanalTreatmentHu;

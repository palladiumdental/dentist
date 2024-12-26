import React from "react";
import ContentWrapper from "../contentWrapper";
import about1 from "../../../assets/metalCeramicCrowns1.png";
import about2 from "../../../assets/metalCeramicCrowns2.png";

const MetalCeramicCrownsHu: React.FC = () => {
  const mainContent = {
    title: "Fémkerámia Korona",
    description: `A fémkerámia koronák tartós és esztétikus megoldást kínálnak a sérült vagy elszíneződött fogak helyreállítására. Ezek a koronák kiválóan kombinálják a fém erősségét és stabilitását a kerámia természetes megjelenésével, így a fogak hosszú távú védelmét és esztétikai helyreállítását biztosítják.`,
  };
  const subContetnt = [
    {
      title: "Mi az a Fémkerámia Korona?",
      description: `A fémkerámia korona egy olyan fogpótlás, amely egy belső fémvázból és arra égetett kerámia rétegből áll. A fém alap biztosítja a korona erősségét és tartósságát, míg a kerámia réteg esztétikai megjelenést nyújt, hasonlóan a természetes fogakhoz. Ezáltal a fémkerámia koronák ideálisak a frontális és hátsó fogak helyreállítására is.`,
    },
    {
      title: "Mikor ajánlott a Fémkerámia Korona?",
      description: (
        <div>
          <p>
            <b>Sérült vagy Nagyon Szuvas Fogak:</b> A koronák védelmet nyújtanak
            a sérült, töredezett vagy súlyosan szuvas fogak számára.
          </p>
          <p>
            <b>Nagy Kiterjedésű Tömés Pótlására:</b> Ha egy fog nagy kiterjedésű
            töméssel rendelkezik, amely már nem elég stabil, a korona tartós
            megoldást biztosít.
          </p>
          <p>
            <b>Gyökérkezelt Fogak:</b> Gyökérkezelést követően a fogak gyakran
            legyengülnek, ilyenkor a fémkerámia korona megvédi a fogat a további
            károsodástól.
          </p>
          <p>
            <b>Foghiány Pótlása:</b> Hidak készítésekor is alkalmazzák, mivel
            tartós és stabil alapot biztosít a pótlásnak.
          </p>
        </div>
      ),
    },
    {
      title: "Előnyei a Fémkerámia Koronának",
      description: (
        <div>
          <p>
            <b>Tartósság és Stabilitás:</b> A fémváz rendkívüli szilárdságot és
            tartósságot nyújt, amely akár hosszú évtizedeken át is szolgálhat.
          </p>
          <p>
            <b>Esztétikai Megjelenés:</b> A kerámia réteg természetes fogszínre
            színezhető, így a korona jól illeszkedik a meglévő fogak közé.
          </p>
          <p>
            <b>Kiváló Illeszkedés:</b> A koronák egyedileg készülnek a páciens
            fogainak pontos lenyomata alapján, így optimális illeszkedést és
            kényelmet biztosítanak.
          </p>
        </div>
      ),
    },
    {
      title: "Hogyan Készül a Fémkerámia Korona?",
      description: (
        <div>
          <p>
            <b>Fog Előkészítése:</b> A fogorvos előkészíti a sérült fogat,
            eltávolítva a károsodott részeket, majd megfelelő formára alakítja a
            korona felhelyezéséhez.
          </p>
          <p>
            <b>Lenyomatvétel:</b> Az előkészített fogról lenyomatot veszünk,
            amely alapján a fogtechnikus elkészíti az egyedi fémkerámia koronát.
          </p>
          <p>
            <b>Ideiglenes Korona:</b> A végleges korona elkészültéig ideiglenes
            koronát helyezünk fel, hogy a fog védve legyen.
          </p>
          <p>
            <b>Végleges Korona Felhelyezése:</b> Az elkészült fémkerámia koronát
            a fogorvos felpróbálja, majd ha minden illeszkedik, rögzíti a fogra
            speciális fogászati ragasztóval.
          </p>
        </div>
      ),
    },
    {
      title: "Hogyan Kell Ápolni a Fémkerámia Koronát?",
      description: `A fémkerámia koronák ápolása ugyanúgy történik, mint a természetes fogaké: rendszeres fogmosás, fogselyem használat és rendszeres fogorvosi ellenőrzések szükségesek a korona hosszú élettartamának biztosítása érdekében.`,
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

export default MetalCeramicCrownsHu;

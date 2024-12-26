import React from "react";
import ContentWrapper from "../contentWrapper";
import about1 from "../../../assets/zirconiumCrowns1.png";
import about2 from "../../../assets/zirconiumCrowns2.png";

const ZirconiumCrownsHu: React.FC = () => {
  const mainContent = {
    title: "Cirkon Korona",
    description: `A cirkon koronák a fogászatban elérhető legmodernebb és legesztétikusabb fogpótlási megoldások közé tartoznak. Ezek a koronák kiváló tulajdonságaik révén egyre népszerűbbé válnak pácienseink körében, mivel ötvözik a természetes megjelenést, a kiváló tartósságot és a biokompatibilitást.`,
  };
  const subContetnt = [
    {
      title: "Mi az a Cirkon Korona?",
      description: `A cirkon koronák cirkónium-dioxidból készülnek, egy rendkívül erős és tartós anyagból, amely fogszínű, így tökéletesen utánozza a természetes fogak színét és átlátszóságát. Mivel fémmentesek, teljesen hipoallergének és ideálisak azok számára, akik fémallergiával küzdenek, vagy akik esztétikus megoldást keresnek a fogpótlásra.`,
    },
    {
      title: "Mikor Ajánlott a Cirkon Korona?",
      description: (
        <div>
          <p>
            <b>Sérült vagy Szuvas Fogak:</b> A cirkon koronák tökéletesen
            alkalmasak a törött, elszíneződött vagy súlyosan szuvas fogak
            helyreállítására.
          </p>
          <p>
            <b>Gyökérkezelt Fogak:</b> A gyökérkezelt fogak megerősítésére és
            védelmére is ideális megoldást nyújtanak.
          </p>
          <p>
            <b>Esztétikai Fogpótlás:</b> A frontfogak helyreállításakor, ahol a
            természetes megjelenés kulcsfontosságú, a cirkon koronák a legjobb
            választást jelentik.
          </p>
          <p>
            <b>Foghiány Pótlása:</b> Hidak készítésekor is használhatók, mivel
            megfelelő stabilitást és tartósságot biztosítanak.
          </p>
        </div>
      ),
    },
    {
      title: "A Cirkon Korona Előnyei",
      description: (
        <div>
          <p>
            <b>Természetes Megjelenés:</b> A cirkon anyaga színében és
            áttetszőségében is tökéletesen hasonlít a természetes fogakhoz, így
            a korona szinte észrevétlen marad.
          </p>
          <p>
            <b>Fémmentesség:</b> Mivel a cirkon koronák teljesen fémmentesek,
            nem okoznak allergiás reakciókat, és különösen alkalmasak
            fémérzékeny páciensek számára.
          </p>
          <p>
            <b>Kiemelkedő Tartósság:</b> A cirkon rendkívül erős anyag, amely
            ellenáll a rágóerőnek, így hosszú távon is tartós megoldást nyújt.
          </p>
          <p>
            <b>Biokompatibilitás:</b> A cirkon biokompatibilis anyag, ami azt
            jelenti, hogy jól tolerálja a szervezet, és nem okoz irritációt vagy
            gyulladást az ínyben.
          </p>
          <p>
            <b>Nincs Sötét Szél:</b> A fémkerámia koronákkal ellentétben a
            cirkon koronák esetében nincs sötét perem az íny mentén, ami
            különösen fontos az esztétikai szempontból érzékeny frontfogak
            esetében.
          </p>
        </div>
      ),
    },
    {
      title: "Hogyan Készül a Cirkon Korona?",
      description: (
        <div>
          <p>
            <b>Fog Előkészítése:</b> A fogat előkészítjük, hogy megfelelő formát
            kapjon a korona felhelyezéséhez.
          </p>
          <p>
            <b>Digitális Lenyomatvétel:</b> A fogorvos digitális lenyomatot
            készít az előkészített fogról, amely alapján a fogtechnikus
            elkészíti a koronát.
          </p>
          <p>
            <b>Ideiglenes Korona:</b> Az elkészült végleges korona felhelyezése
            előtt ideiglenes koronát helyezünk fel a fog védelmére.
          </p>
          <p>
            <b>Végleges Korona Felhelyezése:</b> Miután a cirkon korona
            elkészült, a fogorvos próba után speciális ragasztóval rögzíti azt a
            fogra.
          </p>
        </div>
      ),
    },
    {
      title: "Ápolás és Karbantartás",
      description: `A cirkon koronák ápolása megegyezik a természetes fogakéval: rendszeres fogmosás, fogselyem használat és rendszeres fogorvosi ellenőrzések szükségesek a korona élettartamának megőrzéséhez.`,
    },
    {
      description: (
        <b>Válassza a Cirkon Koronát a Természetes és Tartós Fogpótlásért!</b>
      ),
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

export default ZirconiumCrownsHu;

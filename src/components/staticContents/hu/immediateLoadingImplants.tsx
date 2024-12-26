import React from "react";
import ContentWrapper from "../contentWrapper";
import about1 from "../../../assets/about-1.jpg";
import about2 from "../../../assets/about-2.jpg";

const ImmediateLoadingImplantsHu: React.FC = () => {
  const mainContent = {
    title: "Azonnal Terhelhető Implantátumok",
    description: `Az azonnal terhelhető implantátumok (immediate loading implantátumok) egy modern fogászati eljárást jelentenek, amely lehetővé teszi, hogy a fogimplantátum behelyezése után azonnal ideiglenes fogpótlást kapjon a páciens. Ezáltal a kezelés során nincs szükség hosszú várakozási időre, és a páciens azonnal élvezheti a helyreállított rágási funkciót és a természetes mosoly esztétikai megjelenését.`,
  };
  const subContetnt = [
    {
      title: "Mi az azonnal terhelhető implantátum?",
      description: `Az azonnal terhelhető implantátum olyan fogászati implantátum, amelyet közvetlenül a behelyezés után terhelni lehet, vagyis egy ideiglenes korona vagy híd azonnal felhelyezhető rá. Ez az eljárás lerövidíti a gyógyulási időszakot, és azonnali eredményt biztosít.`,
    },
    {
      title: "Mikor javasolt az azonnal terhelhető implantátum?",
      description: (
        <div>
          <p>
            <b>Egy vagy több fog elvesztése esetén:</b> Az azonnal terhelhető
            implantátumok ideálisak azok számára, akik egy vagy több fogat
            vesztettek el, és gyors helyreállítást szeretnének.
          </p>
          <p>
            <b>Teljes fogsor pótlása:</b> A "teljes íves" vagy "All-on-4"
            technika segítségével egy teljes fogsort is vissza lehet állítani
            azonnal terhelhető implantátumokkal.
          </p>
        </div>
      ),
    },
    {
      title: "Az azonnal terhelhető implantátum előnyei:",
      description: (
        <div>
          <p>
            <b>Gyors eredmény:</b> Az implantátum behelyezésének napján már
            ideiglenes fogpótlás kerül felhelyezésre, így a páciens nem marad
            fogak nélkül a gyógyulás alatt.
          </p>
          <p>
            <b>Kevesebb műtét:</b> Az eljárás egyesíti az implantációt és a
            fogpótlás felhelyezését, így kevesebb fogászati beavatkozásra van
            szükség.
          </p>
          <p>
            <b>Rövidebb gyógyulási idő:</b> Az azonnal terhelhető implantátumok
            rövidebb gyógyulási időt kínálnak, mivel a terhelés stimulálja a
            csontot, elősegítve a gyorsabb csontosodást.
          </p>
          <p>
            <b>Magas esztétikai eredmény:</b> Azonnali fogpótlás révén a páciens
            már az első naptól természetes mosolyt élvezhet.
          </p>
        </div>
      ),
    },
    {
      title: "Hogyan zajlik az azonnal terhelhető implantátum beültetése?",
      description: (
        <div>
          <p>
            <b>Konzultáció és Tervezés:</b> A fogorvos alapos vizsgálatot végez,
            beleértve a röntgen- és CT-felvételeket, hogy felmérje a csont
            minőségét és mennyiségét, és megtervezze az implantációt.
          </p>
          <p>
            <b>Implantátum Behelyezése:</b> A megfelelő helyre és mélységbe
            behelyezik az implantátumot, amely biztosítja a stabilitást az
            azonnali terheléshez.
          </p>
          <p>
            <b>Ideiglenes Fogpótlás Felhelyezése:</b> Az implantátum behelyezése
            után azonnal ideiglenes koronát vagy hidat helyezünk fel, amely
            visszaállítja a páciens mosolyát és rágási funkcióját.
          </p>
          <p>
            <b>Gyógyulás és Végleges Pótlás:</b> A gyógyulási idő alatt az
            implantátum integrálódik a csonttal. Miután az implantátum teljesen
            stabilizálódott, a végleges fogpótlást helyezzük fel.
          </p>
        </div>
      ),
    },
    {
      title: "Ápolás és karbantartás",
      description: `Az implantátumok hosszú élettartama érdekében fontos a megfelelő szájhigiénia fenntartása, rendszeres fogmosás és fogselyem használat, valamint a rendszeres fogorvosi ellenőrzések.`,
    },
    {
      description: (
        <b>
          Válassza az Azonnal Terhelhető Implantátumokat a Gyors és Hatékony
          Fogpótlásért!
        </b>
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

export default ImmediateLoadingImplantsHu;

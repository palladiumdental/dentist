import React from "react";
import ContentWrapper from "../contentWrapper";
import about1 from "../../../assets/pediatricDentistry1.png";
import about2 from "../../../assets/pediatricDentistry2.png";

const PediatricDentistryHu: React.FC = () => {
  const mainContent = {
    title: "Gyermekfogászat",
    description: `Klinikánkon a gyermekfogászat kiemelt szerepet kap, mivel a gyermekek szájhigiéniája és fogainak egészsége különös figyelmet igényel. Szakértő csapatunk barátságos és támogató környezetet biztosít, hogy a gyermekek fogászati kezelései zökkenőmentesek és kellemesek legyenek.`,
  };
  const subContetnt = [
    {
      title: "Szolgáltatásaink a gyermekfogászat terén",
      description: (
        <div>
          <p>
            <b>Kezdő Fogászati Vizsgálatok:</b> Az első fogak megjelenésétől
            kezdve rendszeres vizsgálatokat végzünk, hogy nyomon követhessük a
            gyermekek fogainak fejlődését és időben észlelhessük az esetleges
            problémákat.
          </p>
          <p>
            <b>Prevenciós Tanácsadás és Barázdazárás:</b> Oktatjuk a gyermekeket
            és szüleiket a helyes fogápolási technikákról, a megfelelő
            táplálkozásról és arról, hogyan előzhetők meg a fogszuvasodások és a
            fogínysorvadás.
          </p>
          <p>
            <b>Fogtisztítás és Fluoridkezelés:</b> Rendszeres fogtisztítást
            végzünk, amely eltávolítja a lepedéket és a fogkövet, valamint
            fluoridkezeléssel erősítjük a fogzománcot, hogy védjük a fogakat a
            szuvasodástól.
          </p>
          <p>
            <b>Tömés és Fogpótlás:</b> Ha a gyermek fogai szuvasodnak vagy
            sérülnek, modern és esztétikus tömőanyagokkal végezzük el a
            szükséges kezeléseket, hogy a fogak funkcióját és megjelenését
            helyreállítsuk.
          </p>
          <p>
            Célunk, hogy gyermekei számára a fogászati kezelések pozitív
            élményeket jelentsenek, és hozzájáruljunk egészséges mosolyuk
            fejlődéséhez. Szakértőink gondoskodnak arról, hogy a legjobban
            érezzék magukat minden egyes látogatás alkalmával.
          </p>
        </div>
      ),
    },
    {
      title: "Barázdazárás",
      description: `A barázdazárás egy hatékony megelőző fogászati eljárás, amelynek célja a fogak rágófelszíneinek védelme a szuvasodástól. Ez különösen fontos a gyermekek és serdülők esetében, mivel a hátsó fogak barázdái gyakran nehezen hozzáférhetőek és hajlamosak a plakk és a fogkő felhalmozódására.`,
    },
    {
      title: "A barázdazárás folyamata és előnyei",
      description: (
        <div>
          <p>
            <b>Előkészítés:</b> Az eljárás előtt a fogak alapos tisztítása
            történik. A barázdák és a fogfelszínek előkészítése érdekében
            eltávolítjuk a plakkot és az esetleges fogkövet.
          </p>
          <p>
            <b>Fissúra Tisztítása:</b> A barázdák és mélyedések alaposan
            megtisztításra kerülnek, hogy biztosítsuk a záróanyag megfelelő
            tapadását.
          </p>
          <p>
            <b>Záróanyag Alkalmazása:</b> Az alkalmazott anyag, amely általában
            folyékony műgyanta, a fog barázdáiba kerül. Az anyag szilárdulás
            után vékony, védő réteget képez, amely megakadályozza a baktériumok
            és ételmaradékok bejutását a mélyedésekbe.
          </p>
          <p>
            <b>Kötés és Ellenőrzés:</b> A záróanyagot speciális UV fény
            segítségével megszilárdítjuk. Ezután a fog felszínét ellenőrizzük,
            hogy a barázdazárás teljesen megfelelően illeszkedik-e és nincs-e
            szükség további korrekciókra.
          </p>
        </div>
      ),
    },
    {
      title: "Előnyök",
      description: (
        <div>
          <p>
            <b>Megakadályozza a Szuvasodást:</b> A barázdazárás védi a mély
            barázdákat a baktériumoktól és az ételmaradékoktól, így jelentősen
            csökkenti a szuvasodás kockázatát.
          </p>
          <p>
            <b>Hosszú Távú Védelem:</b> A záróanyag tartós védelmet nyújt, amely
            segít megőrizni a fogak egészségét.
          </p>
          <p>
            <b>Gyors és Fájdalommentes:</b> Az eljárás gyorsan elvégezhető és
            nem igényel érzéstelenítést, így kényelmes megoldást kínál minden
            korosztály számára.
          </p>
        </div>
      ),
    },
    {
      description: `A barázdazárás egy egyszerű és hatékony módja annak, hogy megóvja a gyermekek és felnőttek hátsó fogait a szuvasodástól, hozzájárulva a hosszú távú szájhigiénia megőrzéséhez.`,
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

export default PediatricDentistryHu;

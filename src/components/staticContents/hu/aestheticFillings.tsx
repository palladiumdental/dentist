import React from "react";
import ContentWrapper from "../contentWrapper";
import about1 from "../../../assets/aestheticFillings1.png";
import about2 from "../../../assets/aestheticFillings2.png";

const AestheticFillingsHu: React.FC = () => {
  const mainContent = {
    title: "Esztétikus tömések",
  };
  const subContetnt = [
    {
      title: "Mikor van szükség fogtömésre?",
      description: (
        <div>
          <p>
            A fogtömés akkor válik szükségessé, ha a fogakban szuvasodás vagy
            más típusú sérülés alakul ki, amely rontja a fog egészségét és
            funkcióját. Az alábbi esetekben lehet szüksége fogtömésre:
          </p>
          <ul>
            <li>
              <strong>Szuvasodás:</strong> Amikor a fogzománc sérül a
              baktériumok miatt, és üregek alakulnak ki a fogban.
            </li>
            <li>
              <strong>Repedések vagy törések:</strong> Ha a fogban repedés vagy
              törés keletkezik, amelyet helyre kell állítani.
            </li>
            <li>
              <strong>Kopás:</strong> Amikor a fogak a rágás, szorítás vagy
              fogcsikorgatás következtében elhasználódnak.
            </li>
            <li>
              <strong>Régi tömés cseréje:</strong> Ha a meglévő tömés
              elhasználódott, repedezett vagy kiesett, új tömésre van szükség.
            </li>
          </ul>
          <p>
            Klinikánkon gondoskodunk arról, hogy minden páciensünk a megfelelő
            kezelést kapja, amely megőrzi fogainak egészségét és szépségét.
          </p>
        </div>
      ),
    },
    {
      title: "Mi az esztétikus fogtömés?",
      description: (
        <div>
          <p>
            Az esztétikus fogtömés egy olyan speciális eljárás, amelynek során a
            fogak helyreállításához olyan anyagokat használunk, amelyek színben
            és textúrában tökéletesen illeszkednek a természetes fogakhoz.
            Ezáltal a tömés szinte láthatatlan marad, és az eredmény
            esztétikailag kellemes, természetes megjelenést biztosít.
          </p>
          <p>
            Az esztétikus tömőanyagok, mint például a kompozit gyanta, lehetővé
            teszik, hogy a fog eredeti formáját és színét pontosan
            rekonstruáljuk. Ezzel a módszerrel nemcsak a fogak egészségét
            állítjuk helyre, hanem a mosoly szépségét is megőrizzük.
          </p>
        </div>
      ),
    },
    {
      title: "Mi az inlay és onlay, és mikor alkalmazzuk őket?",
      description: (
        <div>
          <p>
            Az inlay és onlay olyan speciális fogpótlások, amelyek a szuvasodott
            vagy sérült fogak helyreállítására szolgálnak, ha a hagyományos
            tömés már nem elegendő, de a korona alkalmazása még nem szükséges.
            Ezek a betétek rendkívül pontosan illeszkednek a fogba, és hosszú
            távú megoldást nyújtanak.
          </p>
          <p>
            <b>Inlay:</b> Az inlay a fog belső részébe kerül, és akkor
            alkalmazzuk, ha a fog felszínének kisebb része károsodott, de a fog
            oldalfalai épek maradtak. Ez a betét segít megőrizni a fog
            szerkezetét és helyreállítja a rágófelületet.
          </p>
          <p>
            <b>Onlay:</b> Az onlay hasonló az inlay-hez, de nagyobb kiterjedésű,
            és a fog egyik vagy több csücske is érintett lehet. Az onlay-t akkor
            használjuk, ha a fog nagyobb része sérült, és szükséges a fog felső
            részének megerősítése is.
          </p>
          <p>
            Mindkét eljárásMcélja a fog természetes megjelenésének és
            funkciójának helyreállítása, miközben megőrzi a lehető legtöbb ép
            foganyagot. Az inlay és onlay általában porcelánból vagy kompozit
            anyagból készül, amelyek erősek, tartósak és esztétikailag is
            kielégítőek.
          </p>
        </div>
      ),
    },
    {
      title: "Miért kell cserélni az amalgám fogtömést?",
      description: (
        <div>
          <p>
            Az amalgám fogtöméseket, amelyeket gyakran "ezüst töméseknek" is
            neveznek, több okból is szükséges lehet cserélni vagy felújítani:
          </p>
          <p>
            <b>Kopás és elhasználódás:</b> Az idő múlásával az amalgám tömések
            megrepedezhetnek vagy elhasználódhatnak, ami csökkentheti
            hatékonyságukat. Ez növelheti a fogszuvasodás kockázatát.
          </p>
          <p>
            <b>Szuvasodás és szivárgás:</b> Az amalgám tömések körül is
            kialakulhat szuvasodás, ha a tömés és a fog közötti tömítés
            meggyengül. Ilyenkor a tömés cseréje szükséges lehet a fog
            egészségének megőrzése érdekében.
          </p>
          <p>
            <b>Repedések a fogban:</b> Az amalgám tömések a hőmérséklet
            változásaira tágulással és zsugorodással reagálnak, ami idővel
            repedésekhez vezethet a fogban. Ezek a repedések gyengíthetik a fog
            szerkezetét.
          </p>
          <p>
            <b>Esztétikai megfontolások:</b> Sokan szeretnék lecserélni az
            amalgám töméseket esztétikusabb, fogszínű kompozit tömésekre,
            amelyek természetesebb megjelenést biztosítanak.
          </p>
          <p>
            <b>Fémérzékenység:</b> Bár ritka, előfordulhat, hogy valaki érzékeny
            az amalgám tömésben található fémekre. Ilyen esetekben a tömés
            cseréje szükségessé válhat.
          </p>
          <p>
            <b>Modern fogászati anyagok:</b> A korszerű tömőanyagok jobban
            illeszkednek a fogakhoz, kevésbé hajlamosak a szivárgásra, és
            esztétikailag is előnyösebbek, ezért sokan választják a cserét.
          </p>
        </div>
      ),
    },
    {
      title: "Hogyan végezzük el az esztétikus fogtömést klinikánkon?",
      description: (
        <div>
          <p>
            Az esztétikus fogtömés során a legnagyobb figyelmet fordítjuk a
            kényelmére. Az eljárás a következő lépésekből áll:
          </p>
          <p>
            <b>Helyi érzéstelenítés:</b> A kezelés előtt helyi érzéstelenítőt
            alkalmazunk, hogy a fog kezelése teljesen fájdalommentes legyen.
          </p>
          <p>
            <b>Anesztetikus gél használata:</b> Az érzéstelenítő injekció előtt
            anesztetikus gélt alkalmazunk, amely minimalizálja az injekciós tű
            érzését, így a kezelés még kényelmesebb.
          </p>
          <p>
            <b>Tömés behelyezése:</b> A fogat előkészítjük és az esztétikus
            tömőanyagot precízen behelyezzük, hogy a végeredmény természetes
            megjelenésű és tartós legyen.
          </p>
        </div>
      ),
    },
    {
      description: (
        <p>
          Ezek a lépések biztosítják, hogy az esztétikus tömés gyors, kényelmes
          és teljesen fájdalommentes élmény legyen.
        </p>
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

export default AestheticFillingsHu;

import React from "react";
import ContentWrapper from "../contentWrapper";
import about1 from "../../../assets/about-1.jpg";
import about2 from "../../../assets/about-2.jpg";

const TeethCleaningAndTartarRemovalHu: React.FC = () => {
  const mainContent = {
    title: "Fogtisztítás és Fogkőeltávolítás",
    description: (
      <div>
        <p>
          Klinikánkon a fogtisztítás és fogkőeltávolítás során a legmodernebb
          technikákat alkalmazzuk, hogy biztosítsuk a szájhigiénia és a fogak
          egészségének megőrzését. Szolgáltatásaink a következőket tartalmazzák:
        </p>
        <p>
          <b>Fogkőeltávolítás:</b> A fogkő eltávolítása során professzionális
          eszközökkel és technikákkal távolítjuk el a fogakról a felhalmozódott
          fogkövet és plakettet, amely segít megelőzni a fogínybetegségeket és a
          szuvasodást.
        </p>
        <p>
          <b>Mélytisztítás (Deep Scaling):</b> A mélytisztítás során a fogak és
          íny közötti területeken felhalmozódott fogkövet és plakkot távolítjuk
          el, különösen a fogak gyökerei közelében. Ez a kezelés segít megelőzni
          és kezelni a fogínysorvadást.
        </p>
        <p>
          <b>Gyökérköszörülés (Root Planing):</b> A gyökérköszörülés során a
          foggyökereket alaposan letisztítjuk, eltávolítva a baktériumokat és a
          fogkő nyomait. Ez a folyamat segít az íny visszaépülésében és a fogak
          stabilitásának megőrzésében.
        </p>
        <p>
          <b>Mélykúra (Deep Curettage):</b> A mélykúra során a fogíny alatti
          területeket tisztítjuk meg alaposan, eltávolítva a mélyebb üregekben
          felhalmozódott baktériumokat és gyulladt szöveteket. Ez a kezelés
          segít az ínygyulladás kezelésében és a fogíny állapotának javításában.
        </p>
        <p>
          <b>Általános Fogtisztítás:</b> Rendszeres fogtisztítással megőrizzük a
          fogak és ínyek egészségét, eltávolítjuk a lepedéket és frissítjük a
          szájüreg állapotát.
        </p>
        <p>
          Ezek a kezelések hozzájárulnak a fogak és ínyek egészségének
          fenntartásához, segítve a szájhigiénia javítását és a fogbetegségek
          megelőzését.
        </p>
      </div>
    ),
  };
  const subContetnt = [
    {
      title: "Milyen gyakran érdemes fogtisztításra járni?",
      description: (
        <div>
          <p>
            A rendszeres fogtisztítás elengedhetetlen a szájhigiénia
            fenntartásához és a fogak egészségének megőrzéséhez. Ajánlott, hogy
            pácienseink évente két alkalommal látogassanak el klinikánkra
            fogtisztításra, hogy megelőzzük a fogkő és plakk felhalmozódását, és
            kezeljük a korai jeleket, amelyek fogínybetegségekhez vezethetnek.
          </p>
          <p>Ezek a rendszeres látogatások segítenek:</p>
          <p>
            <b>A fogkő és plakk eltávolításában:</b> Még a legprecízebb otthoni
            fogápolás mellett is képződhet fogkő, amelyet csak professzionális
            tisztítással lehet eltávolítani.
          </p>
          <p>
            <b>A szájüreg egészségének ellenőrzésében:</b> A fogorvos szakmai
            szemmel ellenőrzi a szájüreg állapotát, és időben észlelheti a
            problémákat, mint például a fogínysorvadást vagy a szuvasodást.
          </p>
          <p>
            <b>A megelőzésben:</b> A rendszeres tisztítás segít megelőzni a
            fogínybetegségeket és a fogak szuvasodását, hozzájárulva a hosszú
            távú szájhigiéniai egészséghez.
          </p>
          <p>
            Ha Ön hajlamosabb a fogkő képződésére vagy már meglévő szájüregi
            problémákkal küzd, orvosa javasolhat gyakori látogatásokat is.
            Minden esetben a személyre szabott tanácsokért kérjük, forduljon
            fogorvosához.
          </p>
        </div>
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

export default TeethCleaningAndTartarRemovalHu;

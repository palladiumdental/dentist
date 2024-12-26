import React from "react";
import ContentWrapper from "../contentWrapper";
import about1 from "../../../assets/removableDentures1.png";
import about2 from "../../../assets/removableDentures2.png";

const RemovableDenturesHu: React.FC = () => {
  const mainContent = {
    title: "Kivehető Fogpótlások (Protézisek)",
    description: `A kivehető fogpótlások – más néven protézisek – kiváló megoldást kínálnak a részleges vagy teljes foghiány helyreállítására. Ezek a fogpótlások kényelmesen eltávolíthatók és tisztíthatók, miközben visszaállítják a rágási funkciót és a természetes mosoly megjelenését.`,
  };
  const subContetnt = [
    {
      title: "Mi az a Kivehető Protézis?",
      description: (
        <div>
          <p>
            A kivehető protézisek olyan fogpótlások, amelyeket a páciens saját
            maga is eltávolíthat és visszahelyezhet. Két fő típusa van:
          </p>
          <p>
            <b>Részleges Protézis:</b> Akkor alkalmazzuk, ha a páciensnek néhány
            foga hiányzik. A részleges protézis rögzül a meglévő fogakhoz, és
            pótlólagos fogakat tartalmaz, amelyek helyreállítják a fogsor
            teljességét.
          </p>
          <p>
            <b>Teljes Protézis:</b> Teljes foghiány esetén készítünk teljes
            protézist, amely a teljes fogsort pótolja, mind a felső, mind az
            alsó állkapocson.
          </p>
        </div>
      ),
    },
    {
      title: "Mikor Javasolt a Kivehető Protézis?",
      description: (
        <div>
          <p>
            <b>Több Fog Hiánya Esetén:</b> Részleges protézist ajánlunk, ha több
            fog hiányzik, és a foghíd vagy implantátum nem lehetséges megoldás.
          </p>
          <p>
            <b>Teljes Foghiány Esetén:</b> Teljes protézis akkor ajánlott, ha a
            páciensnek az összes foga hiányzik egy adott állkapcson.
          </p>
          <p>
            <b>Ideiglenes Megoldásként:</b> A kivehető protézisek ideiglenes
            megoldásként is szolgálhatnak a végleges fogpótlás elkészültéig.
          </p>
        </div>
      ),
    },
    {
      title: "A Kivehető Protézisek Előnyei",
      description: (
        <div>
          <p>
            <b>Könnyen Eltávolíthatók:</b> A protézisek könnyen eltávolíthatók
            tisztítás és karbantartás céljából, ami segíti a szájhigiéniát.
          </p>
          <p>
            <b>Költséghatékony:</b> A kivehető fogpótlások általában
            megfizethetőbbek, mint az implantátumok vagy a rögzített
            fogpótlások.
          </p>
          <p>
            <b>Gyors Elkészítés:</b> A protézisek viszonylag gyorsan
            elkészíthetők, így rövid időn belül visszaállítható a fogak
            funkciója és esztétikája.
          </p>
          <p>
            <b>Javítja a Rágási Funkciót és a Beszédet:</b> A protézisek
            visszaállítják a megfelelő rágási funkciót és javítják a beszéd
            tisztaságát.
          </p>
        </div>
      ),
    },
    {
      title: "Hogyan Készül a Kivehető Protézis?",
      description: (
        <div>
          <p>
            <b>Konzultáció és Vizsgálat:</b> Az első lépés egy alapos vizsgálat
            és konzultáció, ahol a fogorvos felméri a fogak állapotát és a
            protézis igényét.
          </p>
          <p>
            <b>Lenyomatvétel:</b> A fogorvos lenyomatot vesz az ínyről és az
            állkapocsról, amely alapján a fogtechnikus elkészíti a protézist.
          </p>
          <p>
            <b>Próba és Illesztés:</b> A készülő protézist többször is próba alá
            vetjük, hogy biztosítsuk a megfelelő illeszkedést és kényelmet.
          </p>
          <p>
            <b>Véglegesítés és Behelyezés:</b> A végleges protézis behelyezésre
            kerül, és a páciens megkapja az ápolási és karbantartási
            utasításokat.
          </p>
        </div>
      ),
    },
    {
      title: "Gondozás és Karbantartás",
      description: `A kivehető protézisek megfelelő gondozása elengedhetetlen a hosszú élettartam és a száj egészségének megőrzése érdekében. A protéziseket naponta tisztítani kell, és éjszakára általában ajánlott vízben vagy speciális ápolóoldatban tárolni őket.`,
    },
    {
      description: (
        <b>
          Válassza a Kivehető Protézist a Kényelmes és Megfizethető
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
      moveSecondSubDown={true}
    />
  );
};

export default RemovableDenturesHu;

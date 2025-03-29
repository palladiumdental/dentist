import React from "react";
import ContentWrapper from "../contentWrapper";
import about1 from "../../../assets/invisibleAligner1.png";
import about2 from "../../../assets/invisibleAligner2.png";

const InvisibleAlignerHu: React.FC = () => {
  const mainContent = {
    title: "Láthatatlan fogszabályzás Kezelések (K-Aligners)",
    description: "",
  };
  const subContetnt = [
    {
      title: "Láthatatlanság",
      description: `Az egyik legnagyobb előnye a clear alignernek az, hogy rendkívül átlátszó és alig észrevehető. Azoknak, akik nem szeretnék a fogszabályozót feltűnően viselni, ez a lehetőség ideális, fiatalok és a felnőttek számára egyaránt.`,
    },
    {
      title: "Kivehető",
      description:
        "Az Aligner fogszabályozó könnyen eltávolítható, ami rendkívül praktikussá teszi az étkezések és tisztítás során. Fontos eseményekre, fotózásokra vagy különleges alkalmakra egyszerűen kivehető, így nem korlátozza az életstílust.",
    },
    {
      title: "Kevesebb rendelői látogatás",
      description:
        " A kezelés megtervezése után a páciensek gyakran kevesebb rendelői látogatást igényelnek, mivel a clear aligner rendszeresen otthon is használható, és a fogorvos időszakonként csak ellenőrzi az előrehaladást.",
    },
    {
      title: "Hatékonyság",
      description:
        "A clear aligner olyan precíziós technológiával készül, amely segít a fogak fokozatos és hatékony mozgatásában, így elősegítve az optimális esztétikai eredményeket.",
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

export default InvisibleAlignerHu;

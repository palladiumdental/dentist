import React from "react";
import ContentWrapper from "./contentWrapper";
import about1 from "../../assets/about-1.jpg";
import about2 from "../../assets/about-2.jpg";

const TeethWhitening: React.FC = () => {
  const mainContent = {
    title: "Teeth Whitening",
    description: `At-home teeth whitening is a convenient way to achieve your
                  desired whiteness in the comfort of your own home. Our clinic
                  follows these steps to ensure that the whitening process is
                  both effective and safe:`,
  };
  const subContetnt = [
    {
      title: "1. Impression Taking and Custom Tray Preparation",
      description: `As the first step, our dentist thoroughly examines your teeth
                  and oral cavity, then takes an impression of your teeth. This
                  impression is used to create a precisely fitting, custom
                  whitening tray that ensures optimal contact between the
                  whitening agent and your teeth.`,
    },
    {
      title: "2. Tray Preparation",
      description: `Based on the impression, we create a custom whitening tray
                  that fits your teeth perfectly. This personalized tray ensures
                  the even and effective distribution of the whitening gel over
                  the surface of your teeth.`,
    },
    {
      title: "3. Whitening Agent and Usage Instructions",
      description: `Once the tray is ready, our dentist provides you with the
                  whitening agent and detailed instructions for use. We
                  demonstrate how to apply the whitening gel to the trays and
                  how to wear them correctly. It is important to follow the
                  instructions precisely to achieve the best results.`,
    },
    {
      title: "4. At-Home Use",
      description: `During at-home whitening, apply the whitening gel to the inside
                of the trays, then insert the trays over your teeth for the
                recommended duration. Throughout the treatment, you can
                regularly check the color changes in your teeth and consult your
                dentist as needed to optimize the results.`,
    },
    {
      title: "5. Aftercare and Maintaining Results",
      description: `After the treatment, our dentist provides advice on how to
                maintain the whiteness of your teeth and how to care for them to
                prevent further decay and discoloration. Proper aftercare helps
                preserve the whitening results in the long term.`,
    },
    {
      description: `At-home teeth whitening is an effective way to achieve a radiant
                smile in the comfort of your own home, with custom trays and
                expert guidance from our clinic. Please take advantage of our
                services to enjoy the benefits of beautiful and white teeth.`,
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

export default TeethWhitening;

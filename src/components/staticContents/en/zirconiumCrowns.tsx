import React from "react";
import ContentWrapper from "../contentWrapper";
import about1 from "../../../assets/about-1.jpg";
import about2 from "../../../assets/about-2.jpg";

const ZirconiumCrownsEn: React.FC = () => {
  const mainContent = {
    title: "Zirconium Crowns",
    description: `Zirconium crowns are a modern dental restoration option known for their exceptional strength, durability, and natural appearance. Made from high-quality zirconium dioxide, these crowns offer a superior alternative to traditional metal-based crowns and are ideal for both front and back teeth.`,
  };
  const subContetnt = [
    {
      title: "What Are Zirconium Crowns?",
      description: `Zirconium crowns are dental crowns crafted from zirconium dioxide, a type of ceramic material. This material is highly biocompatible and provides a strong, long-lasting restoration. Zirconium crowns are designed to blend seamlessly with your natural teeth, offering both aesthetic and functional benefits.`,
    },
    {
      title: "Benefits of Zirconium Crowns",
      description: (
        <div>
          <p>
            <b>Strength and Durability:</b> Zirconium is known for its
            remarkable strength, making these crowns highly resistant to wear
            and breakage. This makes them suitable for restoring teeth that
            endure significant pressure from chewing.
          </p>
          <p>
            <b>Natural Appearance:</b> Zirconium crowns have a translucent
            quality that mimics the look of natural teeth, providing a beautiful
            and natural smile. They are especially ideal for front teeth where
            appearance is crucial.
          </p>
          <p>
            <b>Biocompatibility:</b> Zirconium is a biocompatible material,
            which means it is less likely to cause allergic reactions or
            irritate the surrounding gum tissue.
          </p>
          <p>
            <b>Minimal Tooth Reduction:</b> The strength of zirconium allows for
            thinner crowns, requiring less reduction of the natural tooth
            structure compared to some other types of crowns.
          </p>
        </div>
      ),
    },
    {
      title: "The Process of Getting a Zirconium Crown",
      description: (
        <div>
          <p>
            <b>Initial Consultation:</b> Your dentist will assess your tooth and
            discuss the benefits of zirconium crowns, as well as determine if
            they are the right option for you.
          </p>
          <p>
            <b>Tooth Preparation:</b> The affected tooth is prepared by removing
            any damaged or decayed portions and reshaping it to fit the crown.
            An impression of the tooth is taken to create a custom crown.
          </p>
          <p>
            <b>Temporary Crown:</b> A temporary crown may be placed to protect
            the prepared tooth while the permanent zirconium crown is being
            made.
          </p>
          <p>
            <b>Crown Fabrication:</b> The zirconium crown is custom-made in a
            dental laboratory. The material is crafted into a precise fit,
            ensuring both strength and a natural look.
          </p>
          <p>
            <b>Placement:</b> Once the zirconium crown is ready, it is securely
            placed on the prepared tooth. The dentist will check the fit and
            make any necessary adjustments to ensure comfort and proper bite.
          </p>
        </div>
      ),
    },
    {
      title: "Caring for Zirconium Crowns",
      description: (
        <div>
          <p>
            <b>Good Oral Hygiene:</b> Brush and floss regularly to keep the
            crown and surrounding teeth clean and free from plaque.
          </p>
          <p>
            <b>Avoid Excessive Pressure:</b> While zirconium crowns are very
            durable, avoid chewing on hard objects or foods that could damage
            the crown or the underlying tooth.
          </p>
          <p>
            <b>Regular Check-Ups:</b> Schedule routine dental visits to monitor
            the condition of your crown and overall oral health.
          </p>
        </div>
      ),
    },
    {
      title: "Why Choose Zirconium Crowns?",
      description: `Zirconium crowns offer a blend of strength, durability, and aesthetic appeal, making them an excellent choice for those seeking high-quality dental restorations. Their natural appearance and biocompatibility ensure that they provide both functional and cosmetic benefits, enhancing your smile while standing up to the demands of daily use.`,
    },
    {
      description: <b>Enhance Your Smile with Zirconium Crowns!</b>,
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

export default ZirconiumCrownsEn;

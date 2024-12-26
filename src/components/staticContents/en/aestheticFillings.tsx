import React from "react";
import ContentWrapper from "../contentWrapper";
import about1 from "../../../assets/aestheticFillings1.png";
import about2 from "../../../assets/aestheticFillings2.png";

const AestheticFillingsEn: React.FC = () => {
  const mainContent = {
    title: "Aesthetic Fillings",
    description: `Aesthetic fillings, also known as tooth-colored or composite fillings, are a modern and popular solution for restoring decayed or damaged teeth. Unlike traditional metal (amalgam) fillings, aesthetic fillings are designed to blend seamlessly with the natural color of your teeth, providing a more attractive and discreet result.`,
  };
  const subContetnt = [
    {
      title: "What Are Aesthetic Fillings?",
      description: `Aesthetic fillings are made from a composite resin material that can be closely matched to the color of your natural teeth. This material is durable, strong, and provides excellent adhesion to the tooth structure, making it an ideal choice for both front and back teeth restorations.`,
    },
    {
      title: "When Are Aesthetic Fillings Needed?",
      description: (
        <div>
          <p>
            <b>Cavities and Tooth Decay:</b> Aesthetic fillings are used to
            restore teeth affected by cavities or decay.
          </p>
          <p>
            <b>Chipped or Cracked Teeth:</b> They are also suitable for
            repairing minor chips or cracks in the teeth.
          </p>
          <p>
            <b>Replacing Old Fillings:</b> Aesthetic fillings can replace old,
            unsightly metal fillings for a more natural look.
          </p>
          <p>
            <b>Gaps Between Teeth:</b> They can be used to close small gaps or
            spaces between teeth, improving your smile's overall appearance.
          </p>
        </div>
      ),
    },
    {
      title: "Benefits of Aesthetic Fillings",
      description: (
        <div>
          <p>
            <b>Natural Appearance:</b> The composite material used in aesthetic
            fillings is designed to match the color and texture of your natural
            teeth, making the fillings virtually invisible.
          </p>
          <p>
            <b>Minimally Invasive:</b> Less tooth structure needs to be removed
            compared to traditional metal fillings, preserving more of your
            natural tooth.
          </p>
          <p>
            <b>Strong and Durable:</b> Aesthetic fillings are resilient and can
            withstand normal biting and chewing forces, providing long-lasting
            results.
          </p>
          <p>
            <b>No Mercury:</b> Unlike amalgam fillings, aesthetic fillings are
            free of mercury and other metals, making them a safer and more
            biocompatible option.
          </p>
          <p>
            <b>Quick and Painless Procedure:</b> The procedure is generally
            quick and can be completed in a single visit, often with minimal
            discomfort.
          </p>
        </div>
      ),
    },
    {
      title: "How Are Aesthetic Fillings Placed?",
      description: (
        <div>
          <p>
            <b>Assessment and Preparation:</b> The tooth is carefully examined,
            and any decayed or damaged areas are removed.
          </p>
          <p>
            <b>Anesthesia:</b> A local anesthetic is used to numb the area,
            ensuring a pain-free experience. In some cases, an anesthetic gel
            may be applied before the injection for added comfort.
          </p>
          <p>
            <b>Filling Placement:</b> The composite resin is applied in layers
            and shaped to fit the tooth's natural contours.
          </p>
          <p>
            <b>Curing and Polishing:</b> A special light is used to harden each
            layer of the filling, and then it is polished to achieve a smooth,
            natural finish.
          </p>
        </div>
      ),
    },
    {
      title: "Caring for Aesthetic Fillings",
      description: `To ensure the longevity of your aesthetic fillings, maintain good oral hygiene by brushing twice daily, flossing regularly, and visiting your dentist for routine check-ups and cleanings. Avoid biting on hard objects to prevent damage to the filling.`,
    },
    {
      description: (
        <b>Choose Aesthetic Fillings for a Beautiful, Natural Smile!</b>
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

export default AestheticFillingsEn;

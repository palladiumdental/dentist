import React from "react";
import ContentWrapper from "../contentWrapper";
import about1 from "../../../assets/rootCanalTreatment1.png";
import about2 from "../../../assets/rootCanalTreatment2.png";

const RootCanalTreatmentEn: React.FC = () => {
  const mainContent = {
    title: "Root Canal Treatment",
    description: `Root canal treatment, also known as endodontic therapy, is a dental procedure designed to save a tooth that has become severely infected or damaged. The goal of the treatment is to remove the infected or damaged tissue inside the tooth, alleviate pain, and restore the tooth’s function and appearance.`,
  };
  const subContetnt = [
    {
      title: "What Is Root Canal Treatment?",
      description: `Root canal treatment involves the removal of the pulp (the innermost soft tissue) from inside the tooth's root canals. The pulp may become infected or inflamed due to deep cavities, trauma, or repeated dental procedures. After removing the pulp, the canals are cleaned, disinfected, and filled with a biocompatible material. A crown or filling is then placed on top of the tooth to restore its strength and function.`,
    },
    {
      title: "Benefits of Root Canal Treatment",
      description: (
        <div>
          <p>
            <b>Pain Relief:</b> Root canal treatment can relieve severe tooth
            pain caused by infection or inflammation of the tooth pulp.
          </p>
          <p>
            <b>Tooth Preservation:</b> The treatment allows you to keep your
            natural tooth, which is important for maintaining proper bite
            alignment and overall oral health.
          </p>
          <p>
            <b>Restored Function:</b> After treatment, the tooth can function
            normally for chewing and speaking, similar to how it did before the
            infection or damage occurred.
          </p>
          <p>
            <b>Aesthetic Improvement:</b> The tooth is restored with a crown or
            filling, which helps to maintain its appearance and blend seamlessly
            with your natural teeth.
          </p>
        </div>
      ),
    },
    {
      title: "The Process of Root Canal Treatment",
      description: (
        <div>
          <p>
            <b>Initial Consultation:</b> Your dentist will examine the affected
            tooth, take X-rays, and discuss the need for a root canal. They will
            explain the procedure and answer any questions you may have.
          </p>
          <p>
            <b>Local Anesthesia:</b> To ensure a painless experience, a local
            anesthetic is administered to numb the area around the affected
            tooth.
          </p>
          <p>
            <b>Tooth Preparation:</b> The dentist makes an opening in the tooth
            to access the pulp chamber and root canals. The infected or damaged
            pulp is removed using specialized instruments.
          </p>
          <p>
            <b>Cleaning and Disinfection:</b> The root canals are thoroughly
            cleaned and disinfected to remove any bacteria and debris.
          </p>
          <p>
            <b>Filling:</b> The cleaned canals are filled with a biocompatible
            material called gutta-percha, which seals the canals and prevents
            future infection.
          </p>
          <p>
            <b>Restoration:</b> A temporary filling is placed in the tooth, and
            a permanent crown or filling is usually applied during a follow-up
            visit to restore the tooth’s strength and function.
          </p>
        </div>
      ),
    },
    {
      title: "Caring for Your Tooth After a Root Canal",
      description: (
        <div>
          <p>
            <b>Maintain Good Oral Hygiene:</b> Brush and floss your teeth
            regularly to keep your mouth healthy and prevent further issues.
          </p>
          <p>
            <b>Avoid Hard Foods:</b> Be cautious with hard or sticky foods that
            might damage the restored tooth or crown.
          </p>
          <p>
            <b>Follow-Up Visits:</b> Attend follow-up appointments to ensure the
            tooth is healing properly and to make any necessary adjustments to
            the restoration.
          </p>
        </div>
      ),
    },
    {
      title: "Why Choose Root Canal Treatment?",
      description: `Root canal treatment is a highly effective procedure for saving a tooth that would otherwise need to be extracted. By addressing the infection or damage, the treatment helps to preserve your natural teeth, maintain your bite alignment, and prevent further oral health issues.`,
    },
    {
      description: <b>Preserve Your Smile with Root Canal Treatment!</b>,
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

export default RootCanalTreatmentEn;

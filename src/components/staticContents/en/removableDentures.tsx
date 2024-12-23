import React from "react";
import ContentWrapper from "../contentWrapper";
import about1 from "../../../assets/about-1.jpg";
import about2 from "../../../assets/about-2.jpg";

const RemovableDenturesEn: React.FC = () => {
  const mainContent = {
    title: "Removable Dentures",
    description: `Removable dentures are a versatile and effective solution for replacing missing teeth and restoring your smile. They are designed to be easily taken out and put back in by the wearer, offering both functional and aesthetic benefits. Whether you need to replace a few missing teeth or a full arch, removable dentures can help you regain confidence and improve your quality of life.`,
  };
  const subContetnt = [
    {
      title: "What Are Removable Dentures?",
      description: (
        <div>
          <p>
            Removable dentures are prosthetic devices that replace missing teeth
            and are designed to be taken out of the mouth for cleaning and
            maintenance. They consist of a plastic base that fits over the gums
            and artificial teeth that resemble natural teeth. There are two main
            types of removable dentures:
          </p>
          <p>
            <b>Partial Dentures:</b> These are used when some natural teeth
            remain. They fill in the gaps left by missing teeth and are anchored
            to the existing teeth with metal or plastic clasps.
          </p>
          <p>
            <b>Complete Dentures:</b> These are used when all the teeth in a jaw
            are missing. Complete dentures are designed to cover the entire arch
            of the gums and are held in place by natural suction, adhesive, or a
            combination of both.
          </p>
        </div>
      ),
    },
    {
      title: "Benefits of Removable Dentures",
      description: (
        <div>
          <p>
            <b>Restoration of Function:</b> Dentures restore the ability to chew
            and speak effectively, helping you enjoy your favorite foods and
            communicate clearly.
          </p>
          <p>
            <b>Improved Aesthetics:</b> They enhance your smile and facial
            appearance by replacing missing teeth, which can boost your
            self-confidence.
          </p>
          <p>
            <b>Non-Invasive:</b> Unlike dental implants, removable dentures do
            not require surgery, making them a less invasive option for tooth
            replacement.
          </p>
          <p>
            <b>Adjustable and Replaceable:</b> Dentures can be adjusted or
            replaced as needed to accommodate changes in your oral health or
            bone structure.
          </p>
        </div>
      ),
    },
    {
      title: "The Process of Getting Removable Dentures",
      description: (
        <div>
          <p>
            <b>Initial Consultation:</b> Your dentist will evaluate your oral
            health and discuss the best type of denture for your needs.
            Impressions of your mouth will be taken to create custom dentures.
          </p>
          <p>
            <b>Tooth and Gum Preparation:</b> If necessary, any remaining
            damaged or decayed teeth may be extracted. Your dentist will ensure
            your gums are healthy and ready for the dentures.
          </p>
          <p>
            <b>Denture Fabrication:</b> The impressions are used to create
            custom dentures in a dental laboratory. This process ensures a
            precise fit and natural appearance.
          </p>
          <p>
            <b>Fitting and Adjustment:</b> Once the dentures are ready, your
            dentist will fit them to your mouth, make any necessary adjustments,
            and provide instructions on how to wear and care for them.
          </p>
          <p>
            <b>Follow-Up Care:</b> Regular follow-up visits will be scheduled to
            ensure the dentures fit well and to make any needed adjustments.
          </p>
        </div>
      ),
    },
    {
      title: "Caring for Removable Dentures",
      description: (
        <div>
          <p>
            <b>Daily Cleaning:</b> Clean your dentures daily with a denture
            cleanser and a soft brush to remove food particles and plaque.
          </p>
          <p>
            <b>Soaking:</b> Soak your dentures in a denture-cleaning solution or
            water overnight to keep them moist and prevent warping.
          </p>
          <p>
            <b>Regular Check-Ups:</b> Visit your dentist regularly to check the
            fit of your dentures and to address any issues that may arise.
          </p>
          <p>
            <b>Oral Hygiene:</b> Maintain good oral hygiene by brushing your
            gums, tongue, and any remaining natural teeth to keep your mouth
            healthy.
          </p>
        </div>
      ),
    },
    {
      title: "Why Choose Removable Dentures?",
      description: `Removable dentures offer a practical and affordable solution for replacing missing teeth and restoring your smile. They are adaptable to changes in your oral health and can be easily adjusted or replaced as needed.`,
    },
    {
      description: <b>Restore Your Smile with Removable Dentures!</b>,
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

export default RemovableDenturesEn;

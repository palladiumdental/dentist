import React from "react";
import ContentWrapper from "../contentWrapper";
import about1 from "../../../assets/about-1.jpg";
import about2 from "../../../assets/about-2.jpg";

const ToothExtractionEn: React.FC = () => {
  const mainContent = {
    title: "Tooth Extraction",
    description: `Tooth extraction is a dental procedure in which a tooth is removed from the mouth. While dentists always aim to preserve natural teeth, there are situations where extraction becomes necessary, such as in cases of severely damaged, infected, or impacted teeth that cannot be saved or properly aligned.`,
  };
  const subContetnt = [
    {
      title: "When Is Tooth Extraction Necessary?",
      description: (
        <div>
          <p>
            <b>Severe Tooth Decay or Damage:</b> When a tooth is too decayed or
            damaged to be restored with a filling, crown, or other dental
            treatment.
          </p>
          <p>
            <b>Infection or Abscess:</b> If an infection has reached the tooth's
            pulp (nerve) and cannot be effectively treated with a root canal or
            antibiotics.
          </p>
          <p>
            <b>Impacted Wisdom Teeth:</b> Wisdom teeth that are stuck in the
            gums or growing at an angle may need to be removed to prevent
            crowding, pain, or infection.
          </p>
          <p>
            <b>Crowded Teeth:</b> Sometimes, teeth need to be extracted to
            create space for orthodontic treatments, such as braces, to properly
            align the teeth.
          </p>
          <p>
            <b>Gum Disease:</b> Advanced periodontal disease can cause loosening
            of teeth, making extraction necessary.
          </p>
        </div>
      ),
    },
    {
      title: "What to Expect During a Tooth Extraction?",
      description: (
        <div>
          <p>
            <b>Examination and Consultation:</b> The dentist will assess the
            tooth and surrounding tissue with an examination and X-rays to
            determine the need for extraction.
          </p>
          <p>
            <b>Local Anesthesia:</b> A local anesthetic is applied to numb the
            area around the tooth, ensuring a painless procedure. An anesthetic
            gel may be applied before the injection for extra comfort.
          </p>
          <p>
            <b>Extraction Process:</b> The dentist carefully loosens the tooth
            with special instruments and gently removes it. For impacted teeth,
            a small incision in the gum may be necessary.
          </p>
          <p>
            <b>Aftercare Instructions:</b> The dentist provides detailed
            aftercare instructions to ensure proper healing, including managing
            any discomfort and preventing infection.
          </p>
        </div>
      ),
    },
    {
      title: "Post-Extraction Care",
      description: (
        <div>
          <p>
            <b>Bite on Gauze:</b> To help stop bleeding, bite on a piece of
            gauze for about 20-30 minutes.
          </p>
          <p>
            <b>Pain Management:</b> Use prescribed pain relievers and ice packs
            to reduce swelling and discomfort.
          </p>
          <p>
            <b>Avoid Smoking and Straws:</b> Do not smoke or use straws for
            24-48 hours to prevent dry socket.
          </p>
          <p>
            <b>Soft Foods:</b> Eat soft foods and avoid hot or spicy items for
            the first few days.
          </p>
          <p>
            <b>Good Oral Hygiene:</b> Keep the mouth clean by brushing and
            flossing gently, avoiding the extraction site.
          </p>
        </div>
      ),
    },
    {
      title: "Benefits of Tooth Extraction",
      description: (
        <div>
          <p>
            <b>Pain Relief:</b> Removing a problematic tooth can alleviate
            severe pain and discomfort.
          </p>
          <p>
            <b>Prevent Spread of Infection:</b> Extracting an infected tooth can
            prevent the spread of infection to other teeth or tissues.
          </p>
          <p>
            <b>Improved Oral Health:</b> Tooth extraction can prevent
            complications, such as overcrowding or damage to surrounding teeth.
          </p>
        </div>
      ),
    },
    {
      description: (
        <b>Choose Comfortable and Painless Tooth Extraction at Our Clinic!</b>
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

export default ToothExtractionEn;

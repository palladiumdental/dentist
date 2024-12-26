import React from "react";
import ContentWrapper from "../contentWrapper";
import about1 from "../../../assets/teethCleaningAndTartarRemoval1.png";
import about2 from "../../../assets/teethCleaningAndTartarRemoval2.png";

const TeethCleaningAndTartarRemovalEn: React.FC = () => {
  const mainContent = {
    title: "Teeth Cleaning and Tartar Removal",
    description: `Regular teeth cleaning and tartar removal are essential parts of maintaining good oral health. These procedures help to prevent cavities, gum disease, and bad breath by removing plaque and tartar buildup, which can accumulate even with diligent brushing and flossing at home.`,
  };
  const subContetnt = [
    {
      title: "What Is Teeth Cleaning and Tartar Removal?",
      description: (
        <div>
          <p>
            <b>Teeth Cleaning:</b> A professional teeth cleaning, also known as
            prophylaxis, is performed by a dentist or dental hygienist to remove
            plaque, tartar (hardened plaque), and surface stains from the teeth.
            This procedure helps to maintain healthy teeth and gums and prevents
            dental problems such as cavities and gum disease.
          </p>
          <p>
            <b>Tartar Removal (Scaling):</b> Tartar, also called calculus, is a
            hardened form of plaque that sticks to the teeth and can only be
            removed by a dental professional using special tools. Tartar often
            forms along the gum line and between teeth, creating an ideal
            environment for bacteria to thrive, which can lead to gum
            inflammation and periodontal disease.
          </p>
        </div>
      ),
    },
    {
      title: "Why Is Teeth Cleaning and Tartar Removal Important?",
      description: (
        <div>
          <p>
            <b>Prevent Cavities:</b> Regular cleanings remove plaque and tartar,
            which are the leading causes of tooth decay.
          </p>
          <p>
            <b>Prevent Gum Disease:</b> Tartar buildup can irritate the gums,
            leading to gingivitis and, if left untreated, more severe
            periodontal disease.
          </p>
          <p>
            <b>Fresher Breath:</b> Removing plaque and tartar helps to eliminate
            bacteria that cause bad breath.
          </p>
          <p>
            <b>Maintain Oral Health:</b> Regular cleanings allow your dentist to
            detect early signs of dental issues, ensuring prompt treatment and
            prevention.
          </p>
        </div>
      ),
    },
    {
      title: "How Often Should You Have Your Teeth Cleaned?",
      description: `It is generally recommended to have professional teeth cleaning every 6 months. However, depending on your oral health, your dentist may suggest more frequent cleanings, especially if you have a history of gum disease, heavy tartar buildup, or other dental concerns.`,
    },
    {
      title: "What to Expect During Teeth Cleaning and Tartar Removal?",
      description: (
        <div>
          <p>
            <b>Examination:</b> The dentist or hygienist will examine your teeth
            and gums to check for signs of cavities, gum disease, or other oral
            health issues.
          </p>
          <p>
            <b>Scaling:</b> Using a scaler, the dental professional will remove
            plaque and tartar from the tooth surfaces and around the gum line.
          </p>
          <p>
            <b>Polishing:</b> After scaling, the teeth are polished with a
            special paste to remove surface stains and make the teeth smooth,
            which helps prevent plaque buildup.
          </p>
          <p>
            <b>Fluoride Treatment (Optional):</b> In some cases, a fluoride
            treatment may be applied to help strengthen the teeth and protect
            against cavities.
          </p>
        </div>
      ),
    },
    {
      title: "Tips for Maintaining Oral Hygiene Between Cleanings",
      description: (
        <div>
          <p>
            <b>Brush Twice Daily:</b> Use a soft-bristled toothbrush and
            fluoride toothpaste to brush your teeth at least twice a day.
          </p>
          <p>
            <b>Floss Daily:</b> Flossing helps remove food particles and plaque
            from areas that your toothbrush cannot reach.
          </p>
          <p>
            <b>Rinse with Mouthwash:</b> Use an antibacterial mouthwash to help
            reduce plaque and bacteria in your mouth.
          </p>
          <p>
            <b>Avoid Tobacco and Sugary Foods:</b> Smoking and excessive sugar
            intake can increase plaque buildup and risk of gum disease.
          </p>
        </div>
      ),
    },
    {
      title:
        "What Are the Benefits of Regular Teeth Cleaning and Tartar Removal?",
      description: (
        <div>
          <p>
            <b>Healthier Teeth and Gums:</b> Regular cleanings help maintain
            healthy gums and prevent periodontal disease.
          </p>
          <p>
            <b>Brighten Your Smile:</b> Professional cleaning removes surface
            stains, resulting in a brighter smile.
          </p>
          <p>
            <b>Overall Health Benefits:</b> Good oral hygiene is linked to
            better overall health, reducing the risk of heart disease, diabetes,
            and other systemic conditions.
          </p>
        </div>
      ),
    },
    {
      description: (
        <b>
          Choose Our Clinic for Professional Teeth Cleaning and Tartar Removal!
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
    />
  );
};

export default TeethCleaningAndTartarRemovalEn;

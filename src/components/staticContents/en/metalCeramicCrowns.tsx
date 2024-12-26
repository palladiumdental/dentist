import React from "react";
import ContentWrapper from "../contentWrapper";
import about1 from "../../../assets/metalCeramicCrowns1.png";
import about2 from "../../../assets/metalCeramicCrowns2.png";

const MetalCeramicCrownsEn: React.FC = () => {
  const mainContent = {
    title: "Metal-Ceramic Crowns",
    description: `Metal-ceramic crowns, also known as porcelain-fused-to-metal crowns, are a popular choice for restoring damaged or weakened teeth. These crowns combine the durability of metal with the aesthetic appeal of ceramic, offering both strength and a natural appearance.`,
  };
  const subContetnt = [
    {
      title: "What Are Metal-Ceramic Crowns?",
      description: `Metal-ceramic crowns are dental restorations that consist of a metal base covered with a layer of ceramic material. The metal base provides strength and durability, while the ceramic layer mimics the appearance of natural teeth, ensuring a seamless blend with your smile.`,
    },
    {
      title: "Benefits of Metal-Ceramic Crowns",
      description: (
        <div>
          <p>
            <b>Durability:</b> The metal foundation of these crowns provides
            exceptional strength, making them highly resistant to pressure and
            wear. This makes them ideal for restoring back teeth that endure
            significant chewing forces.
          </p>
          <p>
            <b>Aesthetic Appeal:</b> The ceramic layer can be customized to
            match the color and translucency of your natural teeth, creating a
            natural-looking restoration that blends well with your smile.
          </p>
          <p>
            <b>Versatility:</b> Metal-ceramic crowns are suitable for various
            types of restorations, including single crowns, bridges, and
            multi-unit restorations.
          </p>
          <p>
            <b>Long-Lasting:</b> With proper care, metal-ceramic crowns can last
            many years, providing a durable and reliable solution for restoring
            teeth.
          </p>
        </div>
      ),
    },
    {
      title: "The Process of Getting a Metal-Ceramic Crown",
      description: (
        <div>
          <p>
            <b>Initial Consultation:</b> Your dentist will examine the damaged
            tooth and discuss the best treatment options, including the use of
            metal-ceramic crowns.
          </p>
          <p>
            <b>Tooth Preparation:</b> The tooth is prepared by removing any
            damaged or decayed portions and reshaping it to accommodate the
            crown. An impression of the tooth is taken to create a custom-fit
            crown.
          </p>
          <p>
            <b>Temporary Crown:</b> A temporary crown may be placed on the
            prepared tooth to protect it while the permanent crown is being
            fabricated.
          </p>
          <p>
            <b>Crown Fabrication:</b> The metal-ceramic crown is custom-made in
            a dental laboratory based on the impressions and specifications
            provided by your dentist. The metal base is covered with a layer of
            ceramic material that matches the color of your natural teeth.
          </p>
          <p>
            <b>Placement:</b> Once the permanent crown is ready, it is securely
            placed on the prepared tooth and adjusted for proper fit and bite.
            The dentist will ensure that the crown feels comfortable and
            functions correctly.
          </p>
        </div>
      ),
    },
    {
      title: "Caring for Metal-Ceramic Crowns",
      description: (
        <div>
          <p>
            <b>Maintain Good Oral Hygiene:</b> Brush and floss regularly to keep
            the area around the crown clean and prevent gum disease or decay.
          </p>
          <p>
            <b>Avoid Hard Foods:</b> While metal-ceramic crowns are durable,
            avoid chewing on very hard foods or objects that could damage the
            crown or underlying tooth.
          </p>
          <p>
            <b>Regular Dental Visits:</b> Visit your dentist for regular
            check-ups to monitor the condition of your crown and overall oral
            health.
          </p>
        </div>
      ),
    },
    {
      title: "Why Choose Metal-Ceramic Crowns?",
      description: `Metal-ceramic crowns offer a balanced combination of strength and aesthetics, making them a reliable choice for restoring damaged teeth while maintaining a natural look. They are especially suitable for patients who need durable restorations for molars or premolars, where functionality is essential.`,
    },
    {
      description: <b>Restore Your Smile with Metal-Ceramic Crowns!</b>,
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

export default MetalCeramicCrownsEn;

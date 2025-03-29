import React from "react";

const DentalClinicSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Palladium Dent",
    image: "https://www.palladiumdent.hu/assets/img/header-page.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Fő út 73",
      addressLocality: "Veresegyház",
      postalCode: "2112",
      addressCountry: "Hungary",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "47.657058103921756",
      longitude: "19.28467962698385",
    },
    telephone: "+36 70 536 0300",
    email: "multipalladiumdental@gmail.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    // priceRange: "$$",
    // sameAs: [
    //   "https://www.facebook.com/palladiumdent",
    //   "https://www.instagram.com/palladiumdent",
    // ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default DentalClinicSchema;

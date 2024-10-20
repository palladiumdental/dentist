import React from "react";
import TeethWhitening from "../components/staticContents/teethWhitening";

export type CategorizedServiceType = {
  category: CategoryType;
  services: ServiceType[];
};

export type ServiceType = {
  icon: string;
  title: string;
  route: string;
  description: string;
  delay: string;
  enComponent?: React.FC;
  huComponent?: React.FC;
};

export type CategoryType = {
  route: string;
  title: string;
};

export const CATEGORY: CategoryType[] = [
  { route: "everyday_dental_treatments", title: "Everyday Dental Treatments" },
  { route: "cosmetic_dentistry", title: "Cosmetic Dentistry" },
  { route: "prosthesis", title: "Prosthesis" },
  { route: "implants", title: "Implants" },
  { route: "orthodontics", title: "Orthodontics" },
];

export const SERVICES: CategorizedServiceType[] = [
  {
    category: {
      route: "everyday_dental_treatments",
      title: "Everyday Dental Treatments",
    },
    services: [
      {
        icon: "fa-heartbeat",
        title: "Aesthetic Fillings",
        route: "aesthetic_fillings",
        description:
          "A modern alternative to traditional metal fillings, offering a natural-looking solution for restoring decayed teeth.",
        delay: "0.1s",
        enComponent: TeethWhitening,
        huComponent: TeethWhitening,
      },
      {
        icon: "fa-vials",
        title: "Pediatric Dentistry",
        route: "pediatric_dentistry",
        description:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
        delay: "0.5s",
      },
      {
        icon: "fa-vials",
        title: "Root Canal Treatment",
        route: "root_canal_treatment",
        description:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
        delay: "0.5s",
      },
      {
        icon: "fa-vials",
        title: "Tooth Extraction",
        route: "tooth_extraction",
        description:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
        delay: "0.5s",
      },
    ],
  },
  {
    category: { route: "cosmetic_dentistry", title: "Cosmetic Dentistry" },
    services: [
      {
        icon: "fa-x-ray",
        title: "At-Home Teeth Whitening",
        route: "at_home_teeth_whitening",
        description:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
        delay: "0.3s",
      },
      {
        icon: "fa-vials",
        title: "Teeth Cleaning and Tartar Removal",
        route: "teeth_cleaning_and_tartar_removal",
        description:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
        delay: "0.5s",
      },
    ],
  },
  {
    category: { route: "prosthesis", title: "Prosthesis" },
    services: [
      {
        icon: "fa-tooth",
        title: "Metal-Ceramic Crowns",
        route: "metal_ceramic_crowns",
        description:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
        delay: "0.3s",
      },

      {
        icon: "fa-vials",
        title: "Removable Dentures",
        route: "removable_dentures",
        description:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
        delay: "0.5s",
      },

      {
        icon: "fa-vials",
        title: "Zirconium Crowns",
        route: "zirconium_crowns",
        description:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
        delay: "0.5s",
      },
    ],
  },
  {
    category: { route: "implants", title: "Implants" },
    services: [
      {
        icon: "fa-brain",
        title: "Immediate Loading Implants",
        route: "immediate_loading_implants",
        description:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
        delay: "0.5s",
      },
    ],
  },
  {
    category: { route: "orthodontics", title: "Orthodontics" },
    services: [
      {
        icon: "fa-wheelchair",
        title: "Clear Aligner",
        route: "clear_aligner",
        description:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
        delay: "0.1s",
      },
    ],
  },
];

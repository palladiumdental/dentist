import React from "react";
import TeethWhiteningEn from "../components/staticContents/en/teethWhitening";
import TeethWhiteningHU from "../components/staticContents/hu/teethWhitening";
import AestheticFillingsEn from "../components/staticContents/en/aestheticFillings";
import AestheticFillingsHu from "../components/staticContents/hu/aestheticFillings";
import ImmediateLoadingImplantsEn from "../components/staticContents/en/immediateLoadingImplants";
import ImmediateLoadingImplantsHu from "../components/staticContents/hu/immediateLoadingImplants";
import InvisibleAlignerEn from "../components/staticContents/en/invisibleAligner";
import InvisibleAlignerHu from "../components/staticContents/hu/invisibleAligner";
import MetalCeramicCrownsEn from "../components/staticContents/en/metalCeramicCrowns";
import MetalCeramicCrownsHu from "../components/staticContents/hu/metalCeramicCrowns";
import PediatricDentistryEn from "../components/staticContents/en/pediatricDentistry";
import PediatricDentistryHu from "../components/staticContents/hu/pediatricDentistry";
import RemovableDenturesEn from "../components/staticContents/en/removableDentures";
import RemovableDenturesHu from "../components/staticContents/hu/removableDentures";
import RootCanalTreatmentEn from "../components/staticContents/en/rootCanalTreatment";
import RootCanalTreatmentHu from "../components/staticContents/hu/rootCanalTreatment";
import TeethCleaningAndTartarRemovalEn from "../components/staticContents/en/teethCleaningAndTartarRemoval";
import TeethCleaningAndTartarRemovalHU from "../components/staticContents/hu/teethCleaningAndTartarRemoval";
import ToothExtractionEn from "../components/staticContents/en/ToothExtraction";
import ToothExtractionHu from "../components/staticContents/hu/ToothExtraction";
import ZirconiumCrownsEn from "../components/staticContents/en/zirconiumCrowns";
import ZirconiumCrownsHu from "../components/staticContents/hu/zirconiumCrowns";

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
  { route: "everyday_dental_treatments", title: "everyday dental treatments" },
  { route: "cosmetic_dentistry", title: "cosmetic dentistry" },
  { route: "prosthesis", title: "prosthesis" },
  { route: "implants", title: "implants" },
  { route: "orthodontics", title: "orthodontics" },
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
        title: "aesthetic fillings",
        route: "aesthetic_fillings",
        description: "a18",
        delay: "0.1s",
        enComponent: AestheticFillingsEn,
        huComponent: AestheticFillingsHu,
      },
      {
        icon: "fa-vials",
        title: "pediatric dentistry",
        route: "pediatric_dentistry",
        description: "a19",
        delay: "0.5s",
        enComponent: PediatricDentistryEn,
        huComponent: PediatricDentistryHu,
      },
      {
        icon: "fa-vials",
        title: "root canal treatments",
        route: "root_canal_treatment",
        description: "a20",
        delay: "0.5s",
        enComponent: RootCanalTreatmentEn,
        huComponent: RootCanalTreatmentHu,
      },
      {
        icon: "fa-vials",
        title: "tooth extraction",
        route: "tooth_extraction",
        description: "a21",
        delay: "0.5s",
        enComponent: ToothExtractionEn,
        huComponent: ToothExtractionHu,
      },
    ],
  },
  {
    category: { route: "cosmetic_dentistry", title: "Cosmetic Dentistry" },
    services: [
      {
        icon: "fa-x-ray",
        title: "at-home teeth whitening",
        route: "at_home_teeth_whitening",
        description: "a22",
        delay: "0.3s",
        enComponent: TeethWhiteningEn,
        huComponent: TeethWhiteningHU,
      },
      {
        icon: "fa-vials",
        title: "teeth cleaning and tartar removal",
        route: "teeth_cleaning_and_tartar_removal",
        description: "a23",
        delay: "0.5s",
        enComponent: TeethCleaningAndTartarRemovalEn,
        huComponent: TeethCleaningAndTartarRemovalHU,
      },
    ],
  },
  {
    category: { route: "prosthesis", title: "Prosthesis" },
    services: [
      {
        icon: "fa-tooth",
        title: "metal-ceramic crowns",
        route: "metal_ceramic_crowns",
        description: "a24",
        delay: "0.3s",
        enComponent: MetalCeramicCrownsEn,
        huComponent: MetalCeramicCrownsHu,
      },

      {
        icon: "fa-vials",
        title: "removable dentures",
        route: "removable_dentures",
        description: "a25",
        delay: "0.5s",
        enComponent: RemovableDenturesEn,
        huComponent: RemovableDenturesHu,
      },

      {
        icon: "fa-vials",
        title: "zirconium crowns",
        route: "zirconium_crowns",
        description: "a26",
        delay: "0.5s",
        enComponent: ZirconiumCrownsEn,
        huComponent: ZirconiumCrownsHu,
      },
    ],
  },
  {
    category: { route: "implants", title: "Implants" },
    services: [
      {
        icon: "fa-brain",
        title: "immediate loading implants",
        route: "immediate_loading_implants",
        description: "a27",
        delay: "0.5s",
        enComponent: ImmediateLoadingImplantsEn,
        huComponent: ImmediateLoadingImplantsHu,
      },
    ],
  },
  {
    category: { route: "orthodontics", title: "Orthodontics" },
    services: [
      {
        icon: "fa-wheelchair",
        title: "invisible aligner",
        route: "clear_aligner",
        description: "a28",
        delay: "0.1s",
        enComponent: InvisibleAlignerEn,
        huComponent: InvisibleAlignerHu,
      },
    ],
  },
];

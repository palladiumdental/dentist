export type PriceType = {
  service: string;
  price: string;
};

export const PRICES: PriceType[] = [
  { service: "Teeth Cleaning", price: "$50" },
  { service: "Cavity Filling", price: "$75" },
  { service: "Root Canal", price: "$300" },
  { service: "Tooth Extraction", price: "$150" },
  { service: "Dental Implants", price: "$2000" },
];

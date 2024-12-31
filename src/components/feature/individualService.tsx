import React, { useEffect } from "react";
import { ServiceType } from "../../constants/services";
import { useTranslation } from "react-i18next";

type IndividualServiceProps = {
  service: ServiceType;
};

const IndividualService: React.FC<IndividualServiceProps> = ({ service }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Load the saved language from localStorage, default to 'hu'
    const savedLanguage = localStorage.getItem("language") || "hu";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const currentLanguage = i18n.language;
  const ServiceComponent =
    currentLanguage === "en" ? service.enComponent : service.huComponent;

  return (
    <div className="container-xxl py-5">
      {ServiceComponent ? <ServiceComponent /> : <div>{service.title}</div>}
    </div>
  );
};

export default IndividualService;

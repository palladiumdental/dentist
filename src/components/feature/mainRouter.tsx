import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../../pages/homePage";
import AboutPage from "../../pages/aboutPage";
import ContactPage from "../../pages/contactPage";
import _404 from "../../pages/404";
import PromotionPage from "../../pages/promotionPage";
import ServicePage from "../../pages/servicePage";
import IndividualServicePage from "../../pages/individualServicePage";
import PricePage from "../../pages/pricePage";
import AppointmentPage from "../../pages/appointmentPage";
import EditPriceListPage from "../../pages/editPriceListPage";
import {
  CATEGORY,
  CategoryType,
  SERVICES,
  CategorizedServiceType,
  ServiceType,
} from "../../constants/services";

const MainRouter: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/service" element={<ServicePage />} />
      {CATEGORY.map((category: CategoryType) => (
        <Route
          path={`/service/${category.route}`}
          element={<ServicePage category={category} />}
        />
      ))}
      {SERVICES.map((service: CategorizedServiceType) =>
        service.services.map((s: ServiceType) => (
          <Route
            path={`/service/${service.category.route}/${s.route}`}
            element={<IndividualServicePage service={s} />}
          />
        ))
      )}
      <Route path="/price" element={<PricePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/_404" element={<_404 />} />
      <Route path="/promotion" element={<PromotionPage />} />
      <Route path="/appointment" element={<AppointmentPage />} />
      <Route path="/edit-price-list" element={<EditPriceListPage />} />
    </Routes>
  );
};

export default MainRouter;

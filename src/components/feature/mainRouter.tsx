import { Routes, Route } from "react-router-dom";
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
import { MAIN_ROUTE } from "../../constants/website";
import {
  CATEGORY,
  CategoryType,
  SERVICES,
  CategorizedServiceType,
  ServiceType,
} from "../../constants/services";

const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route index path={MAIN_ROUTE} element={<HomePage />} />
      <Route path={`${MAIN_ROUTE}/about`} element={<AboutPage />} />
      <Route path={`${MAIN_ROUTE}/service`} element={<ServicePage />} />
      {CATEGORY.map((category: CategoryType) => (
        <Route
          path={`${MAIN_ROUTE}/service/${category.route}`}
          element={<ServicePage category={category} />}
        />
      ))}
      {SERVICES.map((service: CategorizedServiceType) =>
        service.services.map((s: ServiceType) => (
          <Route
            path={`${MAIN_ROUTE}/service/${service.category.route}/${s.route}`}
            element={<IndividualServicePage service={s} />}
          />
        ))
      )}
      <Route path={`${MAIN_ROUTE}/price`} element={<PricePage />} />
      <Route path={`${MAIN_ROUTE}/contact`} element={<ContactPage />} />
      <Route path={`${MAIN_ROUTE}/_404`} element={<_404 />} />
      <Route path={`${MAIN_ROUTE}/promotion`} element={<PromotionPage />} />
      <Route path={`${MAIN_ROUTE}/appointment`} element={<AppointmentPage />} />
      <Route
        path={`${MAIN_ROUTE}/edit-price-list`}
        element={<EditPriceListPage />}
      />
    </Routes>
  );
};

export default MainRouter;

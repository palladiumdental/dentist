import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import AboutPage from "../pages/aboutPage";
import ContactPage from "../pages/contactPage";
import _404 from "../pages/404";
import PromotionPage from "../pages/promotionPage";
import AppointmentPage from "../pages/appointmentPage";
import ServicePage from "../pages/servicePage";
import PricePage from "../pages/pricePage";
import { MAIN_ROUTE } from "../constants/constants";

const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route index path={MAIN_ROUTE} element={<HomePage />} />
      <Route path={`${MAIN_ROUTE}/about`} element={<AboutPage />} />
      <Route path={`${MAIN_ROUTE}/service`} element={<ServicePage />} />
      <Route path={`${MAIN_ROUTE}/price`} element={<PricePage />} />
      <Route path={`${MAIN_ROUTE}/contact`} element={<ContactPage />} />
      <Route path={`${MAIN_ROUTE}/_404`} element={<_404 />} />
      <Route path={`${MAIN_ROUTE}/Promotion`} element={<PromotionPage />} />
      <Route path={`${MAIN_ROUTE}/appointment`} element={<AppointmentPage />} />
    </Routes>
  );
};

export default MainRouter;

import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import AboutPage from "../pages/aboutPage";
import ContactPage from "../pages/contactPage";
import _404 from "../pages/404";
import PromotionPage from "../pages/promotionPage";
import AppointmentPage from "../pages/appointmentPage";
import ServicePage from "../pages/servicePage";
import PricePage from "../pages/pricePage";

const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/price" element={<PricePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/_404" element={<_404 />} />
      <Route path="/Promotion" element={<PromotionPage />} />
      <Route path="/appointment" element={<AppointmentPage />} />
    </Routes>
  );
};

export default MainRouter;

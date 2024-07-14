import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import AboutPage from "../pages/aboutPage";
import ContactPage from "../pages/contactPage";
import _404 from "../pages/404";
import FeaturePage from "../pages/featurePage";
import AppointmentPage from "../pages/appointmentPage";
import ServicePage from "../pages/servicePage";

const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/_404" element={<_404 />} />
        <Route path="/feature" element={<FeaturePage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;

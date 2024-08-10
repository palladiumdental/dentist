import React from "react";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BackToTop from "../components/backToTop";

type MainWrapperProps = {
  children: React.ReactNode;
};

const MainWrapper: React.FC<MainWrapperProps> = ({ children }) => {
  return (
    <>
      <Topbar />
      <Navbar />
      {children}
      <Footer />
      <BackToTop />
    </>
  );
};

export default MainWrapper;

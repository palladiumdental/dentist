import React from "react";
import Topbar from "../feature/topbar";
import Navbar from "../feature/navbar";
import Footer from "../feature/footer";
import BackToTop from "./backToTop";

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

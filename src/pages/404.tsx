import React from "react";
import "../App.css";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import PageHeader from "../components/pageHeader";
import NotFound from "../components/notFound";
import Footer from "../components/footer";
import BackToTop from "../components/backToTop";

function _404() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <PageHeader title="404 Error" />
      <NotFound />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default _404;

import React from "react";
import "../App.css";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import PageHeader from "../components/pageHeader";
import Footer from "../components/footer";
import BackToTop from "../components/backToTop";
import Team from "../components/team";

function TeamPage() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <PageHeader title="Doctors" />
      <Team />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default TeamPage;

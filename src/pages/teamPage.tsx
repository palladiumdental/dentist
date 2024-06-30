import React, { useState } from "react";
import "../App.css";
import Spinner from "../components/spinner";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import PageHeader from "../components/pageHeader";
import Footer from "../components/footer";
import BackToTop from "../components/backToTop";
import Team from "../components/team";

function TeamPage() {
  const [loading, setLoading] = useState(true);

  const breadcrumb = [
    { name: "Home", link: "#" },
    { name: "Page", link: "#" },
    { name: "Doctors", active: true },
  ];

  // Simulate loading, [Can be removed later]
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      404
      <Spinner show={loading} />
      <Topbar />
      <Navbar />
      <PageHeader title="Doctors" breadcrumb={breadcrumb} />
      <Team />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default TeamPage;

import React, { useState } from "react";
import "../App.css";
import Spinner from "../components/spinner";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import PageHeader from "../components/pageHeader";
import Footer from "../components/footer";
import BackToTop from "../components/backToTop";
import Contact from "../components/contact";

function ContactPage() {
  const [loading, setLoading] = useState(true);

  const breadcrumb = [
    { name: "Home", link: "#" },
    { name: "Page", link: "#" },
    { name: "Contact", active: true },
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
      <PageHeader title="Contact Us" breadcrumb={breadcrumb} />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default ContactPage;

import React, { useState } from "react";
import "../App.css";
import Spinner from "../components/spinner";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import PageHeader from "../components/pageHeader";
import NotFound from "../components/notFound";
import Footer from "../components/footer";
import BackToTop from "../components/backToTop";

function _404() {
  const [loading, setLoading] = useState(true);

  const breadcrumb = [
    // { name: "Home", link: "#" },
    // { name: "Pages", link: "#" },
    { name: "404 Error", active: true },
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
      <PageHeader title="404 Error" breadcrumb={breadcrumb} />
      <NotFound />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default _404;

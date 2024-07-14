import React, { useState } from "react";
import "../App.css";
import Spinner from "../components/spinner";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BackToTop from "../components/backToTop";
import Service from "../components/service";
import Appointment from "../components/appointment";
import Testimonial from "../components/testimonial";
import Header from "../components/header";
import About from "../components/about";
import Feature from "../components/feature";
import Team from "../components/team";

function HomePage() {
  const [loading, setLoading] = useState(true);

  // const breadcrumb = [
  //   { name: "Home", link: "#" },
  //   { name: "Page", link: "#" },
  //   { name: "Services", active: true },
  // ];

  // Simulate loading, [Can be removed later]
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {/* <MainRouter /> */}
      <Spinner show={loading} />
      <Topbar />
      <Navbar />
      <Header />
      <About />
      <Service />
      <Feature />
      <Team />
      <Appointment />
      <Testimonial />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default HomePage;

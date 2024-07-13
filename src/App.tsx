import React, { useState } from "react";
import "./App.css";
import Spinner from "./components/spinner";
import Topbar from "./components/topbar";
import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";
import Service from "./components/service";
import Feature from "./components/feature";
import Team from "./components/team";
import Appointment from "./components/appointment";
import Testimonial from "./components/testimonial";
import Footer from "./components/footer";
import BackToTop from "./components/backToTop";

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading, [Can be removed later]
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      Dentist
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

export default App;

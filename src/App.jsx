import { Route, Router, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Prijava from "./components/Prijava";
import Footer from "./components/Footer";
import Registracija from "./components/Registracija";
import Dogadaji from "./pages/Dogadaji";
import { useEffect } from "react";
import Transport from "./pages/Transport";
import O_nama from "./pages/O_nama";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.remove("bg-image-2");

    if (
      location.pathname == "/prijava" ||
      location.pathname == "/registracija" ||
      location.pathname == "/"
    ) {
      document.body.classList.add("bg-image-2");
    }

    return () => {
      document.body.classList.remove("bg-image-2");
    };
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <div className="naslov">
              <h1>Turistička organizacija grada Banjaluka</h1>
            </div>
            <div className="prednjastrana">
              <h1>visit BANJALUKA</h1>
              <h2>istraži i uživaj</h2>
            </div>
          </>
        } />
        <Route path="/prijava" element={<Prijava />} />
        <Route path="/registracija" element={<Registracija />} />
        <Route path="/dogadaji" element={<Dogadaji />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/o_nama" element={<O_nama />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

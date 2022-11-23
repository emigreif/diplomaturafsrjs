//import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contacto from "./pages/ContactoPage";
import HomePage from "./pages/HomePage";
import Mision from "./pages/MisionPage";
import Servicios from "./pages/ServiciosPage";
import Capacitaciones from "./pages/CapacitacionesPage";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Mision" element={<Mision />} />
          <Route path="Servicios" element={<Servicios />} />
          <Route path="capacitaciones" element={<Capacitaciones />} />
          <Route path="contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Trainers from "./pages/Trainers";
import WhatsappButton from "./components/WhatsappButton";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/classes" element={<Classes />} />

        <Route path="/trainers" element={<Trainers />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <WhatsappButton />
    </>
  );
}

export default App;

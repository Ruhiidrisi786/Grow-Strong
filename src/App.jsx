import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Classes from "./components/Classes";
import "./App.css";
import HIIT from "./components/HIIT";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Trainers from "./components/Trainers";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Classes />
      <HIIT />
      <Trainers />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;

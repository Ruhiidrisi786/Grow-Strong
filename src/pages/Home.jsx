import Hero from "../components/Hero";
import HIIT from "../components/HIIT";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <HIIT />
      <Pricing />
      <Testimonials />
    </>
  );
}

export default Home;

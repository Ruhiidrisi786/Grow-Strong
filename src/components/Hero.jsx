import "../styles/Hero.css";
import { Link } from "react-router-dom";
import gymVideo from "../assets/gym-video.mp4";

function Hero() {
  return (
    <section className="hero">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={gymVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>
          TRANSFORM YOUR <span>BODY</span>
        </h1>

        <h2>BUILD STRENGTH. BUILD CONFIDENCE.</h2>

        <p>
          Join Grow Strong and start your fitness journey with expert trainers
          and personalized workouts.
        </p>

        <div className="hero-buttons">
          <Link to="/classes" className="primary-btn">
            Explore Classes
          </Link>

          <Link to="/contact" className="secondary-btn">
            Join Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;

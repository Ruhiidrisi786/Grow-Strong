function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container-custom hero-grid">
        <div className="hero-left">
          <div className="image-card">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="fitness"
            />
          </div>

          <div className="dots"></div>
        </div>

        <div className="hero-right">
          <span className="hero-subtitle">GROW STRONG</span>

          <h1>
            GET READY
            <br />
            FOR CHANGE
            <br />
            TO HAPPEN.
          </h1>

          <button className="learn-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

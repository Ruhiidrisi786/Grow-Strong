function Testimonials() {
  return (
    <section id="client" className="testimonials-section">
      <div className="container-custom">
        <div className="testimonial-heading">
          <h2>
            WHAT OUR
            <span>CLIENTS SAY</span>
          </h2>
        </div>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" />
            <h3>Sarah Khan</h3>

            <div className="stars">★★★★★</div>

            <p>
              Amazing trainers and great environment. I lost 12kg in 5 months.
            </p>
          </div>

          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" />
            <h3>Aman Verma</h3>

            <div className="stars">★★★★★</div>

            <p>
              Best gym experience. The HIIT sessions completely changed my
              fitness level.
            </p>
          </div>

          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" />
            <h3>Fatima Ali</h3>

            <div className="stars">★★★★★</div>

            <p>Friendly staff, modern equipment and excellent guidance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

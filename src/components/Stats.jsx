function Stats() {
  const stats = [
    {
      number: "500+",
      title: "Happy Members",
    },
    {
      number: "20+",
      title: "Expert Trainers",
    },
    {
      number: "10+",
      title: "Years Experience",
    },
    {
      number: "50+",
      title: "Weekly Classes",
    },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="row g-4">
          {stats.map((item, index) => (
            <div className="col-md-3 col-6" key={index} data-aos="fade-up">
              <div className="stats-card">
                <h2>{item.number}</h2>

                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;

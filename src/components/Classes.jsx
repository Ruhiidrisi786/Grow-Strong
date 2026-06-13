const classesData = [
  {
    id: 1,
    title: "Yoga",
    time: "4 PM - 5 PM",
    image:
      "https://plus.unsplash.com/premium_photo-1661777196224-bfda51e61cfd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "HIIT",
    time: "5 PM - 6 PM",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
  },
  {
    id: 3,
    title: "Strength",
    time: "7 PM - 8 PM",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800",
  },
];

function Classes() {
  return (
    <section className="classes-section">
      <div className="container-custom">
        <div className="classes-header">
          <h2>
            JOIN OUR
            <br />
            GROUP CLASSES
          </h2>
        </div>

        <div className="classes-grid">
          {classesData.map((item) => (
            <div className="class-card" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="class-content">
                <p>{item.time}</p>

                <h3>{item.title}</h3>

                <button>Reserve</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Classes;

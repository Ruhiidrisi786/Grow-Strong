import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const trainers = [
  {
    id: 1,
    name: "Michael Scott",
    role: "Strength Coach",
    exp: "8+ Years Experience",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 2,
    name: "Sophia Wilson",
    role: "Yoga Instructor",
    exp: "6+ Years Experience",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 3,
    name: "David Miller",
    role: "HIIT Specialist",
    exp: "10+ Years Experience",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 4,
    name: "Emma Taylor",
    role: "Fitness Trainer",
    exp: "5+ Years Experience",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

function Trainers() {
  return (
    <section className="trainers-section">
      <div className="container-custom">
        <div className="trainer-heading">
          <h2>
            MEET OUR
            <span>TRAINERS</span>
          </h2>

          <p>
            Professional coaches dedicated to helping you achieve your goals.
          </p>
        </div>

        <div className="trainer-grid">
          {trainers.map((trainer) => (
            <div className="trainer-card" key={trainer.id}>
              <img src={trainer.image} alt={trainer.name} />

              <h3>{trainer.name}</h3>

              <h4>{trainer.role}</h4>

              <span className="exp-badge">{trainer.exp}</span>

              <div className="trainer-social">
                <FaInstagram />
                <FaFacebookF />
                <FaLinkedinIn />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainers;

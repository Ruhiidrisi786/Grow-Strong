import "../styles/Stats.css";
import { FaUsers, FaUserTie, FaDumbbell, FaTrophy } from "react-icons/fa";

function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-item">
          <FaUsers className="stats-icon" />
          <h2>500+</h2>
          <p>Happy Members</p>
        </div>

        <div className="stats-item">
          <FaUserTie className="stats-icon" />
          <h2>20+</h2>
          <p>Expert Trainers</p>
        </div>

        <div className="stats-item">
          <FaDumbbell className="stats-icon" />
          <h2>50+</h2>
          <p>Fitness Programs</p>
        </div>

        <div className="stats-item">
          <FaTrophy className="stats-icon" />
          <h2>10+</h2>
          <p>Years Experience</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;

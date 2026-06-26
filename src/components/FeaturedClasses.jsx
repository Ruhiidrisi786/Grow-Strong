import "../styles/FeaturedClasses.css";
import {
  FaDumbbell,
  FaHeartbeat,
  FaRunning,
  FaFire,
  FaUserTie,
  FaSpa,
} from "react-icons/fa";

function FeaturedClasses() {
  const classes = [
    {
      icon: <FaDumbbell />,
      title: "Strength Training",
    },
    {
      icon: <FaHeartbeat />,
      title: "Cardio Training",
    },
    {
      icon: <FaRunning />,
      title: "CrossFit",
    },
    {
      icon: <FaFire />,
      title: "HIIT Workout",
    },
    {
      icon: <FaUserTie />,
      title: "Personal Training",
    },
    {
      icon: <FaSpa />,
      title: "Yoga Classes",
    },
  ];

  return (
    <section className="featured-classes">
      <div className="section-heading">
        <h2>OUR CLASSES</h2>

        <p>
          Explore our premium fitness programs designed to transform your body
          and improve your health.
        </p>
      </div>

      <div className="classes-container">
        {classes.map((item, index) => (
          <div className="class-item" key={index}>
            <div className="class-icon">{item.icon}</div>

            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedClasses;

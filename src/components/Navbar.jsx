import { FaDumbbell } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar-section">
      <div className="container-custom">
        <div className="logo">
          <FaDumbbell className="logo-icon" />

          <span className="logo-black">GROW</span>

          <span className="logo-green">STRONG</span>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#info">Info</a>
          </li>

          <li>
            <a href="#client">Our Client</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button className="join-btn">Join Now</button>
      </div>
    </nav>
  );
}

export default Navbar;

import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer id="contact" className="footer-section">
      <div className="container-custom">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">GROW STRONG</div>

            <p className="footer-text">
              Build strength, confidence and a healthier lifestyle. Join our
              community and start your transformation.
            </p>
          </div>

          <div>
            <h4 className="footer-title">CONTACT</h4>

            <p className="footer-text">+91 9876543210</p>

            <p className="footer-text">info@growstrong.com</p>
          </div>

          <div>
            <h4 className="footer-title">ADDRESS</h4>

            <p className="footer-text">Andheri West, Mumbai, Maharashtra</p>
          </div>

          <div>
            <h4 className="footer-title">FOLLOW US</h4>

            <div className="social-icons">
              <i>
                <FaInstagram />
              </i>

              <i>
                <FaFacebookF />
              </i>

              <i>
                <FaWhatsapp />
              </i>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Grow Strong. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

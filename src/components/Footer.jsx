import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import WhatsappButton from "./WhatsappButton";

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

            <p className="footer-text">
              <a href="tel:+919876543210">+91 7715823336</a>
            </p>

            <p className="footer-text">
              <a href="mailto:info@growstrong.com">info@growstrong.com</a>
            </p>
          </div>

          <div>
            <h4 className="footer-title">ADDRESS</h4>

            <p className="footer-text">
              <a
                href="https://maps.google.com/?q=Andheri+East+Mumbai+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
              >
                Andheri East, Mumbai, Maharashtra
              </a>
            </p>
          </div>

          <div>
            <h4 className="footer-title">FOLLOW US</h4>

            <div className="social-icons">
              <i>
                <a
                  href="https://instagram.com/YOUR_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </i>

              <i>
                <a
                  href="https://facebook.com/YOUR_PAGE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
              </i>

              <i>
                <a
                  href="https://wa.me/917715823336"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </a>
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

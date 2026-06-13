import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    }

    if (!formData.phone.trim()) {
      validationErrors.phone = "Phone is required";
    }

    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <section className="contact-page">
      <div className="container-custom">
        <div className="contact-header">
          <h1>
            CONTACT
            <span>US</span>
          </h1>

          <p>Let's start your fitness transformation today.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Get In Touch</h3>

            <p>📍 Mumbai, Maharashtra</p>

            <p>📞 +91 9876543210</p>

            <p>✉ info@growstrong.com</p>

            <p>🕒 Mon - Sun : 6 AM - 11 PM</p>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />

              {errors.name && <span className="error">{errors.name}</span>}

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />

              {errors.email && <span className="error">{errors.email}</span>}

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />

              {errors.phone && <span className="error">{errors.phone}</span>}

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />

              {errors.message && (
                <span className="error">{errors.message}</span>
              )}

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

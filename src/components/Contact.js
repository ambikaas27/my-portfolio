import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'portfolio_service',
      'template_4yxo1mi',
      form.current,
      'qldrNf80jZg6WtSal'
    )
    .then(() => {
      setSent(true);
      setLoading(false);
      form.current.reset();
    })
    .catch(() => {
      setError(true);
      setLoading(false);
    });
  };

  return (
    <section id="contact">
      <h2 data-aos="fade-up">Contact Me</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Have an opportunity or just want to say hi? Drop a message!
      </p>

      {sent && (
        <div className="form-success">
          ✅ Message sent successfully! I'll get back to you soon.
        </div>
      )}

      {error && (
        <div className="form-error">
          ❌ Something went wrong. Please try again or email me directly.
        </div>
      )}

      <form ref={form} onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="200">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <div data-aos="fade-up" data-aos-delay="300">
        <a href="mailto:ambika272616@gmail.com">ambika272616@gmail.com</a>
        <a href="https://linkedin.com/in/ambika-sharma-4115a7213" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/ambikaas27" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
  );
}

export default Contact;
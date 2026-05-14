import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}! I'll get back to you soon.`);
  };

  return (
    <section id="contact">
      <h2 data-aos="fade-up">Contact Me</h2>
      <p data-aos="fade-up" data-aos-delay="100">Have an opportunity or just want to say hi? Drop a message!</p>
      <form onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="200">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </form>
      <div data-aos="fade-up" data-aos-delay="300">
        <a href="mailto:ambikasharma67721@gmail.com">ambikasharma67721@gmail.com</a>
        <a href="https://linkedin.com/in/ambika-sharma-4115a7213" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/ambikaas27" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
  );
}

export default Contact;
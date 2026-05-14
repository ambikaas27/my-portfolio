import React from 'react';

function About() {
  return (
    <section id="about">
      <h2 data-aos="fade-up">About Me</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        I'm a Full Stack Developer from Varanasi, India with a B.Tech in
        Computer Science. I have hands-on experience building end-to-end
        web applications and completed an internship as a Web Developer
        at Boot & Boost Entrepreneur LLP.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        I enjoy solving problems and building things that live on the internet.
        Currently focused on React and Node.js to grow my full stack skills.
      </p>
      <div>
        <div data-aos="fade-right" data-aos-delay="200">
          <h3>Education</h3>
          <p>B.Tech CSE — Ashoka Institute of Technology, Varanasi</p>
          <p>CGPA: 7.26 / 10</p>
        </div>
        <div data-aos="fade-left" data-aos-delay="200">
          <h3>Experience</h3>
          <p>Web Developer Intern</p>
          <p>Boot & Boost Entrepreneur LLP</p>
          <p>Sep 2024 – Dec 2024</p>
        </div>
      </div>
    </section>
  );
}

export default About;
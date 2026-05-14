import React from 'react';

function Hero() {
  return (
    <section id="hero">
      <h1 data-aos="fade-down">Hi, I'm <span>Ambika Sharma</span> 👋</h1>
      <h2 data-aos="fade-down" data-aos-delay="100">Full Stack Developer</h2>
      <p data-aos="fade-down" data-aos-delay="200">I build end-to-end web applications using Python, React, Node.js and MySQL.</p>
      <a href="#projects" data-aos="fade-up" data-aos-delay="300">View My Work</a>
    </section>
  );
}

export default Hero;
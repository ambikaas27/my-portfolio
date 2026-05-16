import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <section id="hero">
      <div className="particles">
        {particles.map((i) => (
          <div key={i} className="particle" />
        ))}
      </div>
      <div className="hero-content">
        <h1 data-aos="fade-down">Hi, I'm <span>Ambika Sharma</span> 👋</h1>
        <TypeAnimation
          sequence={[
            "Full Stack Developer", 2000,
            "Python Developer", 2000,
            "React Developer", 2000,
            "Problem Solver", 2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
        />
        <p data-aos="fade-down" data-aos-delay="200">
          I build end-to-end web applications using Python, React, Node.js and MySQL.
        </p>
        <a href="#projects" data-aos="fade-up" data-aos-delay="300">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;
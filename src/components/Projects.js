import React from 'react';

const projects = [
  {
  title: "Developer Portfolio Website",
  description: "Personal developer portfolio built with React — features typing animation, scroll animations (AOS), dark/light mode, custom cursor, loading screen, working contact form (EmailJS) and fully responsive design.",
  tech: ["React", "JavaScript", "CSS", "EmailJS"],
  github: "https://ambikaas27.github.io/my-portfolio",

  },
  {
    title: "AI Resume Analyzer",
    description: "A resume analysis tool that compares resumes with job descriptions using keyword matching. Extracts text from PDF resumes, calculates ATS match scores, identifies missing skills and generates personalized improvement suggestions.",
    tech: ["Python", "HTML", "CSS", "Bootstrap", "JavaScript"],
    github: "https://github.com/ambikaas27",
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2 data-aos="fade-up">Projects</h2>
      <div>
        {projects.map((project, index) => (
          <div key={project.title} data-aos="fade-up" data-aos-delay={index * 150}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <a href={project.github} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
import React from 'react';

const projects = [
  {
    title: "Online Education Platform",
    description: "A full-stack Learning Management System with role-based access for students, instructors, and admins. Built with PHP, MySQL, and Python with automated progress reporting.",
    tech: ["PHP", "MySQL", "Python", "JavaScript", "Bootstrap"],
    github: "https://github.com/ambikaas27",
  },
  {
    title: "Developer Portfolio Website",
    description: "A dynamic personal portfolio showcasing projects, skills and experience. Features dark/light mode, smooth animations and a Python backend for the contact form.",
    tech: ["React", "Python", "MySQL", "CSS"],
    github: "https://ambikaas27.github.io/my-portfolio",
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
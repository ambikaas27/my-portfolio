import React from 'react';

const skills = [
  { category: "Languages", items: [
    { name: "Python", level: 75 },
    { name: "PHP", level: 70 },
    { name: "JavaScript", level: 70 },
    { name: "HTML/CSS", level: 90 },
  ]},
  { category: "Frameworks", items: [
    { name: "React", level: 60 },
    { name: "Node.js", level: 50 },
    { name: "Express", level: 50 },
    { name: "Bootstrap", level: 80 },
  ]},
  { category: "Database", items: [
    { name: "MySQL", level: 75 },
  ]},
  { category: "Tools", items: [
    { name: "Git", level: 65 },
    { name: "VS Code", level: 90 },
  ]},
];

function Skills() {
  return (
    <section id="skills">
      <h2 data-aos="fade-up">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={skill.category} className="skill-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <h3>{skill.category}</h3>
            {skill.items.map((item) => (
              <div key={item.name} className="skill-bar-wrapper">
                <div className="skill-bar-label">
                  <span>{item.name}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
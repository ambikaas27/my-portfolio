import React from 'react';

const skills = [
  { category: "Languages", items: ["Python", "PHP", "JavaScript", "HTML", "CSS"] },
  { category: "Frameworks", items: ["React", "Node.js", "Express", "Bootstrap"] },
  { category: "Database", items: ["MySQL"] },
  { category: "Tools", items: ["Git", "VS Code", "Postman"] },
];

function Skills() {
  return (
    <section id="skills">
      <h2 data-aos="fade-up">Technical Skills</h2>
      <div>
        {skills.map((skill, index) => (
          <div key={skill.category} data-aos="fade-up" data-aos-delay={index * 100}>
            <h3>{skill.category}</h3>
            <div>
              {skill.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
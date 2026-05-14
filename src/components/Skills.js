import React from 'react';

const skills = [
  { category: "Languages", items: ["Python", "PHP", "JavaScript", "HTML", "CSS"] },
  { category: "Frameworks", items: ["React", "Node.js", "Express", "Bootstrap"] },
  { category: "Database", items: ["MySQL"] },
  { category: "Tools", items: ["Git", "VS Code"] },
];

function Skills() {
  return (
    <section id="skills">
      <h2>Technical Skills</h2>
      <div>
        {skills.map((skill) => (
          <div key={skill.category}>
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
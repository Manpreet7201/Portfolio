import React from 'react';
import '../CSS/Skills.css';

function SkillsSection() {
  // console.log("SkillsSection is rendered");
  const skills = [
    { name: 'HTML', iconPath: require('../Assets/HTML5.jpg') },
    { name: 'CSS', iconPath: require('../Assets/CSS.png') },
    { name: 'JavaScript', iconPath: require('../Assets/JS.png') },
    { name: 'React', iconPath: require('../Assets/REACT.jpg') },
    { name: 'Figma', iconPath: require('../Assets/FIGMA.jpg') },
    { name: 'GitHub', iconPath: require('../Assets/git-hub.png') },
  ];

  return (
    <section id='skills' className="skills-section">
      <h2>Skills</h2>
      {/* <div className='line'></div> */}
      <div className="skills-container">
        {skills.map(skill => (
          <div className="skill" key={skill.name}>
            <img src={skill.iconPath} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;

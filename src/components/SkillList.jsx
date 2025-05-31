import React from 'react';
import './SkillList.css';

const skills = [
  'UI/UX Design',
  'JavaScript',
  'HTML5',
  'Front End',
  'Web Programming',
];

export default function SkillList() {
  return (
    <section className="skill-list">
      <h3>Skills</h3>
      <ul>
        {skills.map(skill => (
          <li key={skill} className="skill-item">{skill}</li>
        ))}
      </ul>
    </section>
  );
}

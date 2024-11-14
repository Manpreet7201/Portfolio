import React from 'react';
import styled from 'styled-components';
import Image from '../Assets/Website.png';
import Image1 from '../Assets/portfolio.png';
import Image2 from '../Assets/feedback.png';
import Image3 from '../Assets/course.png';
import Image4 from '../Assets/ww.png';
import { FaGithub } from 'react-icons/fa';

// Styled Components
const ExperienceSection = styled.div`
  padding: 80px 40px;
  font-family: 'Times New Roman', Times, serif;
  height: auto;
  width: 100%;
  background: linear-gradient(135deg, #e0eafc, #cfdef3);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin:10px;
  text-align: center;
  color: #413c3c;
  font-weight: 600;
  margin-bottom: 30px;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  justify-content: center;
`;

const Project = styled.div`
  background-color: #fff;
  padding: 30px;
  width: 300px;
  /* height:380px; */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease-in, box-shadow 0.2s ease-in;
  
  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 15px;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  color: #007bff;
  font-weight: 500;
  text-decoration: none;
  gap: 8px;
  transition: color 0.2s ease-in;
  
  &:hover {
    color: #0056b3;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 15px;
`;

const projectData = [
  {
    title: "Travel The World",
    description: "A travel website created with HTML and CSS to showcase world destinations.",
    image: Image,
    link: "https://github.com/Manpreet7201/TravelTheWorld",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Styled Components.",
    image: Image1,
    link: "https://github.com/Manpreet7201/Portfolio",
  },
  {
    title: "FeedForward",
    description: "A Feedback website that able us to give feedbacks on the courses and events designed by our university using HTML, CSS and JavaScript.",
    image: Image2,
    link: "https://github.com/Manpreet7201/Courses-Event_feedback_website",
  },
  {
    title: "EtrenalAlumni Hub (Working on it)",
    description: "A Platform that connects the students to alumni of the university and get get access to their content.",
    image: Image3,
    link: "https://github.com/Manpreet7201/Alumni_Network_website",
  },
  {
    title: "Weather App",
    description: "An application help us to find temperature of any location, created with react.js",
    image: Image4,
    link: "https://github.com/Manpreet7201/Alumni_Network_website",
  },
];

function ExperienceContent() {
  return (
    <ExperienceSection id="experience">
      <SectionTitle>Experience & Projects</SectionTitle>
      
      <ProjectContainer>
        {projectData.map((project, i) => (
          <Project key={i}>
            <ProjectImage src={project.image} alt={`${project.title} Preview`} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink href={project.link} target="_blank">
              <FaGithub /> View on GitHub
            </ProjectLink>
          </Project>
        ))}
      </ProjectContainer>
    </ExperienceSection>
  );
}

export default ExperienceContent;
import React from 'react';
import '../CSS/About.css'; 
import myImage from "../Assets/Preet.jpg"
// import myUni from '../Assets/university.jpg'
// import myCV from '../Assets/Resume.pdf.pdf'
import myCV from '../Assets/MANPREETKAUR_Resume.pdf'

function About() {
  return (
    <section id='about' className='Flex'>

    <section className="about-section">
      <h2>About Me</h2>
      {/* <div className='line'></div> */}
      <div className="about-content">
        <div className="about-image">
          <img src={myImage} alt="Manpreet Kaur" />
        </div>
        <div className="about-text">
          <h3>Hello, I'm Manpreet Kaur</h3>
          <p>
          I am currently pursuing a Bachelor's degree in Computer Science and Engineering at ACET. 
          As a passionate developer, I have a strong interest in web development and enjoy creating modern, 
          responsive websites. My skills span across HTML, CSS, JavaScript, and React, and 
          I'm always eager to learn and explore new technologies. 
          I thrive on solving complex problems and bringing creative ideas to life. Beyond coding, 
          I have a love for gardening, cooking, painting, and listening to music, 
          which help fuel my creativity and passion for life.
            {/* I am currently pursuing my bachelor's degree in Btech CSE from ACET College.
            I am a passionate developer with a keen interest in web development. 
            I enjoy building modern, responsive websites and learning about new technologies. 
            My skills include HTML, CSS, JavaScript, React, and more. 
            I love problem-solving and bringing creative ideas to life. */}
          </p>
          <div>
          <a href={myCV} download="Resume.pdf" className="download-btn"> See My CV </a>
          </div>
        </div>
      </div>
    </section>

    <section id='about' className="education-section">
      <h2>My Education</h2>
      {/* <div className='line'></div> */}
      <div className="education-content">
      
      <div className="education-text">
      <div>
      <h3><span>Currently - </span>Higher Education</h3>
        <p>Bachelor of Technology (B.Tech) in Computer Science and Engineering</p>
        <p>Eternal University - Akal College of Engineering and Technology</p>
        <p> <span  className="location">Location - </span>Baru Sahib, Sirmaur (Himachal Pradesh)</p>
        <p>Expected Graduation: 2025</p>
      </div>

        {/* <div className='line1'></div> */}
       <div>
       <h3>Secondary Education</h3>
        <p>Ajit Public Senior Secondary School (XII), PCM Stream</p>
        <p><span  className="location">Location - </span>Tijara, Alwar (Rajasthan)</p>
        <p>Graduated: 2021</p>
       </div>
      </div>

      {/* <div className="education-image">
        <img src={myUni} alt="Eternal University" />
      </div> */}
      </div>
    </section>

    </section>
    
  );
}

export default About;

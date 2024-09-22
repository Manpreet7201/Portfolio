import React from 'react';
import '../CSS/HomePage.css';


import About from '../Components/About';
import Skills from '../Components/Skills';
// import ExperienceContent from '../Components/ExperienceContent';
// import Contact from '../Components/Contact';
import Header from '../Components/Header'
// import heroImage from '../Assets/BIMage2.jpg'; 
// import image from '../Assets/emoji.jpg'

function HomePage() {
  return (
    <>
      <div className="home-container">
      <Header />
        <section className="content-section">
        <h1> Hey Everyone! &#128075; </h1>
        {/* <h1> Hey Everyone! {'\u2728'} </h1> */}
        {/* <h1> Hey Everyone! <img src='../Assets/emoji.jpg' alt='emoji-image' className="yellow-emoji"></img> </h1> */}
        {/* <h1> Hey Everyone! <img src={image} alt='emoji-image' className="yellow-emoji"></img> </h1> */}
        <h3> I am <span> Manpreet Kaur </span></h3>
        <p> Aspiring <span>Web Developer</span></p>
        </section>
      </div>

 
      <div>
        <About />
      </div>
      
      <div>
        <Skills />
      </div>
      
      {/* <div className="experience-section">
        <ExperienceContent />
      </div>
      
      <div className="contact-section">
        <Contact />
      </div> */}
    </>
  );
}

export default HomePage;

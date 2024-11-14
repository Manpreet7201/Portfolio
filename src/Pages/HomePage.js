// import React, { useEffect, useState } from 'react';
import '../CSS/HomePage.css';
import 'animate.css';
import About from '../Components/About';
import Skills from '../Components/Skills';
import ExperienceContent from '../Components/ExperienceContent';
import Contact from '../Components/Contact';
import Header from '../Components/Header'
// import heroImage from '../Assets/BIMage2.jpg'; 
// import image from '../Assets/emoji.jpg'

function HomePage() {
  // const [animate , setAnimate] = useState(false);
  // useEffect(() => {
  //   const timer = setTimeout(()=>{
  //     setAnimate(true);
  //   },5000);

  //   return () => clearTimeout(timer);
  // },[]);
  return (
    <>
    {/* <Header /> */}
      {/* <div id="home" className="home-container"> */}
      {/* <div  class="animate__animated animate__bounce dream"> Dream  Big</div> */}
      {/* <div  class="dream"> Dream  Big</div> */}
        {/* <section className="content-section">
        <h1> Hey Everyone! &#128075; </h1> */}
        {/* <h1> Hey Everyone! {'\u2728'} </h1> */}
        {/* <h1> Hey Everyone! <img src='../Assets/emoji.jpg' alt='emoji-image' className="yellow-emoji"></img> </h1> */}
        {/* <h1> Hey Everyone! <img src={image} alt='emoji-image' className="yellow-emoji"></img> </h1> */}
        {/* <h3> I am <span> Manpreet Kaur </span></h3>
        <p> Aspiring <span> Web Developer </span></p>
        </section> */}
      {/* </div> */}

      <div id="home" className="home-container">
      <Header />
      <div className="hero-image"></div>
      <div className="background-overlay"></div>

      <div className="dream">Dream Big</div>
      <section className="content-section">
        {/* <h1>Hey Everyone! &#128075;</h1> */}
        <h1> Hi, I am <span>Manpreet Kaur</span></h1>
        <p><span>Front - End Developer</span></p>
      </section>
    </div>

      <div>
        <About />
      </div>
      
      <div>
        <Skills />
      </div>
      
      <div >
        <ExperienceContent />
      </div>
      
      <div>
        <Contact />
      </div>
    </>
  );
}

export default HomePage;

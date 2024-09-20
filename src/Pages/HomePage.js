import React from 'react';
import '../CSS/HomePage.css'

import AboutComponent from '../Components/About'
import SkillsComponent from '../Components/Skills';
import ExperienceComponent from '../Components/ExperienceContent'
import ContactComponent from '../Components/Contact'

function HomePage() {
  return (
    <>
    <div className="home-container">
      <section className="content-section">
      <h1> Hey Everyone! &#128075; </h1>
      <h3> This is <span> Manpreet Kaur </span></h3>
      <p> Aspiring <span>Web Developer</span></p>
      </section>
      </div>
      <section><AboutComponent /></section>
      <section><SkillsComponent /></section>
      <section><ExperienceComponent /></section>
      <section><ContactComponent /></section>
    </>
  );
}

export default HomePage;

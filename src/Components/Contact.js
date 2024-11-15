import React from 'react'
import '../CSS/Contact.css'
import Call from '../Assets/call.jpg'
import Email from '../Assets/email.jpg'

function Contact() {

  const socialLinks = [
    { name: 'Twitter', iconPath: require('../Assets/twitter.jpg'), link: 'https://x.com/Manpree83637345'},
    { name: 'LinkedIn', iconPath: require('../Assets/linkedIn.jpg'), link: 'https://www.linkedin.com/in/manpreet-k-a67b9823a/' },
    { name: 'Instagram', iconPath: require('../Assets/insta.jpg'), link: 'https://www.instagram.com/kaur_manpreet7112/profilecard/?igsh=MWo0Ymx4eWRxeXdmdw=='},
    { name: 'GitHub', iconPath: require('../Assets/git-hub.png'),link: 'https://github.com/Manpreet7201'},
  ];

  return (

    
    <section id='contact' className='contact-container'>
      <h2 className='animate__slideInLeft'> Let's Work Together  ...</h2>
      <div className="Links-container">
        {socialLinks.map(link => (
          <a href={link.link} key={link.name} target="_blank" rel="noreferrer" className="link">
            <img src={link.iconPath} alt={link.name} className="link-icon" loading="lazy" />
            <p className="link-name">{link.name}</p>
          </a>


        ))}
      </div>
      <div className="call-email">
        <div className="call-item">
          <img src={Call} alt="Call" className="call-email-icon" />
          <p className="call-email-text">+91 8447380100</p> 
        </div>
        <div className="email-item">
          <img src={Email} alt="Email" className="call-email-icon" />
          <p className="call-email-text">kaurmanpreet7201@gmail.com</p> 
        </div>
      </div>
    </section>


  )
}

export default Contact
// import React from 'react';
// import '../CSS/Contact.css';

// function Contact() {
  // const socialLinks = [
  //   { name: 'Facebook', iconPath: require('../Assets/facebook.jpg') },
  //   { name: 'Twitter', iconPath: require('../Assets/twitter.jpg')},
  //   { name: 'LinkedIn', iconPath: require('../Assets/linkedIn.jpg') },
  //   { name: 'Instagram', iconPath: require('../Assets/insta.jpg')},
  //   // { name: 'Behance', iconPath: require('../Assets/behance.jpg'), link: 'https://behance.net' },
  // ];

//   return (
//     <section id="contact" className="contact-container">
//       <h2>Let's Work Together...</h2>
//       <div className="links-container">
//         {socialLinks.map((social) => (
//           <a href={social.link} key={social.name} target="_blank" rel="noreferrer" className="link">
//             <img src={social.iconPath} alt={social.name} className="link-icon" />
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Contact;


import React from 'react'
import '../CSS/Contact.css'
import Call from '../Assets/call.jpg'
import Email from '../Assets/email.jpg'

function Contact() {

  const socialLinks = [
    // { name: 'Facebook', iconPath: require('../Assets/facebook.jpg') },
    { name: 'Twitter', iconPath: require('../Assets/twitter.jpg'), link: 'https://x.com/Manpree83637345'},
    { name: 'LinkedIn', iconPath: require('../Assets/linkedIn.jpg'), link: 'https://www.linkedin.com/in/manpreet-k-a67b9823a/' },
    { name: 'Instagram', iconPath: require('../Assets/insta.jpg'), link: 'https://www.instagram.com/kaur_manpreet7112/profilecard/?igsh=MWo0Ymx4eWRxeXdmdw=='},
    { name: 'GitHub', iconPath: require('../Assets/gitHub.jpg'),link: 'https://github.com/Manpreet7201'},
  ];

  // console.log("ContactSection is rendered");
  return (

    
    <section id='contact' className='contact-container'>
      <h2 className='animate__slideInLeft'> Let's Work Together  ...</h2>
      {/* <div className='line'></div> */}
      <div className="Links-container">
        {socialLinks.map(link => (
          <a href={link.link} key={link.name} target="_blank" rel="noreferrer" className="link">
            <img src={link.iconPath} alt={link.name} className="link-icon" loading="lazy" />
            <p className="link-name">{link.name}</p>
          </a>

          //{/* <div key={link.name}>
          //<a href={link.link} key={link.name} target="_blank" rel="noreferrer" className="link">

          //</a>
            //<img src={link.iconPath} alt={link.name} className="link-icon" />
            //<p className='link-name'>{link.name}</p>
          //</div> */}
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
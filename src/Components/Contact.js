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
// import Call from '../Assets/call.jpg'
// import Email from '../Assets/email.jpg'

function Contact() {

  const socialLinks = [
    { name: 'Facebook', iconPath: require('../Assets/facebook.jpg') },
    { name: 'Twitter', iconPath: require('../Assets/twitter.jpg')},
    { name: 'LinkedIn', iconPath: require('../Assets/linkedIn.jpg') },
    { name: 'Instagram', iconPath: require('../Assets/insta.jpg')},
    // { name: 'Behance', iconPath: require('../Assets/behance.jpg'), link: 'https://behance.net' },
  ];

  // console.log("ContactSection is rendered");
  return (

    
    <section id='contact' className='contact-container'>
      <h2 className='animate__slideInLeft'> Let's Work Together  ...</h2>
      {/* <div className='line'></div> */}
      <div className="Links-container">
        {socialLinks.map(link => (
          <div className="link" key={link.name}>
            <img src={link.iconPath} alt={link.name} className="link-icon" />
            <p>{link.name}</p>
          </div>
        ))}
        <div className='call-email'>

        </div>
      </div>
    </section>


  )
}

export default Contact
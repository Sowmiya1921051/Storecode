import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const socialIcons = [
    { icon: faFacebook, link: 'https://facebook.com' },
    { icon: faInstagram, link: 'https://instagram.com' },
    { icon: faLinkedin, link: 'https://linkedin.com' },
  ];

  return (
    <footer className="text-center p-10 ">
      <p >© 2023 All Rights Reserved By StoreCode</p>
      <p >Privacy Policy</p>
      <div className="flex justify-center mt-4">
        {socialIcons.map((socialIcon, index) => (
          <a href={socialIcon.link} target="_blank" rel="noopener noreferrer" key={index} >
            <FontAwesomeIcon icon={socialIcon.icon} style={{ color: '#b43cec' }} className='w-10 h-10 mx-auto p-4' />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;

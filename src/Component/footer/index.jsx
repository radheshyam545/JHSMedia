import React from 'react'; 
import ContactSection from './leftContainer.footer';
import ContactForm from './ContactForm';

const FooterContainer = () => {
  return (
    <footer className="bg-black flex flex-col md:flex-row justify-between items-start p-4">
      <ContactSection className="" />
    </footer>
  );
};

export default FooterContainer;

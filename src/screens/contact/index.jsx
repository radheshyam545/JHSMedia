import React from 'react'
import HeaderSection from './header'
import ContactChildSection from './ContactSection'
import ContactForm from './ContactForm'
import MapWithLocationCard from './MapWithLocationCard'

const ContactSection = () => {
  return (
    <>
      <HeaderSection/>
      <ContactChildSection/>
      <ContactForm/>
      <MapWithLocationCard/>
    </>
  )
}

export default ContactSection

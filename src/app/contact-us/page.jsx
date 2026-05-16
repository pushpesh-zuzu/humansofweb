import React from 'react'
import ContactHero from '../components/ContactUs/ContactHero'
import ContactForm from '../components/ContactUs/ContactForm'

export const metadata = {
  title: "Contact Humans of Web | Grow Your Business Online",
  description:
    "Contact Humans of Web for SEO, PPC, website development, and digital marketing solutions that help your business grow online.",
};

function page() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  )
}

export default page
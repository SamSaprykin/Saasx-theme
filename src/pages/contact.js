import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactMap from "../components/ContactMap/contactMap"
import ContactForm from "../components/ContactForm/contactForm"
import ContactInformation from "../components/ContactInformation/contactInformation"

import { Helmet } from "react-helmet"
const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
    <Helmet>
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
        rel="stylesheet"
      />
    </Helmet> 
    <ContactMap />
    <section class="contact-section bg-grey padding">
      <div class="container">
        <div class="contact-wrap d-flex align-items-center row">
            <ContactInformation />
            <ContactForm />
        </div>
      </div>
    </section>
    
    
  </Layout>
)

export default ContactPage
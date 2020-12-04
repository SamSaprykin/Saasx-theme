import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactComponentsList from "../components/TheSaasComponents/ContactComponents/contactComponents"

const ContactComponentsPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContactComponentsList />
  </Layout>
)

export default ContactComponentsPage
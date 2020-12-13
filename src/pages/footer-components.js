import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FooterComponentsList from "../components/TheSaasComponents/FooterComponents/footerComponents"

const FooterComponentsPage = () => (
  <Layout>
    <SEO title="Home" />
    <FooterComponentsList />
  </Layout>
)

export default FooterComponentsPage
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CtaComponentsList from "../components/TheSaasComponents/CallToActionComponents/callToActionComponents"

const CallToActionComponentsPage = () => (
  <Layout>
    <SEO title="Home" />
    <CtaComponentsList />
  </Layout>
)

export default CallToActionComponentsPage
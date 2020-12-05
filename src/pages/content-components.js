import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentComponentsList from "../components/TheSaasComponents/ContentComponents/contentComponents"

const ConentComponentsPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContentComponentsList />
  </Layout>
)

export default ConentComponentsPage
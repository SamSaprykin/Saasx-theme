import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CoverComponentsList from "../components/TheSaasComponents/CoverComponents/coverComponents"

const CoverComponentsPage = () => (
  <Layout>
    <SEO title="Home" />
    <CoverComponentsList />
  </Layout>
)

export default CoverComponentsPage
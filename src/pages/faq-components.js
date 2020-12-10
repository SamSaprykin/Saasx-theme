import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FaqComponentsList from "../components/TheSaasComponents/FaqComponents/faqComponents"

const FaqComponentsPage = () => (
  <Layout>
    <SEO title="Home" />
    <FaqComponentsList />
  </Layout>
)

export default FaqComponentsPage
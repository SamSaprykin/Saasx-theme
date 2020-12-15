import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PricingComponentList from "../components/TheSaasComponents/PricingComponents/pricingComponents"

const PricingComponentsPage = () => (
  <Layout>
    <SEO title="Home" />
    <PricingComponentList />
  </Layout>
)

export default PricingComponentsPage
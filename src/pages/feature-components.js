import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeatureComponentList from "../components/TheSaasComponents/FeatureComponents/featureComponents"

const FeatureComponentsPage = () => (
  <Layout>
    <SEO title="Home" />
    <FeatureComponentList />
  </Layout>
)

export default FeatureComponentsPage
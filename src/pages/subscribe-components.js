import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SubscribeComponentList from "../components/TheSaasComponents/SubscribeComponents/subscribeComponents"

const SubscribeComponentsPage = () => (
  <Layout>
    <SEO title="Home" />
    <SubscribeComponentList />
  </Layout>
)

export default SubscribeComponentsPage
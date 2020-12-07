import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CounterComponentsList from "../components/TheSaasComponents/CounterComponents/counterComponents"

const ConentComponentsPage = () => (
  <Layout>
    <SEO title="Home" />
    <CounterComponentsList />
  </Layout>
)

export default ConentComponentsPage
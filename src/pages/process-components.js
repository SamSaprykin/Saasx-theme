import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProcessComponentList from "../components/TheSaasComponents/ProcessComponents/processComponents"

const ProcessComponentsPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProcessComponentList />
  </Layout>
)

export default ProcessComponentsPage
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderComponentList from "../components/TheSaasComponents/HeaderComponents/headerComponents"

const HeaderComponentsPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeaderComponentList />
  </Layout>
)

export default HeaderComponentsPage
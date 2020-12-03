import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CareerComponent from "../components/TheSaasComponents/CareerComponents/careerComponent"

const CareerComponentsPage = () => (
  <Layout>
    <SEO title="Home" />
    <CareerComponent />
  </Layout>
)

export default CareerComponentsPage
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader/pageHeader"
import CtaSection from "../components/CtaSection/ctaSection"
import PricingTable from "../components/PricingTable/pricingTable"
import MoneyBackSection from "../components/MoneyBackSection/moneyBackSection"

const PricingPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader />
    <PricingTable />
    <MoneyBackSection />
    <CtaSection />
  </Layout>
)

export default PricingPage
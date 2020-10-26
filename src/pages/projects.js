import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader/pageHeader"
import CtaSection from "../components/CtaSection/ctaSection"
import ProjectsListing from "../components/ProjectsListing/projectsListing"

const FeaturesPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader />
    <ProjectsListing />
    <CtaSection />
  </Layout>
)

export default FeaturesPage
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader/pageHeader"
import ProjectContent from "../components/ProjectContent/projectContent"
import ProjectSkills from "../components/ProjectSkills/projectSkills"
import CtaSection from "../components/CtaSection/ctaSection"

const ProjectPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader />
    <ProjectContent />
    <ProjectSkills />
    <CtaSection />
  </Layout>
)

export default ProjectPage
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader/pageHeader"
import HeroSection from "../components/HeroSection/heroSection"
import FeaturesSection from "../components/FeaturesSection/featuresSection"
import TestimonialSection from "../components/TestimonialSection/testimonialSection"
import CtaSection from "../components/CtaSection/ctaSection"

const FeaturesPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader />
    <FeaturesSection leftSide="true" />
    <HeroSection />
    <TestimonialSection />
    <CtaSection />
  </Layout>
)

export default FeaturesPage
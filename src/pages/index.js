import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroSection from "../components/HeroSection/heroSection"
import FeaturesSection from "../components/FeaturesSection/featuresSection"
import CounterSection from "../components/CounterSection/counterSection"
import ContentSection from "../components/ContentSection/contentSection"
import PricingSection from "../components/PricingSection/pricingSection"
import TestimonialSection from "../components/TestimonialSection/testimonialSection"
import CtaSection from "../components/CtaSection/ctaSection"
import BlogIndex from "../components/BlogIndex/blogIndex"
import SponsorSection from "../components/SponsorSection/sponsorSection"

const IndexPage = props => {
  
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <FeaturesSection leftSide="true" />
      <CounterSection />
      <ContentSection />
      <PricingSection />
      <TestimonialSection />
      <CtaSection />
      <BlogIndex />
      <SponsorSection />
    </Layout>
  )
}


export default IndexPage








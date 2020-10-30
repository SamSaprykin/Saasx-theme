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

const SitePage = props => {
  

  const components = props.data.contentfulContentfulPage.components
  
  return (
    <Layout>
      <SEO title="Home" />
      {components?.map(ele => {
          const type = ele.__typename;
          console.log(ele)
          if (type === 'ContentfulHeroSection') {
            return (
              <HeroSection data={ele}/>
            );
          } else if (type === 'ContentfulFeaturesSection') {
            return <FeaturesSection leftSide="true" data={ele} />;
          } 
        })} 
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


export default SitePage



export const WebsitePageQuery = graphql`
query WebsitePageQuery($slug: String!) {
  contentfulContentfulPage(slug: { eq: $slug }) {
    id
    slug
    components {
      ... on ContentfulHeroSection {
        id
        heroDescription
            heroTitle
            heroSubhead
            heroImage {
              fluid(maxWidth: 700) {
                ...GatsbyContentfulFluid_withWebp
            }
        }
      }
      ... on ContentfulFeaturesSection {
        id
        featuresTitle
        featuresDescription
        featuresSectionItem {
          featuresItemDescription
          featuresItemIconName
          featuresItemTitle
          features_section {
            featuresTitle
            featuresDescription
          }
        }
      }
     
    }
  }
}
`

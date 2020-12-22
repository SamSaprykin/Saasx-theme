import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


import HeaderComponent8 from "../components/TheSaasComponents/HeaderComponents/headerComponent8"
import CareerComponent from "../components/TheSaasComponents/CareerComponents/careerComponent"
import FeatureComponent5 from "../components/TheSaasComponents/FeatureComponents/featureComponent5"

const SaasSitePage = props => {
  const components = props.data.contentfulSaasPage.components
  return (
    <Layout>
      <SEO title="Home" />
        {components?.map(ele => {
          const type = ele.__typename;
          console.log(ele)
          if (type === 'ContentfulSaasHeader') {
            return (
              <HeaderComponent8 data={ele}/>
            );
          } else if (type === "ContentfulSaasCareer") {
            return <CareerComponent data={ele} />
          } else if ( type === 'ContentfulSaasFeauture') {
            return <FeatureComponent5 data={ele} />
          }
        })}

    </Layout>
  )
}


export default SaasSitePage


export const WebsiteSaasQuery = graphql`
query WebsiteSaasQuery($slug: String!) {
    contentfulSaasPage(slug: { eq: $slug }) {
       
            id
            slug
            components {
            ... on ContentfulSaasFeauture {
                id
                dataTabs
                featureDescription
                featureSubhead
                featureTitle
                imagesTabs {
                id
                }
            }
            ... on ContentfulSaasCareer {
                id
                careerTitle
                careerSubhead
                careerDescritption
                saasCareerItem {
                city
                position
                workDescription {
                    workDescription
                  }
                }
            }
            ... on ContentfulSaasHeader {
                id
                headerCta
                headerDescritption
                headerTitle
            }
        }
    }
        
}
`
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"


const BlocsList = () => (
  <Layout>
    <SEO title="Home" />
    <WrapperLinks>
        <Link to="/blog-components">Blog components</Link>
        <Link to="/career-component">Career component</Link>
        <Link to="/contact-components">Contact components</Link>
        <Link to="/content-components">Content components</Link>
        <Link to="/counter-components">Counter components</Link>
        <Link to="/cover-components">Cover components</Link>
        <Link to="/cta-components">Cta components</Link>
        <Link to="/faq-components">Faq components</Link>
    </WrapperLinks>
    
  </Layout>
)

export default BlocsList


const WrapperLinks = styled.div`
    display:flex;
    flex-direction:column;
    margin:100px auto;
    width:100%;
    max-width:1140px;
    a {
        font-size:24px;
        font-family:Dosis;
    }
`
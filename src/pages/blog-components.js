import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogComponentsList from "../components/TheSaasComponents/BlogComponents/blogComponents"

const BlogComponents = () => (
  <Layout>
    <SEO title="Home" />
    <BlogComponentsList />
  </Layout>
)

export default BlogComponents
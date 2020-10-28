import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader/pageHeader"
import BlogPostSections from "../components/BlogPostSections/blogPostSections"
import SideBar from "../components/SideBar/sideBar"

const BlogPost = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader />
    <section className="blog-section padding">
		    <div className="container">
		        <div className="blog-wrap row">
              <BlogPostSections />
              <SideBar />
            </div>
        </div>
    </section>
  </Layout>
)

export default BlogPost
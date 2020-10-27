import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader/pageHeader"
import BlogGrid from "../components/BlogGrid/blogGrid"
import SideBar from "../components/SideBar/sideBar"

const BlogListing = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader />
    <section className="blog-section padding">
		    <div className="container">
		        <div className="blog-wrap row">
              <BlogGrid paginationPosition="center" />
              <SideBar />
            </div>
        </div>
    </section>
  </Layout>
)

export default BlogListing
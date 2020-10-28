import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader/pageHeader"
import BlogGrid from "../components/BlogGrid/blogGrid"
import SideBar from "../components/SideBar/sideBar"

const BlogListing = props => {
  console.log(props.data.allContentfulBlogPost.edges)
  const postsData = props.data.allContentfulBlogPost.edges
  return (
  <Layout>
    <SEO title="Home" />
    <PageHeader />
    <section className="blog-section padding">
		    <div className="container">
		        <div className="blog-wrap row">
              <BlogGrid 
                paginationPosition="center" 
                postsData={postsData} 
              />
              <SideBar />
            </div>
        </div>
    </section>
  </Layout>
  )
}


export default BlogListing


export const contentfulBlogPageQuery = graphql`
  query blogMainPageQuery($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(skip: $skip, limit: $limit) {
      edges {
        node {
          id
          blogTags
          categories
          createdAt
          slug
          blogPostBody {
            blockquotePost {
              blockquoteAuthor
              blockquoteText {
                blockquoteText
              }
            }
            blogTitle
            conclusion
            blogThumbnail {
              fluid(maxWidth: 700) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
          blogPostAuthor {
            authorName
            authorInformation
            authorPhoto{
              fluid(maxWidth: 100) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

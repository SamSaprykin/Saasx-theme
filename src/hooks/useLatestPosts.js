import { graphql, useStaticQuery } from "gatsby"

const useLatestPosts = () => {
  const { allContentfulBlogPost } = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(limit:3,sort: {fields: createdAt, order: DESC}) {
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
  )
  return allContentfulBlogPost?.edges
}
export default useLatestPosts
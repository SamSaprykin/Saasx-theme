const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

   
   /* Create pages from Read Listing Template */
   const blogListingPage = new Promise((resolve, reject) => {
    graphql(`
      query {
        allContentfulBlogPost {
          edges {
            node {
                blogTags
                categories
                blogPostBody {
                    blogTitle
                }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      const blogListingData = result.data.allContentfulBlogPost.edges
      const blogCardsPerPage = 9
      const numPages = Math.ceil(blogListingData.length / blogCardsPerPage)
      const categorySet = new Set()
      
      blogListingData.forEach(post => {
        
        post.node.categories.forEach(category => {
          categorySet.add(category)
        })
      })
     
      const blogCategoryList = Array.from(categorySet)
      
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/blog` : `/blog/${i + 1}`,
          component: path.resolve(`./src/templates/blog-listing.js`),
          context: {
            limit: blogCardsPerPage,
            skip: i * blogCardsPerPage,
            numPages,
            currentPage: i + 1,
            categoryList: blogCategoryList,
          },
        })
      })
  
      blogCategoryList.forEach((category, i) => {
        const categoryPosts = []
        for (let j = 0; j < blogListingData.length; j++) {
          if (
            category.toLowerCase() != "uncategorized" &&
            blogListingData[j].node.categories == category
          ) {
            categoryPosts.push(blogListingData[j])
          }
        }
    
        let blogCategoryNumPages = Math.ceil(
          categoryPosts.length / blogCardsPerPage
        )
    
        Array.from({ length: blogCategoryNumPages }).forEach((_, k) => {
          let newCat = category.replace(/\s/g, '_')
          createPage({
            path:
              k === 0
                ? `/blog/${newCat.toLowerCase()}`
                : `/blog/${newCat.toLowerCase()}/${k + 1}`,
            component: path.resolve(`./src/templates/blog-category-listing.js`),
            context: {
              limit: blogCardsPerPage,
              skip: k * blogCardsPerPage,
              pressNumPages: blogCategoryNumPages,
              currentPage: k + 1,
              categoryList: blogCategoryList,
              category,
              slugPrefix: `/blog/${newCat.toLowerCase()}`,
            },
          })
        })
      })
  
      resolve()
    })
  })
  
   
    
    /* ======================================================================== */
    /* Create pages from Read Page Template */
  
    const blogPage = new Promise((resolve, reject) => {
      graphql(`
        query {
          allContentfulBlogPost {
            edges {
              node {
                blogTags
                slug
                categories
                blogPostBody {
                  blogTitle
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        
        
        result.data.allContentfulBlogPost.edges.forEach((edge, index) => {
          createPage({
            path: `/blog/${edge.node.slug}`,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
              currentCat: `${edge.node.blogCategory}`,
            },
          })
        })
        resolve()
      })
    })
  
  
  
    return Promise.all([
      blogListingPage,
      blogPage,
    ])
  }

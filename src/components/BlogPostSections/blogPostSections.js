import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import PostBody from "./PostBody/postBody"
import PostAuthor from "./PostAuthor/postAuthor"
import PostNavigation from "./PostNavigation/postNavigation"
import PostComments from "./PostComments/postComments"
import PostCommentForm from "./PostCommentForm/postCommentForm"

const BlogPostSections = () => {

return (
    <div className="col-lg-8 padding-15">
        <div className="blog-single-wrap">
            <div className="blog-single-content">
                <PostBody />
                <PostAuthor />
                <PostNavigation />
                <PostComments />
                <PostCommentForm />
            </div>
        </div>
    </div>
    
    )
}


BlogPostSections.propTypes = {
  
}

BlogPostSections.defaultProps = {
  
}

export default BlogPostSections
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./postCommentForm.css"

const PostCommentForm = () => (
  <>
    <div className="comment-respond">
        <h3 className="comment-reply-title">Write a Comment</h3>
        <form method="post" id="commentform" className="comment-form">
            <div className="form-textarea">
                <textarea id="comment" placeholder="Write Your Comments..."></textarea>
            </div>
            <div className="form-inputs">
                <input placeholder="Website" type="url" />
                <input placeholder="Name" type="text" />
                <input placeholder="Email" type="email" />
            </div>
            <div className="form-submit">
                <input id="submit" value="Post Comment" type="submit" />
            </div>
        </form>
    </div>
  </>
)

PostCommentForm.propTypes = {
  
}

PostCommentForm.defaultProps = {
  
}

export default PostCommentForm








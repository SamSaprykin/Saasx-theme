import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./postNavigation.css"

const PostNavigation = () => (
  <>
    <div class="post-navigation row">
        <div className="col prev-post">
            <a href="#"><i className="ti-arrow-left"></i>Prev Post</a>
        </div>
        <div className="col next-post">
            <a href="#">Next Post <i className="ti-arrow-right"></i></a>
        </div>
    </div>
  </>
)

PostNavigation.propTypes = {
  
}

PostNavigation.defaultProps = {
  
}

export default PostNavigation
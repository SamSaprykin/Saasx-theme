import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./recentPosts.css"

const RecentPosts = () => (
  <>
    <div className="widget-content">
        <h4>Recent Posts</h4>
        <ul className="thumb-post">
            <li><img src="https://via.placeholder.com/100x56.png?text=SaasX" alt="post" /><a href="#">Minimalist trending in modern architecture 2019</a></li>
            <li><img src="https://via.placeholder.com/100x56.png?text=SaasX" alt="post" /><a href="#">Terrace in the town kentaro design workshop.</a></li>
            <li><img src="https://via.placeholder.com/100x56.png?text=SaasX" alt="post" /><a href="#">W270 house são arquitetos fabio architeqture.</a></li>
        </ul>
    </div>
  </>
)

RecentPosts.propTypes = {
  
}

RecentPosts.defaultProps = {
  
}

export default RecentPosts
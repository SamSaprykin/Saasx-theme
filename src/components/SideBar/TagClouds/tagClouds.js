import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./tagClouds.css"

const TagClouds = () => (
  <>
   <div className="widget-content">
        <h4>Tag Clouds</h4>
        <ul className="tags">
            <li><a href="#">Architecture</a></li>
            <li><a href="#">Interior Design</a></li>
            <li><a href="#">Designing</a></li>
            <li><a href="#">Construction</a></li>
            <li><a href="#">Buildings</a></li>
            <li><a href="#">Industrial</a></li>
            <li><a href="#">Factory</a></li>
            <li><a href="#">Material</a></li>
        </ul>
    </div>
  </>
)

TagClouds.propTypes = {
  
}

TagClouds.defaultProps = {
  
}

export default TagClouds
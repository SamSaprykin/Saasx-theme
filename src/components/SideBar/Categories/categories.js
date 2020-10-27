import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./categories.css"

const Categories = () => (
  <>
    <div className="widget-content">
        <h4>Categories</h4>
        <ul className="widget-links">
            <li><a href="#">Architecture</a></li>
            <li><a href="#">Interior Design</a></li>
            <li><a href="#">Designing</a></li>
            <li><a href="#">Construction</a></li>
            <li><a href="#">Buildings</a></li>
        </ul>
    </div>
  </>
)

Categories.propTypes = {
  
}

Categories.defaultProps = {
  
}

export default Categories
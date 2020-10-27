import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./blogPagination.css"

const BlogPagination = ({position}) => {
  
  return (
    <ul className={`pagination-wrap text-${position} mt-30`}>
      <li><a href="#"><i className="ti-arrow-left"></i></a></li>
      <li><a href="#">1</a></li>
      <li><a href="#" className="active">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#"><i className="ti-arrow-right"></i></a></li>
    </ul>
  )
}


BlogPagination.propTypes = {
  
}

BlogPagination.defaultProps = {
  
}

export default BlogPagination
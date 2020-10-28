import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"


const BlogPagination = ({position}) => {
  
  return (
    <Pagination position={position} >
      <li><StyledLink to="/"><i className="ti-arrow-left"></i></StyledLink></li>
      <li><StyledLink to="/">1</StyledLink></li>
      <li><StyledLink to="/" className="active">2</StyledLink></li>
      <li><StyledLink to="/">3</StyledLink></li>
      <li><StyledLink to="/"><i className="ti-arrow-right"></i></StyledLink></li>
    </Pagination>
  )
}

const Pagination = styled.ul`
  li {
    display: inline-block;
    margin: 0 5px;
  }
  margin-top: 30px;
  text-align: ${({ position }) => {
    if (position === "left") return "left"
    if (position === "center") return "center"
  }};
`

const StyledLink = styled(Link)`
  border: 1px solid #e5e5e5;
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 38px;
  text-align: center;
  color: #263a4f;
  font-weight: 600;
  border-radius: 2px;
  :hover {
    background-color: #2550de;
    color: #fff;
    opacity: 1;
    text-decoration: none;
  }
  :active {
    background-color: #2550de;
    border: 1px solid #2550de;
    color: #fff;
  }
`


BlogPagination.propTypes = {
  
}

BlogPagination.defaultProps = {
  
}

export default BlogPagination
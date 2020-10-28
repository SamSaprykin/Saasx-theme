import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import styled from "styled-components"

const TagClouds = () => (
  <>
    <div>
        <CloudsTitle>Tag Clouds</CloudsTitle>
        <Tags className="tags">
          <li><a href="#">Architecture</a></li>
          <li><a href="#">Interior Design</a></li>
          <li><a href="#">Designing</a></li>
          <li><a href="#">Construction</a></li>
          <li><a href="#">Buildings</a></li>
          <li><a href="#">Industrial</a></li>
          <li><a href="#">Factory</a></li>
          <li><a href="#">Material</a></li>
        </Tags>
    </div>
  </>
)

const Tags = styled.ul`
  li {
    display: inline-block;
    a{
      display: inline-block;
      background-color: #2550de;
      padding: 5px 10px;
      border-radius: 2px;
      font-size: 12px;
      color: #fff;
      margin: 3px;
      :hover {
        background-color: #263a4f;
        color: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }
    }
  }
`

const CloudsTitle = styled.h4`
  font-weight:600;
`

TagClouds.propTypes = {
  
}

TagClouds.defaultProps = {
  
}

export default TagClouds
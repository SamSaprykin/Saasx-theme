import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

const Categories = () => (
  <>
    <WidgetContent >
        <h4>Categories</h4>
        <WidgetLinks className="widget-links">
            <li><a href="#">Architecture</a></li>
            <li><a href="#">Interior Design</a></li>
            <li><a href="#">Designing</a></li>
            <li><a href="#">Construction</a></li>
            <li><a href="#">Buildings</a></li>
        </WidgetLinks>
    </WidgetContent>
  </>
)

const WidgetContent = styled.div`
  margin-top:20px;
  :not(:last-of-type){
    margin-bottom: 40px;
  }
  h4{
    position: relative;
    margin-bottom: 30px;
    font-weight:600;
    :before{
      background-color: #2550de;
      position: absolute;
      content: "";
      width: 20%;
      height: 3px;
      left: 0;
      bottom: -5px;
    }
  }
`

const WidgetLinks = styled.ul`
  a {
    color: #6a7695;
    line-height: 1.9;
    :hover {
      text-decoration: underline;
      color: #2550de;
      transition: all .5s;
    }
  }
`

Categories.propTypes = {
  
}

Categories.defaultProps = {
  
}

export default Categories
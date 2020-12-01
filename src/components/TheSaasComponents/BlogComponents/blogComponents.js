import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import BlogComponents1 from "./blogComponent1"
import BlogComponents2 from "./blogComponent2"

const BlogComponentsList = ({cardData}) => {
    
    return (
        <ComponentsWrapper>
            <BlogComponents1 />
            <BlogComponents2 />
        </ComponentsWrapper>
    )
}

const ComponentsWrapper = styled.div`
    margin-top:120px;
`

BlogComponentsList.propTypes = {
  
}

BlogComponentsList.defaultProps = {
  
}

export default BlogComponentsList
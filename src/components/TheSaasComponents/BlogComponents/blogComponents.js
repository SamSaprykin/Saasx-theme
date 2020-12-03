import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import BlogComponents1 from "./blogComponent1"
import BlogComponents2 from "./blogComponent2"
import BlogComponents3 from "./blogComponent3"
import BlogComponents4 from "./blogComponent4"
import BlogComponents5 from "./blogComponent5"
import BlogComponents6 from "./blogComponent6"
import BlogComponents7 from "./blogComponent7"
import BlogComponents8 from "./blogComponent8"
import BlogComponents9 from "./blogComponent9"
import BlogComponents10 from "./blogComponent10"

const BlogComponentsList = ({cardData}) => {
    
    return (
        <ComponentsWrapper>
            <BlogComponents1 />
            <BlogComponents2 />
            <BlogComponents3 />
            <BlogComponents4 />
            <BlogComponents5 />
            <BlogComponents6 />
            <BlogComponents7 />
            <BlogComponents8 />
            <BlogComponents9 />
            <BlogComponents10 />
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
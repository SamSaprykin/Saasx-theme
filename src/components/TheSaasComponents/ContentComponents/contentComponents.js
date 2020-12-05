import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import ContentComponents1 from "./contentComponent1"
import ContentComponents2 from "./contentComponent2"
import ContentComponents3 from "./contentComponent3"
import ContentComponents4 from "./contentComponent4"
import ContentComponents5 from "./contentComponent5"


const ContentComponentsList = ({cardData}) => {
    
    return (
        <ComponentsWrapper>
            <ContentComponents1 />
            <ContentComponents2 />
            <ContentComponents3 />
            <ContentComponents4 />
            <ContentComponents5 />
        </ComponentsWrapper>
    )
}

const ComponentsWrapper = styled.div`
    margin-top:120px;
`

ContentComponentsList.propTypes = {
  
}

ContentComponentsList.defaultProps = {
  
}

export default ContentComponentsList
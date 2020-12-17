import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import ProcessComponent1 from "./processComponent1"
import ProcessComponent2 from "./processComponent2"
import ProcessComponent3 from "./processComponent3"
import ProcessComponent4 from "./processComponent4"


const ProcessComponentList = ({cardData}) => {
    
    return (
        <ComponentsWrapper>
            <ProcessComponent1 />
            <ProcessComponent2 />
            <ProcessComponent3 />
            <ProcessComponent4 />
        </ComponentsWrapper>
    )
}

const ComponentsWrapper = styled.div`
    margin-top:120px;
`

ProcessComponentList.propTypes = {
  
}

ProcessComponentList.defaultProps = {
  
}

export default ProcessComponentList
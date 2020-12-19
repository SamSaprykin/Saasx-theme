import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import SubscribeComponent1 from "./subscribeComponent1"
import SubscribeComponent2 from "./subscribeComponent2"
import SubscribeComponent3 from "./subscribeComponent3"
import SubscribeComponent4 from "./subscribeComponent4"
import SubscribeComponent5 from "./subscribeComponent5"
import SubscribeComponent6 from "./subscribeComponent6"


const SubscribeComponentList = ({cardData}) => {
    
    return (
        <ComponentsWrapper>
            <SubscribeComponent1 />
            <SubscribeComponent2 />
            <SubscribeComponent3 />
            <SubscribeComponent4 />
            <SubscribeComponent5 />
            <SubscribeComponent6 />
        </ComponentsWrapper>
    )
}

const ComponentsWrapper = styled.div`
    margin-top:120px;
`

SubscribeComponentList.propTypes = {
  
}

SubscribeComponentList.defaultProps = {
  
}

export default SubscribeComponentList
import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import PricingComponent1 from "./pricingComponent1"
import PricingComponent2 from "./pricingComponent2"
import PricingComponent3 from "./pricingComponent3"
import PricingComponent4 from "./pricingComponent4"
import PricingComponent5 from "./pricingComponent5"
import PricingComponent6 from "./pricingComponent6"
import PricingComponent7 from "./pricingComponent7"


const PricingComponentList = ({cardData}) => {
    
    return (
        <ComponentsWrapper>
            <PricingComponent1 />
            <PricingComponent2 />
            <PricingComponent3 />
            <PricingComponent4 />
            <PricingComponent5 />
            <PricingComponent6 />
            <PricingComponent7 />
        </ComponentsWrapper>
    )
}

const ComponentsWrapper = styled.div`
    margin-top:120px;
`

PricingComponentList.propTypes = {
  
}

PricingComponentList.defaultProps = {
  
}

export default PricingComponentList
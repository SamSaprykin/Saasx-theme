import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import FeatureComponent1 from "./featureComponent1"
import FeatureComponent2 from "./featureComponent2"
import FeatureComponent3 from "./featureComponent3"
import FeatureComponent4 from "./featureComponent4"
import FeatureComponent5 from "./featureComponent5"
import FeatureComponent6 from "./featureComponent6"
import FeatureComponent7 from "./featureComponent7"
import FeatureComponent8 from "./featureComponent8"
import FeatureComponent9 from "./featureComponent9"
import FeatureComponent10 from "./featureComponent10"
import FeatureComponent11 from "./featureComponent11"
import FeatureComponent12 from "./featureComponent12"
import FeatureComponent13 from "./featureComponent13"
import FeatureComponent14 from "./featureComponent14"
import FeatureComponent15 from "./featureComponent15"
import FeatureComponent16 from "./featureComponent16"


const FeatureComponentList = ({cardData}) => {
    
    return (
        <ComponentsWrapper>
            <FeatureComponent1 />
            <FeatureComponent2 />
            <FeatureComponent3 />
            <FeatureComponent4 />
            <FeatureComponent5 />
            <FeatureComponent6 />
            <FeatureComponent7 />
            <FeatureComponent8 />
            <FeatureComponent9 />
            <FeatureComponent10 />
            <FeatureComponent11 />
            <FeatureComponent12 />
            <FeatureComponent13 />
            <FeatureComponent14 />
            <FeatureComponent15 />
            <FeatureComponent16 />
        </ComponentsWrapper>
    )
}

const ComponentsWrapper = styled.div`
    margin-top:120px;
`

FeatureComponentList.propTypes = {
  
}

FeatureComponentList.defaultProps = {
  
}

export default FeatureComponentList
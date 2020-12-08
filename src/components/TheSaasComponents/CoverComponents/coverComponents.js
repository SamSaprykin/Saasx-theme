import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import CoverComponents1 from "./coverComponent1"
import CoverComponents2 from "./coverComponent2"
import CoverComponents3 from "./coverComponent3"
import CoverComponents4 from "./coverComponent4"
import CoverComponents5 from "./coverComponent5"
import CoverComponents6 from "./coverComponent6"
import CoverComponents7 from "./coverComponent7"
import CoverComponents8 from "./coverComponent8"
import CoverComponents9 from "./coverComponent9"
import CoverComponents10 from "./coverComponent10"
import CoverComponents11 from "./coverComponent11"
import CoverComponents12 from "./coverComponent12"
import CoverComponents13 from "./coverComponent13"
import CoverComponents14 from "./coverComponent14"
import CoverComponents15 from "./coverComponent15"
import CoverComponents16 from "./coverComponent16"


const CoverComponentsList = ({cardData}) => {
    
    return (
        <ComponentsWrapper>
            <CoverComponents1 />
            <CoverComponents2 />
            <CoverComponents3 />
            <CoverComponents4 />
            <CoverComponents5 />
            <CoverComponents6 />
            <CoverComponents7 />
            <CoverComponents8 />
            <CoverComponents9 />
            <CoverComponents10 />
            <CoverComponents11 />
            <CoverComponents12 />
            <CoverComponents13 />
            <CoverComponents14 />
            <CoverComponents15 />
            <CoverComponents16 />
        </ComponentsWrapper>
    )
}

const ComponentsWrapper = styled.div`
    margin-top:120px;
`

CoverComponentsList.propTypes = {
  
}

CoverComponentsList.defaultProps = {
  
}

export default CoverComponentsList
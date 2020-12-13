import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import FooterComponent1 from "./footerComponent1"
import FooterComponent2 from "./footerComponent2"
import FooterComponent3 from "./footerComponent3"
import FooterComponent4 from "./footerComponent4"
import FooterComponent5 from "./footerComponent5"
import FooterComponent6 from "./footerComponent6"
import FooterComponent7 from "./footerComponent7"
import FooterComponent8 from "./footerComponent8"
import FooterComponent9 from "./footerComponent9"
import FooterComponent10 from "./footerComponent10"
import FooterComponent11 from "./footerComponent11"
import FooterComponent12 from "./footerComponent12"



const FooterComponentList = ({cardData}) => {
    
    return (
        <ComponentsWrapper>
            <FooterComponent1 />
            <FooterComponent2 />
            <FooterComponent3 />
            <FooterComponent4 />
            <FooterComponent5 />
            <FooterComponent6 />
            <FooterComponent7 />
            <FooterComponent8 />
            <FooterComponent9 />
            <FooterComponent10 />
            <FooterComponent11 />
            <FooterComponent12 />
        </ComponentsWrapper>
    )
}

const ComponentsWrapper = styled.div`
    margin-top:120px;
`

FooterComponentList.propTypes = {
  
}

FooterComponentList.defaultProps = {
  
}

export default FooterComponentList
import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import HeaderComponent1 from "./headerComponent1"
import HeaderComponent2 from "./headerComponent2"
import HeaderComponent3 from "./headerComponent3"
import HeaderComponent4 from "./headerComponent4"
import HeaderComponent5 from "./headerComponent5"
import HeaderComponent6 from "./headerComponent6"
import HeaderComponent7 from "./headerComponent7"
import HeaderComponent8 from "./headerComponent8"
import HeaderComponent9 from "./headerComponent9"




const HeaderComponentList = ({cardData}) => {
    
    return (
        <ComponentsWrapper>
            <HeaderComponent1 />
            <HeaderComponent2 />
            <HeaderComponent3 />
            <HeaderComponent4 />
            <HeaderComponent5 />
            <HeaderComponent6 />
            <HeaderComponent7 />
            <HeaderComponent8 />
            <HeaderComponent9 />
        </ComponentsWrapper>
    )
}

const ComponentsWrapper = styled.div`
    margin-top:120px;
`

HeaderComponentList.propTypes = {
  
}

HeaderComponentList.defaultProps = {
  
}

export default HeaderComponentList
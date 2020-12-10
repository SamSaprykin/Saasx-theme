import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import CtaComponent1 from "./callToActionComponent1"
import CtaComponent2 from "./callToActionComponent2"
import CtaComponent3 from "./callToActionComponent3"
import CtaComponent4 from "./callToActionComponent4"
import CtaComponent5 from "./callToActionComponent5"
import CtaComponent6 from "./callToActionComponent6"
import CtaComponent7 from "./callToActionComponent7"
import CtaComponent8 from "./callToActionComponent8"
import CtaComponent9 from "./callToActionComponent9"


const CtaComponentsList = ({ cardData }) => {

    return (
        <ComponentsWrapper>
            <CtaComponent1 />
            <CtaComponent2 />
            <CtaComponent3 />
            <CtaComponent4 />
            <CtaComponent5 />
            <CtaComponent6 />
            <CtaComponent7 />
            <CtaComponent8 />
            <CtaComponent9 />
        </ComponentsWrapper>
    )
}

const ComponentsWrapper = styled.div`
    margin-top:120px;
`

CtaComponentsList.propTypes = {

}

CtaComponentsList.defaultProps = {

}

export default CtaComponentsList
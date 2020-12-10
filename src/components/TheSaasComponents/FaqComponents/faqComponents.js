import React from "react"
import styled from "styled-components"
import FaqComponent1 from "./faqComponent1"
import FaqComponent2 from "./faqComponent2"
import FaqComponent3 from "./faqComponent3"



const FaqComponentsList = ({ cardData }) => {

    return (
        <ComponentsWrapper>
            <FaqComponent1 />
            <FaqComponent2 />
            <FaqComponent3 />
        </ComponentsWrapper>
    )
}

const ComponentsWrapper = styled.div`
    margin-top:120px;
`

FaqComponentsList.propTypes = {

}

FaqComponentsList.defaultProps = {

}

export default FaqComponentsList
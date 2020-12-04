import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import ContactComponents1 from "./contactComponent1"
import ContactComponents2 from "./contactComponent2"
import ContactComponents3 from "./contactComponent3"
import ContactComponents4 from "./contactComponent4"
import ContactComponents5 from "./contactComponent5"
import ContactComponents6 from "./contactComponent6"
import ContactComponents7 from "./contactComponent7"
import ContactComponents8 from "./contactComponent8"
import ContactComponents9 from "./contactComponent9"


const ContactComponentsList = ({cardData}) => {
    
    return (
        <ComponentsWrapper>
            <ContactComponents1 />
            <ContactComponents2 />
            <ContactComponents3 />
            <ContactComponents4 />
            <ContactComponents5 />
            <ContactComponents6 />
            <ContactComponents7 />
            <ContactComponents8 />
            <ContactComponents9 />
        </ComponentsWrapper>
    )
}

const ComponentsWrapper = styled.div`
    margin-top:120px;
`

ContactComponentsList.propTypes = {
  
}

ContactComponentsList.defaultProps = {
  
}

export default ContactComponentsList
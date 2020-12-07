import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import CounterComponents1 from "./counterComponent1"
import CounterComponents2 from "./counterComponent2"
import CounterComponents3 from "./counterComponent3"
import CounterComponents4 from "./counterComponent4"



const CounterComponentsList = ({cardData}) => {
    
    return (
        <ComponentsWrapper>
            <CounterComponents1 />
            <CounterComponents2 />
            <CounterComponents3 />
            <CounterComponents4 />
        </ComponentsWrapper>
    )
}

const ComponentsWrapper = styled.div`
    margin-top:120px;
`

CounterComponentsList.propTypes = {
  
}

CounterComponentsList.defaultProps = {
  
}

export default CounterComponentsList
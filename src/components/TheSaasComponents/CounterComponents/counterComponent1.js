import React from "react"
import styled from "styled-components"
import CountUp, {startAnimation} from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
const counterData =  [
    {
        title:100,
        descritption:"PAGE",
    },
    {
        title:250,
        descritption:"BLOCK",
    },
    {
        title:330,
        descritption:"COMPONENT",
    },
    {
        title:430,
        descritption:"ELEMENT",
    }
]

const CounterComponents1 = () => {
      
    return (
      <>
        <BlockHeader>Block 1</BlockHeader>

        <SectionBackground>
            <Container>
                <StyledRow>
                    {
                        counterData.map((counterItem,index) => {
                            return (
                                <Item key={index} className="col-6 col-lg-3">
                                    
                                    <CountUp end={counterItem.title} >
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <TitleItem ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                    </CountUp>
                                    <DescriptionItem>{counterItem.descritption}</DescriptionItem>
                                </Item>
                            )
                        })
                    }
                </StyledRow>
            </Container>
        </SectionBackground>
      </>
    )
}



const BlockHeader = styled.h5`
    text-align: center;
    font-weight: 500;
    font-size: 0.8125em;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family:Dosis;
    margin-block-start: 2.33em;
    ::after {
        content: '';
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 6px;
        margin-bottom: 2px;
        border-left: 3px solid transparent;
        border-right: 3px solid transparent;
        border-top: 3px solid #191919;
    }
`



const SectionBackground = styled.div`
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 30px 20px 100px;
    background-color: #363636;
    padding-top: 7rem;
    padding-bottom: 7rem;
    border: 1px solid #f5f6f7;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
`
const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    @media (min-width: 576px) {
        max-width: 540px;
    }
    @media (min-width: 768px) {
        max-width: 750px;
    }
    @media (min-width: 992px) {
        max-width: 970px;
    }
    @media (min-width: 1200px) {
        max-width: 1140px;
    }
`

const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    align-items:center;
`

const Item = styled.div`
    text-align:center;
`

const TitleItem = styled.h5`
    color:rgba(255,255,255,0.85);
    font-size: 3.75rem !important;
    font-family:Open Sans;
    font-weight: 300;
`

const DescriptionItem = styled.span`
    color: rgba(255,255,255,0.8);
    letter-spacing: 2px;
    text-transform: uppercase !important;
`


CounterComponents1.propTypes = {
  
}

CounterComponents1.defaultProps = {
  
}

export default CounterComponents1
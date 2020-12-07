import React from "react"
import styled from "styled-components"
import CountUp, {startAnimation} from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
const counterData =  [
  {
      title:42,
      descritption:"FINISHED PROJECTS",
  },
  {
      title:3500,
      descritption:"HAPPY CUSTOMERS",
  },
  {
      title:100,
      descritption:"USER SATISFACTION",
      percent:true,
  },
]

const CounterComponents2 = () => {

    return (
      <>
        <BlockHeader>Block 2</BlockHeader>

        <SectionBackground>
            <Container>
                <StyledRow>
                    {
                        counterData.map((counterItem,index) => {
                            return (
                                <Item key={index} className="col-md-4">
                                    <DescriptionItem>{counterItem.descritption}</DescriptionItem>
                                    <WrapperCount>
                                    <CountUp end={counterItem.title} >
                                            
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <TitleItem ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                            
                                    </CountUp>
                                    {
                                      counterItem.percent? <TitleItem> % </TitleItem> : null
                                    }
                                    </WrapperCount>
                                    
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
    background-color: #1b8bf9;
    padding-top: 7rem;
    padding-bottom: 7rem;
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
    font-weight:700;
`


const DescriptionItem = styled.span`
    color: rgba(255,255,255,0.8);
    letter-spacing: 2px;
    text-transform: uppercase !important;
    font-size:12.75px;
    font-family:Open Sans;
    margin-bottom: 1rem;
    display:block;
`
const WrapperCount = styled.div`
    display:flex;
    text-align:center;
    justify-content:center;
`

CounterComponents2.propTypes = {
  
}

CounterComponents2.defaultProps = {
  
}

export default CounterComponents2
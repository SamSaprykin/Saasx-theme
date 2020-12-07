import React from "react"
import styled from "styled-components"

import CountUp, {startAnimation} from "react-countup"
import VisibilitySensor from "react-visibility-sensor"

const counterData =  [
  {
    title:100,
    descritption:"Unique Page",
    icon_name:"icon-document"
  },
  {
    title:250,
    descritption:"Block Variety",
    icon_name:"icon-layers",
  },
  {
    title:330,
    descritption:"Reusable Component",
    icon_name:"icon-tools",
  },
  {
    title:430,
    descritption:"Crafted Element",
    icon_name:"icon-genius",
  },
]

const CounterComponents3 = () => {

    return (
      <>
        <BlockHeader>Block 3</BlockHeader>

        <SectionBackground>
          <Container>
              <StyledRow>
                  {
                      counterData.map((counterItem,index) => {
                          return (
                              <Item key={index} className="col-md-6 col-lg-3">
                                <WrapperContent>
                                  <i className={counterItem.icon_name} />
                                  <CountUp end={counterItem.title} >
                                          {({ countUpRef, start }) => (
                                              <VisibilitySensor onChange={start} delayedCall>
                                                  <TitleItem ref={countUpRef} />
                                              </VisibilitySensor>
                                          )}
                                  </CountUp>
                                </WrapperContent>
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
    font-size: 2.34375rem !important;
    font-family:Dosis;
    font-weight: 400;
    color: #323d47;
    letter-spacing: 0.5px;
    margin-bottom: 0 !important;
`

const DescriptionItem = styled.span`
    color: #bfc5ca !important;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.9;
    font-family:Open Sans;
    margin-bottom: 1rem;
    display:block;
`

const WrapperContent = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom: .5rem;
    i {
      font-size: 2.34375rem !important;
      color: #bfc5ca !important;
      margin-right: 1rem !important;
    }
`


CounterComponents3.propTypes = {
  
}

CounterComponents3.defaultProps = {
  
}

export default CounterComponents3
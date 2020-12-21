import React from "react"
import styled from "styled-components"

import CountUp, {startAnimation} from "react-countup"
import VisibilitySensor from "react-visibility-sensor"

const counterData =  [
  {
    title:42,
    descritption:"PROJECTS",
    icon_name:"icon-briefcase",
    
  },
  {
    title:3500,
    descritption:"CUSTOMERS",
    icon_name:"icon-profile-male",
  },
  {
    title:100,
    descritption:"SATISFACTION",
    icon_name:"icon-happy",
    percent:true,
  },

]

const CounterComponents4 = () => {

    return (
      <>
        <BlockHeader>Block 4</BlockHeader>

        <SectionBackground>
          <Container>
              <StyledRow>
                  {
                      counterData.map((counterItem,index) => {
                          return (
                              <Item key={index} className="col-md-4">
                                <Column className="col-6">
                                  {
                                    counterItem.percent? <TitleItem> % </TitleItem> : null
                                  }
                                  <CountUp end={counterItem.title} >
                                  
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <TitleItem ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                  </CountUp>
                                </Column>
                                <WrapperContent className="col-6">
                                  
                                  <DescriptionItem>{counterItem.descritption}</DescriptionItem>
                                  <i className={counterItem.icon_name} />
                                </WrapperContent>
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
    background-color: #363636;
    @media(max-width:768px) {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
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
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    @media(max-width:576px) {
      margin-bottom:30px;
    }
`

const TitleItem = styled.h5`
    color:rgba(255,255,255,0.85);
    font-size: 3.04688rem;
    font-family:Dosis;
    font-weight: 400;
    color: #fff;
    letter-spacing: 0.5px;
    margin-bottom: 0 !important;
    text-align: right !important;
    @media(max-width:768px) {
      padding:0;
      font-size:2.5rem;
    }
`

const DescriptionItem = styled.span`
    color: #bfc5ca !important;
    font-size: 12.75px;
    letter-spacing: 2px;
    font-weight: 300;
    line-height: 1.9;
    font-family:Open Sans;
    margin-bottom: .5rem !important;
    display:block;
`

const WrapperContent = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom: .5rem;
    text-align:left;
    
    i {
      font-size: 1.64063rem;
      color: #bfc5ca !important;
      margin-right: 1rem !important;
      @media(max-width:576px) {
        font-size: 1.3rem;
      }
    }
`
const Column = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
`

CounterComponents4.propTypes = {
  
}

CounterComponents4.defaultProps = {
  
}

export default CounterComponents4
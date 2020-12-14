import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"




const HeaderComponent1 = () => {
    
    return (
      <>
        <BlockHeader>Block 1</BlockHeader>
        <SectionBackground>
            <Container>
                <StyledRow>
                    <TitleSection>More Conversion, For Your SaaS</TitleSection>
                    <CallToAction>view demos</CallToAction>
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
    border: 1px solid #f5f6f7;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    padding-top: 146px;
    padding-bottom: 90px;
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
    text-align:center;
    align-items:center;
    flex-direction:column;
`

const TitleSection = styled.h3`
    margin-bottom: 3rem !important;
    font-size: 3rem;
    font-weight: 200;
    line-height: 1.5;
    color: #323d47;
    letter-spacing: 0.5px;
    font-family:Dosis;
    margin:0 auto 3rem;
`

const CallToAction  = styled.button`
    padding: 7px 32px 6px;
    font-size: 12px;
    border-radius: 10rem;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    outline: none;
    color: #fff;
    background-color: #50a1ff;
    border-color: #50a1ff;
    line-height: 2.2;
    display:block;
`

HeaderComponent1.propTypes = {
  
}

HeaderComponent1.defaultProps = {
  
}

export default HeaderComponent1
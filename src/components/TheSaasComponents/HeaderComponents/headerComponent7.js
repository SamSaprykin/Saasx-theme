import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"




const HeaderComponent7 = () => {
    
    return (
      <>
        <BlockHeader>Block 7</BlockHeader>
        <SectionBackground>
            <Container>
                <StyledRow>
                    <TitleSection>Senior Front-end Engineer</TitleSection>
                    <Position>
                        <i className="fas fa-map-marker mr-2" />
                        San Francisco
                    </Position>
                    <hr />
                    <CtaSection>apply now</CtaSection>
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
    background-color: #b9a0c9;
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
    hr {
        border-top-color: rgba(117,117,117,0.09);
        margin: 2rem 0;
        width:50px;
        
    }
`

const TitleSection = styled.h3`
    font-size: 2.57813rem;
    font-weight: 500;
    line-height: 1.5;
    color: #fff;
    letter-spacing: 0.5px;
    font-family:Dosis;
    margin:0 0 .5rem;
`
const Position = styled.p`
    font-size: 1.17188rem !important;
    margin-bottom: 1rem;
    font-weight: 300;
    line-height: 1.9;
    color: rgba(255,255,255,0.85);
    font-family:Open Sans;
`

const CtaSection = styled.button`
    border-radius: 10rem;
    padding: 10px 38px 10px;
    font-size: 13px;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    color: #757575;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    font-weight: 600;
    line-height: 1.9;
`

HeaderComponent7.propTypes = {
  
}

HeaderComponent7.defaultProps = {
  
}

export default HeaderComponent7
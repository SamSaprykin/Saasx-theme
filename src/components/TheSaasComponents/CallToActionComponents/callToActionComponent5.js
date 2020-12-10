import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const ctaData = {
    title:"Do you need some help?",
    description:"Visit our support center to get start",
}


const CtaComponent5 = () => {
    
    return (
      <>
        <BlockHeader>Block 5</BlockHeader>

        <SectionBackground>
            <Container>
                <StyledRow>
                    <div className="col-md-6">
                        <SectionImage src="/13.png" />
                    </div>
                    <div className="col-md-6 text-md-left">
                        
                        <SectionTitle>{ctaData.title}</SectionTitle>
                        <SectionDescritption>{ctaData.description}</SectionDescritption>
                        <SectionButton>start now</SectionButton>
                   </div>
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

const SectionTitle = styled.h2`
    color: #323d47;
    letter-spacing: 0.5px;
    margin-bottom: .5rem;
    font-family:Dosis;
    font-weight: 500;
    font-size: 2.10938rem;
    line-height: 1.5;
`

const SectionBackground = styled.div`
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 7rem;
    padding-bottom: 7rem;
    margin: 30px 20px 100px;
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

const SectionImage = styled.img`
    
`



const SectionDescritption = styled.p`
    font-size: 1.125rem;
    color: #868e96 !important;
    font-weight: 300;
    margin-bottom: 2rem !important;
    font-family:Open Sans;
`

const SectionButton = styled.button`
    padding: 7px 3rem 6px;
    font-size: 12px;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    outline: none;
    color: #fff;
    background-color: #865cda;
    display:block;
    border-radius: 10rem;
    max-width:240px;
    line-height: 2.2;
    font-family:Open Sans;
    letter-spacing: 1.7px;
    font-weight:600;
    :hover {
        box-shadow:1px 2px 5px 0px #3cd458;
    }
`


const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    align-items:center;
    div {
        text-align: center !important;
    }
    .text-md-left {
        padding-top: 15px;
        padding-bottom: 15px;
        @media (min-width: 768px) {
           text-align:left !important;
        }
    }
`




CtaComponent5.propTypes = {
  
}

CtaComponent5.defaultProps = {
  
}

export default CtaComponent5
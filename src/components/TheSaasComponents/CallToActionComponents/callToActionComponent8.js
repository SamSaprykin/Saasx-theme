import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"


const ctaData = {
    title:"30 Days Free Trial.",
    description:"We waited until we could do it right. Then we did! Instead of creating a carbon copy.",
    subhead:"MEET THE SAAS",
}

const CtaComponent8 = () => {
    
    return (
      <>
        <BlockHeader>Block 8</BlockHeader>

        <SectionBackground>
            <Container>
            
                <StyledRow>
                    <SectionSubhead>{ctaData.subhead}</SectionSubhead>
                    <SectionTitle>{ctaData.title}</SectionTitle>
                    <hr />
                    <SectionDescritption>{ctaData.description}</SectionDescritption>
                    <SectionButton>try it now</SectionButton>
                   
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
    margin-bottom:1rem;
    text-align:center;
    font-family:Dosis;
    font-weight: 500;
    font-size: 3.75rem;
    line-height: 1.5;
    @media (max-width: 576px) {
        font-size:52px;
        max-width: 90%;
        margin:0 auto 1rem;
    }
`

const SectionBackground = styled.div`
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 7rem;
    padding-bottom: 7rem;
    margin: 30px 20px 100px;
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
    flex-direction:column;
    hr {
        width: 50px;
        margin:2.5rem auto 1.5rem;
    }
`

const SectionDescritption = styled.p`
    text-align:center;
    font-size: 1.17188rem;
    margin-bottom: 1rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    font-family:Open Sans;
    margin-bottom:80px;
    @media (max-width: 576px) {
        font-size:16.5px;
        max-width: 90%;
        margin:0 auto 2rem;
    }
`

const SectionButton = styled.button`
    color: #fff;
    background-color: #3cd458;
    width: 250px !important;
    text-align:center;
    padding: 7px 32px 6px;
    font-size: 12px;
    text-transform:uppercase;
    margin:0 auto;
    line-height: 2.2;
    font-weight: 600;
    font-family:Open Sans;
    letter-spacing: 1.7px;
`


const SectionSubhead = styled.span`
    display: inline-block;
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.75px;
    word-spacing: 2px;
    color: rgba(153,153,153,0.6);
    margin:0 auto 1.5rem;
`


CtaComponent8.propTypes = {
  
}

CtaComponent8.defaultProps = {
  
}

export default CtaComponent8
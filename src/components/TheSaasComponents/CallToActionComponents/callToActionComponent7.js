import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"



const CtaComponent7 = () => {
    
    return (
      <>
        <BlockHeader>Block 7</BlockHeader>

        <SectionBackground>
            <Container>
                <StyledRow>
                    <SectionTitle>Start the supporting system that you always dreamed about</SectionTitle>
                    <SectionButton>login with envanto</SectionButton>
                   
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
    color: rgba(255,255,255,0.85) !important;
    letter-spacing: 0.5px;
    margin-bottom:80px;
    text-align:center;
    font-family:Dosis;
    font-weight: 200 !important;
    font-size: 1.875rem !important;
    margin:0 auto 5rem;
`

const SectionBackground = styled.div`
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image:url(/background-image-1.jpg);
    padding-top: 9rem;
    padding-bottom: 9rem;
    margin: 30px 20px 100px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    ::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #191919;
        border-radius: inherit;
        opacity: .6;
    }
`

const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    position: relative;
    height: 100%;
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
    flex-direction:column;
`

const SectionButton = styled.button`
    padding: 10px 38px 10px;
    font-size: 13px;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    outline: none;
    color: #fff;
    background-color: #3cd458;
    display:block;
    border-radius: 10rem;
    line-height: 2.2;
    font-family:Open Sans;
    margin:0 auto;
    font-weight: 600;
    width: 300px !important;
    :hover {
        box-shadow:1px 2px 5px 0px #3cd458;
    }
`


CtaComponent7.propTypes = {
  
}

CtaComponent7.defaultProps = {
  
}

export default CtaComponent7
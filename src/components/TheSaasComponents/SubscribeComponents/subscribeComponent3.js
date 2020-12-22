import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"



const SubscribeComponent3 = () => {
    
    return (
      <>
        <BlockHeader>Block 3</BlockHeader>
        <SectionBackground>
            <Container>
                <TitleSection>Stay Tuned</TitleSection>
                <DescriptionSection>
                    Subscribe to our newsletter and receive the latest news from TheThemeio.
                </DescriptionSection>
                <StyledRow >
                    <form className="col-md-8 col-xl-6 input-glass input-round mx-auto">
                        <Prepand>
                            <IconWrapper>
                                <i className="fa fa-envelope" />
                            </IconWrapper>
                        </Prepand>
                        <StyledInput placeholder="Email Adress">
                                    
                        </StyledInput>
                        <StyledButton>subscribe <i className="ti-arrow-right" /></StyledButton>
                    </form>
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
    padding-top: 7rem;
    padding-bottom: 7rem;
    background-image:url("/11.jpg");
    :before {
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
    text-align:center;
    z-index:100;
    position:relative;
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
    .no-gutters {
        margin-bottom:32px;
        box-shadow: 0 0 15px rgba(0,0,0,0.06);
        border: 1px solid #f1f2f3;
        cursor:pointer;
    }
`

const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    text-align:center;
    align-items:center;
    form {
        display:flex;
        position:relative;
        height: calc(2.2em + .75rem + 2px);
        margin-top:5rem;
        @media (max-width: 576px) {
            margin-top:2rem;
        }
    }
    
`

const TitleSection = styled.h2`
    color: #fff;
    font-weight: 400;
    font-size: 2.10938rem;
    letter-spacing: 0.5px;
    line-height: 1.5;
    font-family:Dosis;
    margin-bottom:28px;
`

const DescriptionSection = styled.p`
    color: rgba(255,255,255,0.85);
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 36px;
    line-height: 1.9;
    font-family: Open Sans;
`

const StyledButton = styled.button`
    display: inline-block !important;
    padding: 7px 32px 6px;
    font-size: 12px;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    border-radius: 2px;
    outline: none;
    transition: 0.15s linear;
    line-height: 2.2;
    color: #757575;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    border-radius:10rem;
    position:absolute;
    right:0;
    height: 100%;
    font-family:Open Sans;
    i {
        font-size: 9px !important;
        margin-left: .75rem !important;
    }
    @media (max-width: 576px) {
        padding: 7px 18px 6px;
        right:16px;
    }
`
const StyledInput = styled.input`
    border-left: 0;
    color: rgba(255,255,255,0.8);
    outline:none;
    border:none;
    padding-left: 3.5rem;
    padding-right: 1.5rem;
    font-size: 1.0625rem;
    line-height: 2.2;
    display: block;
    border: none;
    font-family:Open Sans;
    background-color: rgba(255,255,255,0.2);
    font-weight: 400;
    border-radius: 10rem;
    position: relative;
    min-width: 0;
    margin-bottom: 0;
    width:100%;
    @media (max-width: 576px) {
        padding-left: 2.5rem;
    }
`

const Prepand = styled.div`
    margin-left: 0;
    margin-right: 0;
    display: flex;
    position:absolute;
    left:0;
    height:100%;
`

const IconWrapper = styled.span`  
    border-radius: 2px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding: .375rem 1rem;
    font-size: 1.0625rem;
    line-height: 2.2;
    border-radius: 2px;
    color: rgba(255,255,255,0.8);
    i {
        padding-left:16px;
        color: rgba(255,255,255,0.8);
    }
`

SubscribeComponent3.propTypes = {
  
}

SubscribeComponent3.defaultProps = {
  
}

export default SubscribeComponent3
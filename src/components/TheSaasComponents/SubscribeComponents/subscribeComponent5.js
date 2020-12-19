import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"



const SubscribeComponent5 = () => {
    
    return (
      <>
        <BlockHeader>Block 5</BlockHeader>
        <SectionBackground>
            <Container>
                <StyledRow >
                    <div className="col-md-8 col-xl-6 mx-auto">
                        <SectionDialog>
                            <HeaderDialog>Latest news direct to your inbox</HeaderDialog>
                            <CtaText>Subscribe Now</CtaText>
                            <form className="input-glass input-round mx-auto">
                                
                                <StyledInput placeholder="Enter Email Adress">
                                            
                                </StyledInput>
                                <StyledButton>sign up <i className="ti-arrow-right" /></StyledButton>
                            </form>
                        </SectionDialog>
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

const SectionBackground = styled.div`
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 30px 20px 100px;
    border: 1px solid #f5f6f7;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    padding-top: 9rem;
    padding-bottom: 9rem;
    background-image:url("/background-image-1.jpg");
    :before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #191919;
        border-radius: inherit;
        opacity: .3;
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
`

const SectionDialog = styled.div`
    color: rgba(255,255,255,0.85) !important;
    border-radius: 4px;
    background-color: #50a1ff !important;
    @media (min-width: 992px) {
        padding: 30px 32px;
    }
    @media (min-width: 768px) {
        padding: 20px 24px;
    }
    form {
        display:flex;
        position:relative;
        height: calc(1.9em + .75rem + 2px);
    }
`

const HeaderDialog = styled.h3`
    font-size: 1.52344rem;
    line-height: 1.5;
    font-family:Dosis;
    color: #fff;
    font-weight:500;
    text-align:left;
    margin-bottom:48px;
`
const CtaText = styled.p`
    text-align:right;
    color: rgba(255,255,255,0.8);
    padding-right: 1.5rem !important;
    font-size: 12.75px;
    font-weight: 400;
    line-height: 1.9;
    font-family:Open Sans;
`
const StyledButton = styled.button`
    display: inline-block !important;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    border-radius: 2px;
    outline: none;
    transition: 0.15s linear;
    line-height: 2.2;
    color: #fff;
    background-color: rgba(248,249,250,0.6);
    border-radius:10rem;
    position:absolute;
    right:0;
    height: 100%;
    font-family:Open Sans;
    i {
        font-size: 9px !important;
        margin-left: .75rem !important;
    }
    font-size: 11px;
    padding: 8px 26px 6px;
    letter-spacing: 1.7px;
`
const StyledInput = styled.input`
    border-left: 0;
    color: rgba(255,255,255,0.8);
    outline:none;
    border:none;
    padding-left: 1rem;
    padding-right: 1.5rem;
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
    display: block;
    width: 100%;
    font-size: .9375rem;
    :focus {
        color: rgba(255,255,255,0.8);
    }
`



SubscribeComponent5.propTypes = {
  
}

SubscribeComponent5.defaultProps = {
  
}

export default SubscribeComponent5
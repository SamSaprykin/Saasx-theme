import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"



const SubscribeComponent4 = () => {
    
    return (
      <>
        <BlockHeader>Block 4</BlockHeader>
        <SectionBackground>
            <Container>
                <StyledRow >
                    <div className="col-md-6">
                        <DescritptionSection>
                            Subscribe to our newsletter and receive the latest news.
                        </DescritptionSection>
                    </div>
                    <div className="col-md-4 ml-auto" >
                        <form className="input-glass input-round mx-auto">
                            <Prepand>
                                <IconWrapper>
                                    <i className="fa fa-envelope" />
                                </IconWrapper>
                            </Prepand>
                            <StyledInput placeholder="Email Adress">
                                        
                            </StyledInput>
                            <StyledButton>subscribe</StyledButton>
                        </form>
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
    padding-top: 3rem;
    padding-bottom: 3rem;
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
    form {
        display:flex;
        position:relative;
        height: calc(1.9em + .75rem + 2px);
    }
`
const DescritptionSection =  styled.p`
    font-size: 1.125rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    font-family:Open Sans;
    margin-bottom:0;
    text-align:left;
    @media (max-width: 576px) {
        font-size: 16px;
        text-align:center;
        margin-bottom:16px;
    }
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
    background-color: #926dde;
    border-color: #926dde;
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
    color: #999;
    outline:none;
    border:none;
    padding-left: 3rem;
    padding-right: 1.5rem;
    line-height: 2.2;
    display: block;
    border: none;
    font-family:Open Sans;
    background-color: rgba(255,255,255,0.2);
    font-weight: 300;
    border-radius: 10rem;
    position: relative;
    min-width: 0;
    margin-bottom: 0;
    width:100%;
    display: block;
    width: 100%;
    font-size: .9375rem;
    border: 1px solid #eaeff4;
    :focus {
        color: #323d47;
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
    font-size: .9375rem;
    line-height: 2.2;
    border-radius: 2px;
    color: #c9ccce;
    i {
        
        color: #c9ccce;
        
    }
`



SubscribeComponent4.propTypes = {
  
}

SubscribeComponent4.defaultProps = {
  
}

export default SubscribeComponent4
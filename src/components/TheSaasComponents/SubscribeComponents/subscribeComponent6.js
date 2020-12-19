import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"



const SubscribeComponent6 = () => {
    
    return (
      <>
        <BlockHeader>Block 6</BlockHeader>
        <SectionBackground>
            <Container>
                <SubhaedSection>STAY UP-TO-DATE</SubhaedSection>
                <TitleSection>Ready to get started?</TitleSection>
                <StyledRow >
                    <form className="col-md-8 col-xl-5 input-glass mx-auto">
                        <Prepand>
                            <IconWrapper>
                                <i className="fa fa-envelope" />
                            </IconWrapper>
                        </Prepand>
                        <StyledInput placeholder="Enter Your Email">
                                    
                        </StyledInput>
                        <StyledButton>subscribe</StyledButton>
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
    background-color: #56a9ef;
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
        height: calc(2em + .75rem + 2px);
        margin-top: 2rem !important;
    }
`

const TitleSection = styled.h2`
    color: #fff;
    font-weight: 500;
    font-size: 2.10938rem;
    letter-spacing: 0.5px;
    line-height: 1.5;
    font-family:Dosis;
    margin-bottom:28px;
`

const SubhaedSection = styled.span`
    color: rgba(255,255,255,0.85);
    font-size: .70313rem !important;
    font-weight: 600 !important;
    margin-bottom: 36px;
    line-height: 1.9;
    font-family: Open Sans;
    letter-spacing:2px;
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
    position:absolute;
    right:0;
    height: 100%;
    font-family:Open Sans;
    i {
        font-size: 9px !important;
        margin-left: .75rem !important;
    }
`
const StyledInput = styled.input`
    border-left: 0;
    color: white;
    outline:none;
    border:none;
    padding-left: 3rem;
    padding-right: 1.5rem;
    font-size: 1.0625rem;
    line-height: 2.2;
    display: block;
    border: none;
    font-family:Open Sans;
    background-color: rgba(255,255,255,0.2);
    font-weight: 400;
    position: relative;
    min-width: 0;
    margin-bottom: 0;
    width:100%;
    :placeholder {
        color: white !important;
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

SubscribeComponent6.propTypes = {
  
}

SubscribeComponent6.defaultProps = {
  
}

export default SubscribeComponent6
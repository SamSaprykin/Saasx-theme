import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Typing from 'react-typing-animation'



const HeaderComponent8 = () => {
    
    return (
      <>
        <BlockHeader>Block 8</BlockHeader>
        <SectionBackground>
            <Container>
                <StyledRow>
                    <div className="col-lg-8 mx-auto">
                        <TitleSection>
                            <span class="space">Get A Job </span>
                            <Typing speed={100} loop={true} cursorClassName="cursor">
                                <TypingSpan> Startups.</TypingSpan>
                                <Typing.Backspace count={10} />
                                <TypingSpan> WebApps.</TypingSpan>
                                <Typing.Backspace count={9} />
                                <TypingSpan> Softwares.</TypingSpan>
                                <Typing.Backspace count={11} />
                                <TypingSpan> Entrepreneurs.</TypingSpan>
                                <Typing.Backspace count={15} />
                            </Typing>
                        </TitleSection>
                        <DescriptionSection>You have got the change to work and thrive with us. We are a small group of developers who wants to make a family!</DescriptionSection>
                        <hr />
                        <CtaSection>open positions</CtaSection>
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
        border-radius: inherit;
    }
`

const SectionBackground = styled.div`
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image:url("/cover-15.jpg");
    margin: 30px 20px 100px;
    border: 1px solid #f5f6f7;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    padding-top: 146px;
    padding-bottom: 90px;
    ::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #191919;
        border-radius: inherit;
        opacity: .8;
        z-index:0;
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
`

const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    text-align:center;
    align-items:center;
    flex-direction:column;
    position:relative;
    z-index:100;
    hr {
        border-top-color: rgba(255,255,255,0.15);
        margin: 2rem auto;
        width: 60px !important;
    }
`

const TitleSection = styled.h3`
    font-size: 2.57813rem;
    font-weight: 500;
    line-height: 1.5;
    color: #fff;
    letter-spacing: 0.5px;
    font-family:Dosis;
    margin:0 auto .5rem;
    display:flex;
    align-items:center;
    justify-content:center;
    .space {
        margin-right:8px;
        display:block;
    }
`
const DescriptionSection = styled.p`
    font-size: 1.17188rem !important;
    margin-top: 2rem !important;
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

const TypingSpan = styled.span`
    color:#50a1ff !important;
    font-weight: 400;
    letter-spacing: 0.5px;
    font-size: 2.57813rem;
    font-family:Dosis;
    line-height: 1.5;
`

HeaderComponent8.propTypes = {
  
}

HeaderComponent8.defaultProps = {
  
}

export default HeaderComponent8
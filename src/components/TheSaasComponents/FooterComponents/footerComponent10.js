import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"




const FooterComponent10 = () => {
    
    return (
      <>
        <BlockHeader>Block 10</BlockHeader>
        <SectionBackground>
            <Container>
            
                <StyledRow>
                    <div className="col-xl-4 order-md-last">
                        <TitleInfo>Get Started</TitleInfo>
                        <Description>
                            Form so, head allowed how found at right, chosen put sad. Copy of 
                            field phase offers texts. Great family there first about that.
                        </Description>
                        <CtaWrapper>
                            <StyledButton>start trial</StyledButton>
                            <StyledButton className="gray-button">contact</StyledButton>
                        </CtaWrapper>
                        
                    </div>
                    <div className="col-6 col-md-4 col-xl-2">
                        <TitleInfo>Product</TitleInfo>
                        <Navbar>
                            <NavLink to="/">Features</NavLink>
                            <NavLink to="/">Blog</NavLink>
                            <NavLink to="/">Policy</NavLink>
                            <NavLink to="/">Security</NavLink>
                            <NavLink to="/">Success Story</NavLink>
                        </Navbar>
                    </div>
                    <div className="col-6 col-md-4 col-xl-2">
                        <TitleInfo>Company</TitleInfo>
                        <Navbar>
                            <NavLink to="/">About</NavLink>
                            <NavLink to="/">Blog</NavLink>
                            <NavLink to="/">Press</NavLink>
                            <NavLink to="/">Contact</NavLink>
                        </Navbar>
                    </div>
                    <div className="col-xl-4 order-md-first">
                        <TitleInfo>We Are Awesome</TitleInfo>
                        <Description>
                            We’re a team of experienced designers and developers. 
                            We can combine beautiful, modern designs with clean, 
                            functional and high-performance code to produce stunning websites.
                        </Description>
                        <Copyright>© 2020 TheThemeio. All rights reserved.</Copyright>
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
    padding-bottom: 3rem !important;
    padding-top: 3rem !important;
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
    text-align:center;
    
    div {
        text-align:left;
    }

`

const TitleInfo = styled.h5`
    margin-bottom: 1rem !important;
    letter-spacing: 0.75px;
    font-weight: 500;
    color: #323d47;
    font-size: 1.05469rem;
    font-family:Dosis;
`

const Description = styled.p`
    margin-bottom: 1rem;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    text-align: left;
    font-family:Open Sans;
`

const StyledButton = styled.button`
    font-size: 11px;
    padding: 8px 26px 6px;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    border-radius: 2px;
    outline: none;
    transition: 0.15s linear;
    color: #fff;
    background-color: #50a1ff;
    border-color: #50a1ff;
    margin-right:0.5rem;
    font-weight: 600;
    line-height: 1.9;
`
const CtaWrapper = styled.div`
    display:flex;
    .gray-button {
        color: #757575;
        background-color: #e9ecf0;
    }
`
const Navbar = styled.div`
    display: flex;
    flex-direction:column;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 0;
    margin-bottom: 0;
`

const NavLink = styled(Link)`
    color: #757575;
    font-weight: 400;
    display: block;
    padding: 2px 0;
    line-height: 1.9;
    font-size: .9375rem;
    font-family:Open Sans;
    width:160px;
`

const Copyright = styled.span`
    font-size:12.75px;
    font-family:Open Sans;
    line-height: 1.9;
    color: #757575;
    opacity: .7 !important;
`

FooterComponent10.propTypes = {
  
}

FooterComponent10.defaultProps = {
  
}

export default FooterComponent10
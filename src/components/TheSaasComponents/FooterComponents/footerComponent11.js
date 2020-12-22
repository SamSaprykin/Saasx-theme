import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled, {keyframes} from "styled-components"

const FooterData = {
    footerCopyrights:"© TheThemeio 2020, All rights reserved.",
    socialIcons: [
        {
            icon:"fab fa-facebook-f",
            linkTo:"/",
        },
        {
            icon:"fab fa-twitter",
            linkTo:"/",
        },
        {
            icon:"fab fa-instagram",
            linkTo:"/",
        },
        {
            icon:"fab fa-youtube",
            linkTo:"/",
        }
    ]
}

const FooterComponent11 = () => {
    
    return (
      <>
        <BlockHeader>Block 11</BlockHeader>
        <SectionBackground>
            <Container>
            
                <StyledRow>
                    <div className="col-md-6 col-xl-4">
                        <Link to="/">
                            <StyledImage src="/logo-dark-saas.png" />
                        </Link>
                        <Description>
                            We can combine beautiful, modern designs with clean, functional 
                            and high-performance code to produce stunning websites.
                        </Description>
                        
                    </div>
                    
                    <div className="col-6 col-md-4 col-xl-2">
                        <TitleInfo>Product</TitleInfo>
                        <Navbar>
                            <NavLink to="/">Features</NavLink>
                            <NavLink to="/">Blog</NavLink>
                            <NavLink to="/">Policy</NavLink>
                           
                        </Navbar>
                    </div>
                    <div className="col-6 col-md-4 col-xl-2">
                        <TitleInfo>Company</TitleInfo>
                        <Navbar>
                            <NavLink to="/">About</NavLink>
                            <NavLink to="/">Blog</NavLink>
                            <NavLink to="/">Press</NavLink>
                           
                        </Navbar>
                    </div>
                    <div className="col-6 col-md-4 col-xl-2">
                        <TitleInfo>Support</TitleInfo>
                        <Navbar>
                            <NavLink to="/">Help Center</NavLink>
                            <NavLink to="/">API</NavLink>
                            <NavLink to="/">Blog</NavLink>
                        </Navbar>
                    </div>
                    <div className="col-6 col-md-6 col-xl-2 text-center">
                        
                        <StyledButton>try it free</StyledButton>
                        <Social>
                            {
                                FooterData.socialIcons.map((icon,index) => {
                                    return (
                                        <SocialLink key={index} href={icon.linkTo}>
                                            <i className={icon.icon} />
                                        </SocialLink>
                                    )
                                })
                            }
                        </Social>
                        
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
    padding-top: 3rem;
    padding-bottom: 3rem;
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
        @media (max-width: 768px) {
            margin-bottom:24px;
        }
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
    border-radius: 10rem;
    color: #fff;
    background-color: #50a1ff;
    border-color: #50a1ff;
    font-family:Open Sans;
    display: block;
    width: 100%;
    line-height: 1.9;
    margin-bottom: 1rem;
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

const StyledImage = styled.img`
    margin-bottom:1rem !important;
`

const Social = styled.div`
    text-align: center !important;
    color: #757575 !important;
    margin-top:36px;
`

const SocialLink = styled.a`
    display: inline-block;
    width: 32px;
    height: 32px;
    line-height: 32px;
    margin-right: 4px;
    margin-bottom: 4px;
    text-align: center;
    color: inherit;
    font-size: 1rem;
    border-radius: 3px;
    opacity: 0.8;
    transition: .4s ease-out;
    border: 1px solid #eaeff4;
    i {
        color: #757575 !important;
    }
    
`
FooterComponent11.propTypes = {
  
}

FooterComponent11.defaultProps = {
  
}

export default FooterComponent11
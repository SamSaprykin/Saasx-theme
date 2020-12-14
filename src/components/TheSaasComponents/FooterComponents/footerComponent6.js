import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"


const FooterData = {
    
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
        },
        {
            icon:"fab fa-dribbble",
            linkTo:"/",
        }
    ]
}

const FooterComponent6 = () => {
    
    return (
      <>
        <BlockHeader>Block 6</BlockHeader>
        <SectionBackground>
            <Container>
            
                <StyledRow>
                    <div className="col-md-6">
                        <Navbar>
                            <NavLink to="/">About</NavLink>
                            <NavLink to="/">Blog</NavLink>
                            <NavLink to="/">Contact</NavLink>
                        </Navbar>
                    </div>
                    <div className="col-md-6 text-center text-md-left mt-5 mt-md-0">
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
                    <div className="col-12 text-center">
                        <Copyright>© TheThemeio 2020, All rights reserved.</Copyright>
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
    background-color: #191919 !important;
    padding:1.5rem 0;
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
    osition: relative;
    height: 100%;
`

const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    text-align:center;
    align-items:center;
    
    .text-align-left {
        text-align:left;
        padding-top: 15px;
        padding-bottom: 15px;
    }

`

const Copyright = styled.p`
    font-size:12.75px;
    font-family:Open Sans;
    line-height: 1.9;
    color: rgba(255,255,255,0.8);
    padding-top:20px;
    text-align: center !important;
`

const Navbar = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding-left: 0;
    margin-bottom: 0;
`

const NavLink = styled(Link)`
    color: rgba(255,255,255,0.8);
    font-weight: 400;
    display: block;
    padding: .5rem 1rem;
    line-height: 1.9;
    font-family:Open Sans;
    text-transform:uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 0.85em;
    word-spacing: 2px;
    :hover {
        color: rgba(255,255,255,0.9);
    }
`

const Social = styled.div`

    text-align: left !important;
    color: #757575 !important;
`

const SocialLink = styled.a`
    display: inline-block;
    width: 32px;
    height: 32px;
    line-height: 32px;
    margin-right: 4px;
    margin-bottom: 4px;
    text-align: center;
    font-size: 1rem;
    border-radius: 3px;
    opacity: 0.8;
    transition: .4s ease-out;
    
    background-color: rgba(255,255,255,0.1);
    i {
        color: rgba(255,255,255,0.8);
    }
    :hover {
        background-color: rgba(255,255,255,0.3);
    }
`

FooterComponent6.propTypes = {
  
}

FooterComponent6.defaultProps = {
  
}

export default FooterComponent6
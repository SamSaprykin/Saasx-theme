import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"


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

const FooterComponent1 = () => {
    
    return (
      <>
        <BlockHeader>Block 1</BlockHeader>
        <SectionBackground>
            <Container>
                <StyledRow>
                    <div className="col-md-6 text-center text-md-left">
                        <Copyright>{FooterData.footerCopyrights}</Copyright>
                    </div>
                    <div className="col-md-6 text-center text-md-right">
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
    margin: 30px 20px 100px;
    border: 1px solid #f5f6f7;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    padding: 1.25rem 0;
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
    align-items:center;
    .col-md-6 {
        padding:15px;
    }

`
const Copyright = styled.span`
    font-size:12.75px;
    font-family:Open Sans;
    line-height: 1.9;
    color: #757575;
`

const Social = styled.div`
    @media (min-width: 768px) {
        text-align: right !important;
    }
    text-align: center !important;
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
    color: #757575 !important;
    i {
        color: #757575 !important;
    }
    
`

FooterComponent1.propTypes = {
  
}

FooterComponent1.defaultProps = {
  
}

export default FooterComponent1
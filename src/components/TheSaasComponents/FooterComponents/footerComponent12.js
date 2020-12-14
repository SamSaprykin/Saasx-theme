import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"


const footerData = [
    {
        title:"Company",
        items:[
            "About us","Careers","Press","Brand Guidelines"
        ]
    },
    {
        title:"Product",
        items:[
            "About us","Careers","Press","Brand Guidelines"
        ]
    },
    {
        title:"Resources",
        items:[
            "About us","Careers","Press","Brand Guidelines"
        ]
    },
    {
        title:"Community",
        items:[
            "About us","Careers","Press","Brand Guidelines"
        ]
    },
    {
        title:"Support",
        items:[
            "About us","Careers","Press","Brand Guidelines"
        ]
    },
    {
        title:"Extras",
        items:[
            "About us","Careers","Press","Brand Guidelines"
        ]
    }
]

const FooterComponent12 = () => {
    
    return (
      <>
        <BlockHeader>Block 12</BlockHeader>
        <SectionBackground>
            <Container>
                <StyledRow>
                    {
                        footerData.map((footerItem,index) => {
                            return (
                                <StyledColumn className="col-6 col-md-4 col-xl-2" key={index}>
                                    <TitleItem>{footerItem.title}</TitleItem>
                                    {
                                        footerItem.items.map((link,index) => {
                                            return (
                                                <NavLink to="/" key={index}>{link}</NavLink>
                                            )
                                        })
                                    }
                                </StyledColumn>
                            )
                        })
                    }
                </StyledRow>
            </Container>
            <Container>
                <StyledRow>
                    <div className="col-md-6 text-center text-md-left">
                        <Copyright>© 2020 TheThemeio. All rights reserved.</Copyright>
                    </div>
                    <div className="col-md-6 text-center text-md-right">
                        <Social>
                            <SocialLink  href="/">
                                <i className="fab fa-facebook-f" />
                            </SocialLink>
                            <SocialLink  href="/">
                                <i className="fab fa-twitter" />
                            </SocialLink>
                            <SocialLink  href="/">
                                <i className="fab fa-instagram" />
                            </SocialLink>
                            <SocialLink  href="/">
                                <i className="fab fa-youtube" />
                            </SocialLink>
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
    background-image: url(/vector-9.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    color: rgba(255,255,255,0.85) !important;
    padding: 1.25rem 0;
    margin: 30px 20px 100px;
    border: 1px solid #f5f6f7;
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
        opacity: .8;
    }
`

const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
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
    hr {
        width: 5% !important;
        margin: 2rem auto;
        border-top: 1px solid rgba(117,117,117,0.09);
    }
    .text-align-left {
        text-align:left;
        padding-top: 15px;
        padding-bottom: 15px;
    }

`

const StyledColumn = styled.div`
    text-align:left;
    padding-top: 15px;
    padding-bottom: 15px;
`
const TitleItem = styled.h4`
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.75px;
    font-size: 1.05469rem;
    font-family:Dosis;
`

const NavLink = styled(Link)`
    color: rgba(255,255,255,0.8);
    font-weight: 400;
    display: block;
    padding: 2px 0;
    line-height: 1.9;
    font-size: .9375rem;
    font-family:Open Sans;
    :hover {
        color: rgba(255,255,255,0.9);
    }
`

const Copyright = styled.span`
    font-size:12.75px;
    font-family:Open Sans;
    line-height: 1.9;
    color: rgba(255,255,255,0.8);
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
        color: #757575;
    }
    :hover {
        i {
            color: rgba(255,255,255,0.8);
        }
       
    }
`

FooterComponent12.propTypes = {
  
}

FooterComponent12.defaultProps = {
  
}

export default FooterComponent12
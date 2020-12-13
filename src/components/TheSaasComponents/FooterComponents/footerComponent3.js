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
        }
    ]
}


const FooterComponent3 = () => {
    
    return (
      <>
        <BlockHeader>Block 3</BlockHeader>
        <SectionBackground>
            <Container>
            
                <StyledRow>
                    <div className="col-md-3 text-center text-md-left">
                        <Link to="/">
                            <img src="/logo-dark-saas.png" />
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <Navbar>
                            <NavLink to="/">About</NavLink>
                            <NavLink to="/">Blog</NavLink>
                            <NavLink to="/">Policy</NavLink>
                            <NavLink to="/">Contact</NavLink>
                        </Navbar>
                    </div>
                    <div className="col-md-3 text-center text-md-right">
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
    padding: 1.25rem 0;
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

const Navbar = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 0;
    margin-bottom: 0;
`

const NavLink = styled(Link)`
    color: #757575;
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
    
    :hover {
        background-color:#926dde;
        i {
            color:white;
        }
        
    }
`

FooterComponent3.propTypes = {
  
}

FooterComponent3.defaultProps = {
  
}

export default FooterComponent3
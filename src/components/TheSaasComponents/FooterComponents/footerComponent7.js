import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled, {keyframes} from "styled-components"




const FooterComponent7 = () => {
    
    return (
      <>
        <BlockHeader>Block 7</BlockHeader>
        <SectionBackground>
            <Container>
            
                <StyledRow>
                    <Social>
                        
                        <SocialLink className="facebook" href="/">
                            <i className="fab fa-facebook-f" />
                        </SocialLink>
                        <SocialLink className="twitter" href="/">
                            <i className="fab fa-twitter" />
                        </SocialLink>
                        <SocialLink className="instagram" href="/">
                            <i className="fab fa-instagram" />
                        </SocialLink>
                        <SocialLink className="dribbble" href="/">
                            <i className="fab fa-dribbble" />
                        </SocialLink>
                        <SocialLink className="youtube" href="/">
                            <i className="fab fa-youtube" />
                        </SocialLink>   
                    </Social>
                    <Navbar>
                        <NavLink to="/">About</NavLink>
                        <NavLink to="/">Blog</NavLink>
                        <NavLink to="/">Contact</NavLink>
                    </Navbar>
                    <Copyright>© TheThemeio 2020, All rights reserved.</Copyright>
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
    padding:48px 0;
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
    align-items:center;
    flex-direction:column;
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

const Social = styled.div`
    text-align: center !important;
    color: white;
    display:flex;
    .facebook {
        background-color: #d8deea !important;
        i {
            color: #3b5998 !important;
        }
    }
    .twitter {
        background-color: #e0f5fd;
        i {
            color: #00aced;
        }
    }
    .instagram {
        background-color: #eaf0f4;
        i {
            color: #517fa4;
        }
    }
    .dribbble {
        background-color: #fceaf1;
        i {
            color: #ea4c89;
        }
    }
    .youtube {
        background-color: #f7e0e0;
        i {
            color: #b00;
        }
    }
    margin:0 auto;
`



const SocialLink = styled.a`
    display: flex;
    align-items:center;
    justify-content:center;
    width: 32px;
    height: 32px;
    line-height: 28px;
    margin-right: 8px;
    margin-bottom: 4px;
    font-size: 1rem;
    border-radius: 3px;
    transition: .4s ease-out;
    
    
`
const Copyright = styled.span`
    font-size:12.75px;
    font-family:Open Sans;
    line-height: 1.9;
    color: #757575;
    margin-top:20px;
    
`

const Navbar = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding-left: 0;
    margin-bottom: 0;
    margin-top:20px;
`

const NavLink = styled(Link)`
    color: #757575;
    font-weight: 400;
    display: block;
    padding: .5rem 1rem;
    line-height: 1.9;
    font-family:Open Sans;
    text-transform:uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 0.8rem;
    word-spacing: 2px;
    @media (max-width: 576px) {
        font-size:10.5px;
    }
`


FooterComponent7.propTypes = {
  
}

FooterComponent7.defaultProps = {
  
}

export default FooterComponent7
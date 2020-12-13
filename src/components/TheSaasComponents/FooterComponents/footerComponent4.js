import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled, {keyframes} from "styled-components"




const FooterComponent4 = () => {
    
    return (
      <>
        <BlockHeader>Block 4</BlockHeader>
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
                                
                    </Social>
                    <Copyright>Copyright © 2020 TheThemeio, All rights reserved.</Copyright>
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
    .facebook {
        background-color: #3b5998;
    }
    .twitter {
        background-color: #00aced;
    }
    .instagram {
        background-color: #517fa4;
    }
    margin:0 auto;
`

const cycle = keyframes`
  49% {
    transform: translateY(-100%); }
  50% {
    opacity: 0;
    transform: translateY(100%); }
  51% {
    opacity: 1; } 
  }
`

const SocialLink = styled.a`
    display: inline-block;
    width: 28px;
    height: 28px;
    line-height: 28px;
    margin-right: 4px;
    margin-bottom: 4px;
    font-size: 0.8125rem;
    border-radius: 3px;
    transition: .4s ease-out;
    i {
        color: white;
    }
    :hover {
        i {
            animation: ${cycle} .4s forwards;
        }
    }
`
const Copyright = styled.span`
    font-size:12.75px;
    font-family:Open Sans;
    line-height: 1.9;
    color: #757575;
    margin-top:20px;
    
`


  
  

FooterComponent4.propTypes = {
  
}

FooterComponent4.defaultProps = {
  
}

export default FooterComponent4
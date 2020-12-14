import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled, {keyframes} from "styled-components"

const FooterComponent9 = () => {
    
    return (
      <>
        <BlockHeader>Block 9</BlockHeader>
        <SectionBackground>
            <Container>
            
                <StyledRow>
                <div className="col-xl-12">
                    <Link to="/">
                        <img src="/logo-dark-saas.png" />
                    </Link>
                </div>
                <div className="col-xl-5">
                    <FooterInfo>
                        We’re a team of experienced designers and developers. 
                        We can combine beautiful, modern designs with clean, 
                        functional and high-performance code to produce stunning websites.
                    </FooterInfo>
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
                      <SocialLink className="youtube" href="/">
                          <i className="fab fa-youtube" />
                      </SocialLink>     
                    </Social>
                </div>
                <div className="col-xl-6 col-4 offset-xl-1">
                    <Navbar>
                        <NavLink to="/">About</NavLink>
                        <NavLink to="/">Blog</NavLink>
                        <NavLink to="/">Policy</NavLink>
                        <NavLink to="/">Features</NavLink>
                        <NavLink to="/">Pricing</NavLink>
                        <NavLink to="/">Security</NavLink>
                        <NavLink to="/">Help Center</NavLink>
                        <NavLink to="/">API</NavLink>
                        <NavLink to="/">FAQ</NavLink>
                    </Navbar>
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
    background-color: #fff;
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

const FooterInfo = styled.p`
    margin-bottom: 1rem;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    text-align: left;
    font-family:Open Sans;
    margin-top:1rem;
`

const Social = styled.div`
    text-align: left;
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
    .youtube {
        background-color: #b00;
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
    text-align:center;
    i {
        color: white;
    }
    :hover {
        i {
            animation: ${cycle} .4s forwards;
        }
    }
`

const Navbar = styled.div`
    display: flex;
    flex-direction:column;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 0;
    margin-bottom: 0;
    max-height:120px;
    flex-wrap:wrap;
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


FooterComponent9.propTypes = {
  
}

FooterComponent9.defaultProps = {
  
}

export default FooterComponent9
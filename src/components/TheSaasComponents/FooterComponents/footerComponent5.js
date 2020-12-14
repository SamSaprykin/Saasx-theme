import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"




const FooterComponent5 = () => {
    
    return (
      <>
        <BlockHeader>Block 5</BlockHeader>
        <SectionBackground>
            <Container>
            
                <StyledRow>
                    <div className="col-md-8 col-lg-6 mx-auto">
                            <Navbar>
                                <NavLink to="/">About</NavLink>
                                <NavLink to="/">Blog</NavLink>
                                <NavLink to="/">Policy</NavLink>
                                <NavLink to="/">Contact</NavLink>
                            </Navbar>
                            <hr />
                            <FooterInfo>
                                We’re a team of experienced designers and developers. 
                                We can combine beautiful, modern designs with clean, 
                                functional and high-performance code to produce stunning 
                                websites.
                            </FooterInfo>
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
    justify-content:center;
    hr {
        border-top-color: rgba(117,117,117,0.09);
        margin: 2rem auto;
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

const FooterInfo = styled.p`
    margin-bottom: 1rem;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    font-family:Open Sans;
    text-align: center !important;
`

FooterComponent5.propTypes = {
  
}

FooterComponent5.defaultProps = {
  
}

export default FooterComponent5
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import styled from "styled-components"

import AnimSide from "../Animation/AnimSide"
const HeroSection = () => (
  <>
  <HeroSectionWrapper>
        <Container>
            <RowHero>
                <div className="col-md-6">
                    <AnimSide reversed="true">
                        <HeroContent>
                            <h4>TECHNOLOGY WITH ARTIFICIAL INTELLIGENCE</h4>
                            <h2>Drive More Customers <br />Through Digital</h2>
                            <p>Chap fantastic skive off chancer knees up starkers easy peasy up the <br />kyver David, bleeding the BBC tomfoolery chimney.!</p>
                            <DefaultButton>Our Features</DefaultButton>
                        </HeroContent>
                    </AnimSide>
                </div>
                
                <div className="col-md-6 d-none d-md-block wow fadeInRight">
                    <AnimSide>
                        <div className="hero-item">
                            <img src="https://via.placeholder.com/860x550.png?text=SaasX" alt="img" />
                        </div>
                    </AnimSide>
                </div>
            </RowHero>
        </Container>
  </HeroSectionWrapper>
  </>
)

const HeroSectionWrapper = styled.section`
    height: 650px;
    margin-top: 80px;
    border-bottom: 1px solid #e5e5e5;
    border-top: 1px solid #e5e5e5;
    background-color: #f9fafa;
    display: flex!important;
    align-items: center!important;
    @media (max-width: 767px) {
        height: 350px;
    }
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

const RowHero = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    align-items: center!important;
`

const HeroContent = styled.div`
    h4 {
        font-family: "Work Sans",sans-serif;
        text-transform: uppercase;
        font-size: 12px;
        color: #fa071c;
        font-weight: 600;
        letter-spacing: 0;
        margin: 0;
        
    }
    h2 {
        font-size: 46px;
        line-height: 55px;
        color: #263a4f;
        margin: 15px 0 25px;
        font-weight: 600;
        letter-spacing: -1px;
        @media (max-width: 992px) {
            font-size: 36px;
            line-height: 36px;
        }
        @media (max-width: 767px) {
            font-size: 24px;
            line-height: 36px;
            margin: 0;
        }
    }
    p {
        margin-bottom: 30px;
    }
`

const DefaultButton = styled(Link)`
    background-color: #2550de;
    text-transform: uppercase;
    font-family: "Work Sans",sans-serif;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;
    line-height: 50px;
    font-weight: 600;
    display: inline-block;
    letter-spacing: 0.5px;
    padding: 0 30px;
    margin-top: 18px;
    -webkit-box-shadow: 0 3px 10px rgba(71, 44, 173, 0.2);
    box-shadow: 0 3px 10px rgba(71, 44, 173, 0.2);
    cursor:pointer;
    :hover{
        background-color: #263a4f;
        color: #fff;
    }
`

HeroSection.propTypes = {
  
}

HeroSection.defaultProps = {
  
}

export default HeroSection

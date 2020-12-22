import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import AnimeImage from "../../Animation/AnimeImage"


const SubscribeComponent2 = () => {
    
    return (
      <>
        <BlockHeader>Block 2</BlockHeader>
        <SectionBackground>
            <Container>
                <StyledRow >
                    <div className="col-md-6">
                        <TitleSection>Stay Updated</TitleSection>
                        <DescriptionSection>
                            Subscribe to our newsletter to be always aware of our new updates. <br />
                            We build the most powerful and flexible templates for startups.
                        </DescriptionSection>
                        <StyledRow>
                            <form className="col-md-9 input-glass">
                                <StyledInput placeholder="Enter Email Adress"></StyledInput>
                                <StyledButton>sign up <i className="ti-arrow-right" /></StyledButton>
                            </form>
                        </StyledRow>
                    </div>
                    <div className="col-md-4 ml-auto text-center mt-8 mt-md-0">
                        <AnimeImage>
                            <img src="/phone-2.png" />
                        </AnimeImage>
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
    padding-top: 7rem;
    padding-bottom: 7rem;
    background-image: linear-gradient(120deg, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%);
    @media (max-width: 768px) {
        padding-top: 5rem;
        padding-bottom: 5rem;
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
    .no-gutters {
        margin-bottom:32px;
        box-shadow: 0 0 15px rgba(0,0,0,0.06);
        border: 1px solid #f1f2f3;
        cursor:pointer;
    }
`

const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    align-items:center;
    overflow:hidden;
    .mt-8 {
        margin-top:5rem;
    }
    .input-glass {
        display:flex;
    }
`

const TitleSection = styled.h2`
    color: #fff;
    font-weight: 400;
    font-size: 2.10938rem;
    letter-spacing: 0.5px;
    line-height: 1.5;
    font-family:Dosis;
`

const DescriptionSection = styled.p`
    color: rgba(255,255,255,0.85);
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 36px;
    line-height: 1.9;
    font-family: Open Sans;
`

const StyledButton = styled.button`
    display: inline-block !important;
    padding: 7px 32px 6px;
    font-size: 12px;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    border-radius: 2px;
    outline: none;
    transition: 0.15s linear;
    line-height: 2.2;
    background-color: rgba(248,249,250,0.6);
    border-color: transparent;
    color: #fff;
    i {
        font-size: 9px !important;
        margin-left: .75rem !important;
    }
`
const StyledInput = styled.input`
    border-left: 0;
    color: rgba(255,255,255,0.8);
    outline:none;
    border:none;
    height: calc(1.9em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: .9375rem;
    line-height: 2.2;
    display: block;
    border: none;
    background-color: rgba(255,255,255,0.2);
    font-weight: 400;
    
    position: relative;
    flex: 1 1 0%;
    min-width: 0;
    margin-bottom: 0;
`

SubscribeComponent2.propTypes = {
  
}

SubscribeComponent2.defaultProps = {
  
}

export default SubscribeComponent2
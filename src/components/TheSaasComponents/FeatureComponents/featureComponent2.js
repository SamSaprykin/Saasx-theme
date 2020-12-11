import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import AnimeImage from "../../Animation/AnimeImage"

const featureData = {
    title:"Create Admin Area",
    descritption:"A dull and avoid children was of neighbours on be into could on rationally it the survey monitors alone, leave forward by around a temple. The time. Which from the explains your which we were had home, years at food, profitable leave assignment. Manipulate stupid again. Have for view news following in and economic are with ran him."
}
const FeatureComponent2 = () => {
    
    return (
      <>
        <BlockHeader>Block 2</BlockHeader>
        <SectionBackground>
            <Container>
            
                <StyledRow>
                    <div className="col-md-6 text-align-left">
                        <SectionTitle>{featureData.title}</SectionTitle>
                        <SectionDescription>{featureData.descritption}</SectionDescription>
                        <ButtonFeature>get start now</ButtonFeature>
                    </div>
                    <div className="col-md-5 text-center">
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
    padding-top: 7rem;
    padding-bottom: 7rem;
    margin: 30px 20px 100px;
    border: 1px solid #f5f6f7;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    background-color: #fafbfb;
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
    div {
        align-self: center !important;
    }
    hr {
        width: 50px !important;
        margin: 2rem auto;
        border-top-color: rgba(255,255,255,0.15);
    }
    .text-align-left {
        text-align:left;
        padding-top: 15px;
        padding-bottom: 15px;
    }

`

const SectionTitle = styled.h2`
    color: #323d47;
    letter-spacing: 0.5px;
    font-family:Dosis;
    font-weight: 500;
    font-size: 2.10938rem;
    margin-bottom:35px;
`

const SectionDescription = styled.p`
    margin-bottom: 1rem;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    font-family:Open Sans;
`

const ButtonFeature = styled.button`
    outline:none;
    font-weight: 600;
    margin-top:40px;
    padding: 7px 32px 6px;
    font-size: 12px;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    border-radius: 2px;
    color: #fff;
    background-color: #50a1ff;
    line-height: 2.2;
    font-family:Open Sans;
    border-radius: 10rem;
    :hover {
        box-shadow: 0 3px 10px #50a1ff;
    }
`

FeatureComponent2.propTypes = {
  
}

FeatureComponent2.defaultProps = {
  
}

export default FeatureComponent2
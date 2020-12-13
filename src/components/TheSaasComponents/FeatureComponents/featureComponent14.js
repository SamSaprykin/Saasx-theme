import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import AnimeImage from "../../Animation/AnimeImage"

const featureData = {
    title:"Access Your Dashboard — Anywhere, Anytime",
    descritption:"His everything its from of safe from her the have owner avoid violin, either little defined brown think a was position. Are with phase belly, waved being dull boundless dressed associates.",
}

const FeatureComponent14 = () => {
    
    return (
      <>
        <BlockHeader>Block 14</BlockHeader>
        <SectionBackground>
            <Container>
            
                <StyledRow>
                    <div className="col-md-4 mx-auto text-center">
                                <AnimeImage>
                                    <img src="/ipad-1.png" />
                                </AnimeImage>
                        </div>
                        <div className="col-md-4 mx-auto text-align-left">
                                <SectionTitle>{featureData.title}</SectionTitle>
                                <SectionDescription>{featureData.descritption}</SectionDescription>
                                <CallToAction href="/">
                                    Read more
                                    <i className="ti-angle-right fs-10 ml-1" />
                                </CallToAction>
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
    position: relative;
    height: 100%;
`

const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    text-align:center;
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


const SectionTitle = styled.h2`
    color: #323d47;
    letter-spacing: 0.5px;
    font-family:Dosis;
    font-weight: 500;
    font-size: 1.75781rem;
    line-height: 1.5;
    margin-bottom: 2.5rem;
    
`

const SectionDescription = styled.p`
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    text-align: left;
    margin-bottom: 1rem;
    font-family:Open Sans;
`



const CallToAction = styled.a`
    font-weight: 300 ;
    color: #50a1ff;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    cursor:pointer;
    margin-bottom:1rem;
    display:block;
    max-width:160px;
    i {
        font-size: 10px !important;
    }
`


FeatureComponent14.propTypes = {
  
}

FeatureComponent14.defaultProps = {
  
}

export default FeatureComponent14
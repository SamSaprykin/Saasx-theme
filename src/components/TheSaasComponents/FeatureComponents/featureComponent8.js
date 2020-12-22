import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import AnimeImage from "../../Animation/AnimeImage"

const featureData = {
    title:"More Than You Think",
    descritption:"A dull and avoid children was of neighbours on be into could on rationally it the survey monitors alone, leave forward by around a temple. The time. Which from the explains your which we were had home, years at food, profitable leave assignment. Manipulate stupid again. Have for view news following in and economic are with ran him.",
    infoItems: [
        {
            iconItem:"fas fa-tv",
            titleItem:"Responsive Design",
            descritptionItem:"His everything its from of safe from her the have owner avoid violin, either little defined brown.",
        },
        {
            iconItem:"fas fa-code",
            titleItem:"Clean Code",
            descritptionItem:"His everything its from of safe from her the have owner avoid violin, either little defined brown.",
        }
    ]
}

const FeatureComponent8 = () => {
    
    return (
      <>
        <BlockHeader>Block 8</BlockHeader>
        <SectionBackground>
            <Container>
            
                <StyledRow>
                    <div className="col-md-5 text-center mx-auto">
                            <AnimeImage>
                                <img src="/phone-3.png" />
                            </AnimeImage>
                    </div>
                    <div className="col-md-6 align-self-center pb-7 text-align-left">
                            <SectionTitle>{featureData.title}</SectionTitle>
                            <SectionDescription>{featureData.descritption}</SectionDescription>
                            <hr />
                            <Media >
                            {
                                featureData.infoItems.map((item,index) => {
                                    return (
                                        <ItemWrapper key={index} className="col-6">
                                            <Lead>
                                                <i className={item.iconItem}></i>
                                            </Lead>
                                            <Text>
                                                <TitleItem>{item.titleItem}</TitleItem>
                                                <DescriptionItem>{item.descritptionItem}</DescriptionItem>
                                            </Text>
                                          
                                        </ItemWrapper>
                                    )
                                })
                            }
                            </Media>
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
    @media (max-width: 768px) {
        padding-top: 3rem;
        padding-bottom: 3rem;
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

const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    text-align:center;
    @media (max-width: 576px) {
        flex-direction:column-reverse;
    }
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
    color: #323d47;;
    letter-spacing: 0.5px;
    font-family:Dosis;
    font-weight: 500;
    font-size: 2.10938rem;
    margin-bottom: .5rem;
    @media (max-width: 576px) {
        font-size: 24px;
    }
`

const SectionDescription = styled.p`
    margin-bottom: 1rem;
    font-family:Open Sans;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    text-align: left;
`

const ItemWrapper = styled.div`
    text-align:left !important;
    display:flex;
    margin-bottom:1rem;
    flex-direction:column;
    
`

const Lead = styled.p`
    color: #ffba00;
    font-size: 1.875rem !important;
    font-weight: 100;
    margin-right: 1.5rem;    
`

const TitleItem = styled.h5`
    color: #323d47;
    font-weight: 500;
    font-size: 1.23047rem;
    font-family:Dosis;
    line-height: 1.5;
    letter-spacing: 0.75px;
    margin-bottom: .5rem;
    @media (max-width: 576px) {
        font-size: 18px;
    }
`

const DescriptionItem = styled.p`
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    text-align: left;
    margin-bottom:1rem;
    font-family:Open Sans;
`

const Media = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;

`

const Text = styled.div`
    
`


FeatureComponent8.propTypes = {
  
}

FeatureComponent8.defaultProps = {
  
}

export default FeatureComponent8
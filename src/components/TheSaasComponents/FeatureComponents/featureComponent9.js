import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import AnimeImage from "../../Animation/AnimeImage"

const featureData = {
    title:"Perfect for Your Business",
    descritption:"Designer duties, not just some of legs, the attained secure large obscurity, with I model most we his odd trade, made the an and another narrow she of other big in.",
    infoItems: [
        {
            iconItem:"fa fa-tv",
            titleItem:"RESPONSIVE",
            descritptionItem:"Professionally foster cross-platform solutions rather than highly.",
        },
        {
            iconItem:"fa fa-wrench",
            titleItem:"CUSTOMIZABLE",
            descritptionItem:"Professionally foster cross-platform solutions rather than highly.",
        },
        {
            iconItem:"fa fa-code",
            titleItem:"CLEAN",
            descritptionItem:"Professionally foster cross-platform solutions rather than highly.",
        },
        {
            iconItem:"far fa-file-alt",
            titleItem:"DOCUMENTED",
            descritptionItem:"Professionally foster cross-platform solutions rather than highly.",
        }
    ]
}

const FeatureComponent9 = () => {
    
    return (
      <>
        <BlockHeader>Block 9</BlockHeader>
        <SectionBackground>
            <Container>
            
                <StyledRow>
                    <div className="col-10 col-lg-6 mx-auto text-center text-lg-left">
                            <SectionTitle>{featureData.title}</SectionTitle>
                            <SectionDescription>{featureData.descritption}</SectionDescription>
                            <hr />
                            <StyledRow >
                            {
                                featureData.infoItems.map((item,index) => {
                                    return (
                                        <ItemWrapper className="col-md-6" key={index}>
                                            <Lead>
                                                <i className={item.iconItem}></i>
                                            </Lead>
                                            <TitleItem>{item.titleItem}</TitleItem>
                                            <DescriptionItem>{item.descritptionItem}</DescriptionItem>
                                        </ItemWrapper>
                                    )
                                })
                            }
                            </StyledRow>
                        </div>
                        <div className="col-lg-5 align-self-center">
                            <AnimeImage>
                                <img src="/header-gradient.jpg" />
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
`

const Container = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    
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
    font-size: 2.10938rem;
    line-height: 1.5;
    margin-bottom: .5rem;
    
`

const SectionDescription = styled.p`
    font-size: 1.125rem;
    line-height: 1.9;
    color: #757575;
    font-family:Open Sans;
    letter-spacing: 0.5px;
    font-weight: 300;
    margin-bottom: 1rem;
`

const ItemWrapper = styled.div`
    text-align:left !important;
    padding-top: 15px;
    padding-bottom: 15px;
`

const Lead = styled.p`
    font-size: 1.64063rem !important;   
    color: #50a1ff !important;
`

const TitleItem = styled.h5`
    color: #323d47;
    font-weight: 500;
    text-transform: uppercase !important;
    margin-bottom: .75rem !important;
    font-size: 1.05469rem;
    line-height: 1.5;
    font-family:Dosis;
    letter-spacing: 0.75px;
`

const DescriptionItem = styled.p`
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    margin-bottom: 1rem;
    font-size: 14px !important;
    font-family:Open Sans;
`


FeatureComponent9.propTypes = {
  
}

FeatureComponent9.defaultProps = {
  
}

export default FeatureComponent9
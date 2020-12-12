import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import AnimeImage from "../../Animation/AnimeImage"

const featureData = {
    subTitle:"FEATURE",
    title:"Great Combination",
    description: "Holisticly implement fully tested process improvements rather than dynamic internal.",
    imageFeature:"/feature-tablet.png",
    itemsFeature: [
        {
            iconItem:"icon-mobile",
            iconColor:"#191919",
            titleItem:"Responsive",
            descritptionItem:"Your website works on any device: desktop, tablet or mobile."
        },
        {
            iconItem:"icon-gears",
            iconColor:"#50a1ff;",
            titleItem:"Customizable",
            descritptionItem:"You can easily read, edit, and write your own code, or change everything."
        },
        {
            iconItem:"icon-tools",
            iconColor:"#926dde",
            titleItem:"UI Kit",
            descritptionItem:"There is a bunch of useful and necessary elements for developing your website."
        },
        {
            iconItem:"icon-layers",
            iconColor:"#ffba00;",
            titleItem:"Lego Base",
            descritptionItem:"You can find our code well organized, commented and readable."
        },
        {
            iconItem:"icon-recycle",
            iconColor:"#ff4954;",
            titleItem:"Clean Code",
            descritptionItem:"As you can see in the source code, we provided a clean code."
        },
        {
            iconItem:"icon-chat",
            iconColor:"#3cd458;",
            titleItem:"Support",
            descritptionItem:"When you purchase this template, you'll freely receive future updates."
        }
    ]
}

const FeatureComponent1 = () => {
    
    return (
      <>
        <BlockHeader>Block 1</BlockHeader>
        <SectionBackground>
            <Container>
                <SubTitle>{featureData.subTitle}</SubTitle>
                <SectionTitle>{featureData.title}</SectionTitle>
                <hr />
                <SectionInfo>{featureData.description}</SectionInfo>
                <StyledRow>
                    <div className="col-md-8 mx-auto mb-7">
                        <AnimeImage>
                            <StyledImage src={featureData.imageFeature} />
                        </AnimeImage>
                    </div>
                </StyledRow>
                <StyledRow>
                    {
                        featureData.itemsFeature.map((item, index) => {
                            return (
                                <ItemWrapper className="col-md-6 col-xl-4">
                                    <IconWrapper iconColor={item.iconColor}>
                                        <i className={item.iconItem} />
                                    </IconWrapper>
                                    <MediaBody>
                                        <h5>{item.titleItem}</h5>
                                        <p>{item.descritptionItem}</p>
                                    </MediaBody>
                                </ItemWrapper>
                            )
                        })
                    }
                </StyledRow>
                <div className="col-12 text-center">
                    <ButtonFeature>see more features</ButtonFeature>
                </div>
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
    hr {
        width: 5% !important;
        margin: 2.5rem auto 1.5rem;
        border-top: 1px solid rgba(255,255,255,0.15);
    }
`

const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    text-align:center;
    .text-align-left {
        text-align:left;
        padding-top: 15px;
        padding-bottom: 15px;
    }

`
const SubTitle = styled.span`
    display: block;
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.75px;
    margin-bottom: 1.5rem;
    word-spacing: 2px;
    color: rgba(153,153,153,0.6);
    text-align:center;
    margin:0 auto 24px;
    font-family:Open Sans;
`

const SectionInfo = styled.p`
    font-size: 1.125rem;
    font-size:18px;
    text-align:center;
    font-family:Open Sans;
    font-weight: 300;
    margin-bottom:80px;
`


const SectionTitle = styled.h2`
    color: #323d47;
    letter-spacing: 0.5px;
    text-align:center;
    font-family:Dosis;
    font-weight: 400;
    font-size: 2.10938rem;
`
const StyledImage = styled.img`
    margin-bottom: 3rem !important;
`

const ItemWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    padding:15px;
`

const IconWrapper = styled.div`
    font-size: 2.34375rem !important;
    width: 70px !important;
    font-weight: 300;
    text-align:left;
    color:${props => props.iconColor};
`

const MediaBody = styled.div`
    flex: 1;
    text-align:left;
    h5 {
        color: #323d47;
        letter-spacing: 0.5px;
        font-size: 1.23047rem;
        margin-bottom: .5rem;
        font-family:Dosis;
        font-weight: 500;
        line-height: 1.5;
    }
    p {
        line-height: 1.5;
        font-family:Open Sans;
        margin-bottom: 1rem;
        font-size: .9375rem;
        font-weight: 300;
        line-height: 1.9;
        color: #757575;
    }
`

const ButtonFeature = styled.button`
    outline:none;
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
    :hover {
        box-shadow: 0 3px 10px #50a1ff;
    }
`

FeatureComponent1.propTypes = {
  
}

FeatureComponent1.defaultProps = {
  
}

export default FeatureComponent1
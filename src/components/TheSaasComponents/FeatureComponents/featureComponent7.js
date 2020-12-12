import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const featureData = {
    subTitle:"FEATURE",
    title:"Great Combination",
    description: "Holisticly implement fully tested process improvements rather than dynamic internal.",
    leftColumnItems: [
        {
            iconItem:"icon-wallet",
            titleItem:"Go on budget",
            descritptionItem:"Intrinsicly e-enable tactical infrastructures through error-free total linkage. Dramatically implement orthogonal users.",
        },
        {
            iconItem:"icon-linegraph",
            titleItem:"Increase credit score",
            descritptionItem:"Intrinsicly e-enable tactical infrastructures through error-free total linkage. Dramatically implement orthogonal users.",
        }
    ],
    rightColumnItems: [
        {
            iconItem:"icon-clipboard",
            titleItem:"Plan your future",
            descritptionItem:"Intrinsicly e-enable tactical infrastructures through error-free total linkage. Dramatically implement orthogonal users.",
        },
        {
            iconItem:"icon-hourglass",
            titleItem:"Debt tracking",
            descritptionItem:"Intrinsicly e-enable tactical infrastructures through error-free total linkage. Dramatically implement orthogonal users.",
        }
    ]
}

const FeatureComponent7 = () => {
    
    return (
      <>
        <BlockHeader>Block 7</BlockHeader>
        <SectionBackground>
            <Container>
                <SubTitle>{featureData.subTitle}</SubTitle>
                <SectionTitle>{featureData.title}</SectionTitle>
                <hr />
                <SectionInfo>{featureData.description}</SectionInfo>
                <StyledRow>
                    <div className="col-md-6 mx-auto col-lg-4 text-center text-lg-right space-between">
                        {
                            featureData.leftColumnItems.map((item,index) => {
                                return (
                                    <ItemWrapper>
                                        <Lead>
                                            <i className={item.iconItem}></i>
                                        </Lead>
                                       <TitleItem>
                                           {item.titleItem}
                                       </TitleItem>
                                       <TextItem>
                                            {item.descritptionItem}
                                        </TextItem>
                                    </ItemWrapper>
                                )
                            })
                        }
                    </div>
                    <div className="col-lg-4 text-center px-5 py-7 py-lg-0">
                        <img src="/phone-1.png" />
                    </div>
                    <div className="col-md-6 mx-auto col-lg-4 text-center text-lg-left space-between">
                        {
                            featureData.rightColumnItems.map((item,index) => {
                                return (
                                    <ItemWrapper>
                                        <Lead>
                                            <i className={item.iconItem}></i>
                                        </Lead>
                                        <TitleItem>
                                           {item.titleItem}
                                        </TitleItem>
                                        <TextItem>
                                            {item.descritptionItem}
                                        </TextItem>
                                    </ItemWrapper>
                                )
                            })
                        }
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
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    hr {
        width: 5% !important;
        margin: 2.5rem auto 1.5rem;
        border-top-color: rgba(117,117,117,0.09);
    }
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
    .space-between {
        display:flex;
        flex-direction:column;
        justify-content:space-between;
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

const ItemWrapper = styled.div`
    
`

const Lead = styled.p`
    color: #926dde;
    font-size: 2.34375rem !important;
    margin-bottom: 1.5rem !important;
`

const TitleItem = styled.h5`
    color: #323d47;
    letter-spacing: 0.5px;
    font-weight: 400;
    font-size: 1.23047rem;
    font-family:Dosis;
    font-weight: 500;
`
const TextItem = styled.p`
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    font-family: Open Sans;
    margin-bottom;
`

FeatureComponent7.propTypes = {
  
}

FeatureComponent7.defaultProps = {
  
}

export default FeatureComponent7
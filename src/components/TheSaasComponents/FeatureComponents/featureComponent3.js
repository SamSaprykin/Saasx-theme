import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import AnimeImage from "../../Animation/AnimeImage"

const featureData = {
    subTitle:"FEATURE",
    title:"Full, Faster, Functional",
    description: "Completely leverage other's covalent products whereas covalent manufactured products.",
    featureItems: [
        {
            infoItem:"100+",
            descriptionItem:"Screens",
            imageItem:"/header-color.jpg"
        },
        {
            infoItem:"6.7x",
            descriptionItem:"Faster",
            imageItem:"/header-gradient.jpg"
        },
        {
            infoItem:"12",
            descriptionItem:"Mockups",
            imageItem:"/header-typing.jpg"
        },
    ]
}
const FeatureComponent3 = () => {
    
    return (
      <>
        <BlockHeader>Block 3</BlockHeader>
        <SectionBackground>
            <Container>
                <SubTitle>{featureData.subTitle}</SubTitle>
                <SectionTitle>{featureData.title}</SectionTitle>
                <hr />
                <SectionInfo>{featureData.description}</SectionInfo>
                <StyledRow>
                    {
                        featureData.featureItems.map((item,index) => {
                            return (
                                <div className="col-md-4"  key={index}>
                                    <ContentItem>
                                        <h5>{item.infoItem}</h5>
                                        <p>{item.descriptionItem}</p>
                                    </ContentItem>
                                    <AnimeImage>
                                        <img src={item.imageItem} />
                                    </AnimeImage>
                                </div>
                            )
                        })
                    }
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
    overflow:hidden;
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
    align-items:flex-end;
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
    .col-md-4:nth-of-type(1) {
        padding:0 2rem;
    }
    .col-md-4:nth-of-type(3) {
        padding:0 2rem;
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


const ContentItem = styled.div`
    h5 {
        font-size: 3.04688rem !important;
        color: #926dde;
        font-weight: 300;
        line-height: 1.9;
        font-family:Open Sans;
    }
    p {
        margin-bottom: 1rem;
        font-size: .9375rem;
        font-weight: 300;
        line-height: 1.9;
        color: #757575;
        font-family:Open Sans;
    }
    margin-bottom:3rem;
`


FeatureComponent3.propTypes = {
  
}

FeatureComponent3.defaultProps = {
  
}

export default FeatureComponent3
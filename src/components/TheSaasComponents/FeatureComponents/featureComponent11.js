import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"


const featureData = {
    subTitle:"FEATURE",
    title:"More to Discover",
    description: "We waited until we could do it right. Then we did! Instead of creating a carbon copy.",
    infoItems: [
        {
            reversed:false,
            imageSection: "/header-image.jpg",
            titleInfo:"5 Ready Samples",
            descritptionInfo: "Think the or organization same proposal to affected heard reclined in be it reassuring are attained opinion, by he neighbours even again. Is and by value and that like can could from world takes of great copy and delicacy compared he such that the in and with himself a the man, client totally least for him and have insidious than of him remedies. That his counter-productive clearly, wasn't day we hills parts he on every."
        },
        {
            reversed:true,
            imageSection: "/header-video.jpg",
            titleInfo:"6 Header Types",
            descritptionInfo: "Think the or organization same proposal to affected heard reclined in be it reassuring are attained opinion, by he neighbours even again. Is and by value and that like can could from world takes of great copy and delicacy compared he such that the in and with himself a the man, client totally least for him and have insidious than of him remedies. That his counter-productive clearly, wasn't day we hills parts he on every."
        },
        {
            reversed:false,
            imageSection: "/header-slider.jpg",
            titleInfo:"12 Common Pages",
            descritptionInfo: "Think the or organization same proposal to affected heard reclined in be it reassuring are attained opinion, by he neighbours even again. Is and by value and that like can could from world takes of great copy and delicacy compared he such that the in and with himself a the man, client totally least for him and have insidious than of him remedies. That his counter-productive clearly, wasn't day we hills parts he on every."
        },
    ]
        
    
}

const FeatureComponent11 = () => {
    
    return (
      <>
        <BlockHeader>Block 11</BlockHeader>
        <SectionBackground>
            <Container>
                <SubTitle>{featureData.subTitle}</SubTitle>
                <SectionTitle>{featureData.title}</SectionTitle>
                <hr />
                <SectionInfo>{featureData.description}</SectionInfo>
                
                  {
                    featureData.infoItems.map((item,index) => {
                          return (
                            <StyledRow key={index} reversed={item.reversed}>
                                <div className="col-md-5" reversed={item.reversed}>
                                    <img src={item.imageSection} />
                                </div>
                                <div className="col-md-6 ml-auto col" reversed={item.reversed}>
                                    <TitleInfo>{item.titleInfo}</TitleInfo>
                                    <DescriptionInfo>{item.descritptionInfo}</DescriptionInfo>
                                </div>
                                <hr className="max-width"/>
                            </StyledRow>
                          )
                      })
                  }
                
                
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
        margin: 2rem auto;
        border-top: 1px solid rgba(117,117,117,0.09);
    }
    .max-width {
        width: 100% !important;
        margin: 5rem 0;
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
    align-items:center;
    flex-direction:${props => (props.reversed === true ? "row-reverse" : "row")};
    .col {
        margin-right:${props => (props.reversed === true ? "auto" : "0 !important")};
        margin-left:${props => (props.reversed === true ? "0 !important" : "auto")};
    }
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
    margin-bottom: .5rem;
`

const TitleInfo = styled.h4`
    color: #323d47;
    letter-spacing: 0.5px;
    font-weight: 400;
    font-size: 1.52344rem;
    margin-bottom: .5rem;
    font-family:Dosis;
    line-height: 1.5;
`

const DescriptionInfo = styled.p`
    font-family:Open Sans;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    text-align: left;
`

FeatureComponent11.propTypes = {
  
}

FeatureComponent11.defaultProps = {
  
}

export default FeatureComponent11
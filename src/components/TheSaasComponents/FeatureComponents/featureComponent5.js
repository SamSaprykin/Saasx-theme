import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const featureData = {
    subTitle:"FEATURE",
    title:"Header Varieties",
    description: "We waited until we could do it right. Then we did! Instead of creating a carbon copy.",
    dataTabs: [
       "color","gradient","typing","image","video","slider"
    ],
    imagesTabs: [
        "/header-color.jpg","/header-gradient.jpg","/header-typing.jpg","/header-image.jpg","/header-video.jpg","/header-slider.jpg"
    ]
}

const FeatureComponent5 = () => {
    
    return (
      <>
        <BlockHeader>Block 5</BlockHeader>
        <SectionBackground>
            <Container>
                <SubTitle>{featureData.subTitle}</SubTitle>
                <SectionTitle>{featureData.title}</SectionTitle>
                <hr />
                <SectionInfo>{featureData.description}</SectionInfo>
                <StyledRow>
                    <Tabs className="tabs">
                        <TabList className="tab-list">
                            {
                                featureData.dataTabs.map((tab,index) => {
                                    
                                    return (
                                        <Tab className="item-tab" key={index}>
                                            <p className={`text-tab-${index}`}>
                                                {tab}
                                            </p>
                                            
                                        </Tab>
                                    )
                                    
                                })
                            }

                        </TabList>
                        {
                            featureData.imagesTabs.map((imageTab,index) => {
                                    
                                return (
                                    <TabPanel>
                                        <img src={imageTab} />
                                    </TabPanel>
                                )
                                
                            })
                        }
                        
                    </Tabs>
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
    .tabs {
        margin:0 auto;
        
        .tab-list {
            display:flex;
            justify-content: center;
            padding-left: 0;
            margin-bottom: 2rem;
            .react-tabs__tab--selected {
                p {
                    color:white;
                    background-color:black;
                }
            }
            .text-tab-0 {
                border-top-left-radius: 10rem;
                border-bottom-left-radius: 10rem;
            }
            .text-tab-5 {
                border-top-right-radius: 10rem;
                border-bottom-right-radius: 10rem;
            }
            
            li {
                min-width: 120px;
                text-align: center;
                
                p {
                    cursor:pointer;
                    padding: 5px 20px;
                    border: 1px solid #191919;
                    color: #191919;
                    text-transform: uppercase;
                    font-size: 0.8325rem;
                    letter-spacing: 1px;
                    border-left-width: 0;
                    font-family:Open Sans;
                    margin-bottom:0;
                }
                
            }
        }
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

FeatureComponent5.propTypes = {
  
}

FeatureComponent5.defaultProps = {
  
}

export default FeatureComponent5
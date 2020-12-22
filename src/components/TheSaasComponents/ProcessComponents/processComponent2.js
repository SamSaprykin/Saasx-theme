import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const processData = {
    title:"Our History",
    description:"TheThemeio founded to help startups, and it still shapes the way we work today.",
    steps: [
        {
            title:"Launched our website",
            date:"08 Feb 2017",
            description:"Think the or organization same proposal to affected heard reclined in be it reassuring are attained opinion, by he neighbours even again. Is and by value and that like can from world.",
            reversed:false,
        },
        {
            image:"/thumbnail-6.jpg",
            title:"Got the first 100 users",
            date:"08 Feb 2017",
            description:"Think the or organization same proposal to affected heard reclined in be it reassuring are attained opinion, by he neighbours even again. Is and by value and that like can from world.",
            reversed:true,
        },
        {
            title:"Raised $1.4 million in seed funding",
            date:"08 Feb 2017",
            description:"Think the or organization same proposal to affected heard reclined in be it reassuring are attained opinion, by he neighbours even again. Is and by value and that like can from world.",
            reversed:false,
        },
    ]
}

const ProcessComponent2 = () => {
    
    return (
      <>
        <BlockHeader>Block 2</BlockHeader>
        <SectionBackground>
            <Container>
                <HeaderSection>
                    <TitleSection>
                        {processData.title}
                    </TitleSection>
                    <DescriptionSection>
                        {processData.description}
                    </DescriptionSection>
                </HeaderSection> 
                <StyledRow>
                    <div className="col-lg-8 mx-auto" >
                        <ListSteps>
                            {
                                processData.steps.map((item,index) => {
                                    return (
                                        <TimelineItem className={item.reversed === true ? "reversed" : ""}>
                                            <TitleItem>{item.title}</TitleItem>
                                            <Date>{item.date}</Date>

                                            { item.image !== undefined &&
                                                <img src={item.image} />
                                            }
                                            
                                            <DescriptionItem>
                                                {item.description}
                                            </DescriptionItem>
                                        </TimelineItem>
                                    )
                                })
                            }
                        </ListSteps>
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
    text-align:center;
    align-items:center;
    flex-direction:column;
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
        border-top: 1px solid rgba(0,0,0,0.1);
        border-top-color: rgba(117,117,117,0.09);
        width: 50px;
        margin-top: 2.5rem;
        margin-bottom: 1.5rem;
    }
`

const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`

const HeaderSection = styled.div`
    text-align: center;
    max-width: 70%;
    margin: 0 auto 70px;
    @media (max-width: 768px) {
        max-width: 90%;
    }
`

const TitleSection = styled.h4`
    color: #323d47;
    letter-spacing: 0.5px;
    font-size: 2.10938rem;
    margin-bottom: .5rem;
    font-family:Dosis;
    line-height: 1.5;
    margin-bottom:50px;
    font-weight:400;
`

const DescriptionSection = styled.p`
    font-size: 1.125rem;
    font-weight: 300;
    margin-bottom: 1rem;
    line-height: 1.9;
    color: #757575;
    font-family:Open Sans;
`

const ListSteps = styled.ol`
    position: relative;
    list-style: none;
    padding: 1rem 0;
    margin: 0;
    :before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 2px;
        margin-left: -1px;
        background-color: #50a1ff;
        @media (max-width: 576px) {
            left: 8px;
        }
    }
    .reversed {
        margin-left: 50%;
        padding-left: 2.5rem;
        padding-right: 0;
        text-align: left;
        @media (max-width: 576px) {
            margin-left:0;
        }
        :before {
            @media (max-width: 576px) {
                top: 1.25rem;
                left: 1px;
            }
            right: auto;
            left: -8px;
        }
    }    
`

const TimelineItem = styled.li`
    position: relative;
    width: 50%;
    padding: 1rem 0 3rem;
    padding-right: 2.5rem;
    text-align: right;
    @media (max-width: 576px) {
        width: 100%;
        padding-right:0;
        text-align:left;
        padding-left: 2.5rem;
    }
    :before {
        content: '';
        position: absolute;
        right: -8px;
        top: 1.35rem;
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 2px solid #50a1ff;
        background-color: #fff;
        @media (max-width: 576px) {
            top: 1.25rem;
            left: 1px;
        }
    }
`

const TitleItem = styled.h5`
    color: #323d47;
    letter-spacing: 0.5px;
    font-weight: 400;
    font-size: 1.23047rem;
    line-height: 1.5;
    margin-bottom: .5rem;
    font-family:Dosis;

`

const Date = styled.span`
    font-size: .82031rem !important;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    font-family:Open Sans;
    margin-bottom: 1rem;
    display:block;
`

const DescriptionItem = styled.p`
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    font-family:Open Sans;
    margin-top:1rem;
`


ProcessComponent2.propTypes = {
  
}

ProcessComponent2.defaultProps = {
  
}

export default ProcessComponent2
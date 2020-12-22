import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const processData = {
    title:"How Does It Work?",
    description:"Explore the best SaaS template in the market in a short 1-minute video.",
    steps: [
        {
            image:"/vector-1.png",
            title:"Launched our website",
            description:"Think the or organization same proposal to affected heard reclined in be it reassuring are attained opinion, by he neighbours even again. Is and by value and that like can could from world takes of great copy and delicacy compared he such that the in and with himself a the man.",
            reversed:false,
        },
        {
            image:"/vector-2.png",
            title:"Got the first 100 users",
            description:"Think the or organization same proposal to affected heard reclined in be it reassuring are attained opinion, by he neighbours even again. Is and by value and that like can could from world takes of great copy and delicacy compared he such that the in and with himself a the man.",
            reversed:true,
        },
        {
            image:"/vector-3.png",
            title:"Raised $1.4 million in seed funding",
            description:"Think the or organization same proposal to affected heard reclined in be it reassuring are attained opinion, by he neighbours even again. Is and by value and that like can could from world takes of great copy and delicacy compared he such that the in and with himself a the man.",
            reversed:false,
        },
    ]
}

const ProcessComponent3 = () => {
    
    return (
      <>
        <BlockHeader>Block 3</BlockHeader>
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
                
                {
                    processData.steps.map((item,index) => {
                        return (
                            <StyledRow className={item.reversed === true ? "reversed" : "" } key={index}>
                                <div className={`col-md-5 ml-auto text-center text-md-left reversed-${item.reversed}`}>
                                    <NumerItem>0{index+1}</NumerItem>
                                    <TitleItem>{item.title}</TitleItem>
                                    <Date>{item.date}</Date>
                                    <DescriptionItem>
                                        {item.description}
                                    </DescriptionItem>
                                </div>
                                <div className="col-md-6 text-center" >
                                    { item.image !== undefined &&
                                        <img src={item.image} />
                                    }
                                </div>
                                
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
    .reversed {
        flex-direction:row-reverse;
        @media (max-width: 576px) {
            flex-direction:column-reverse;
        }
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
    padding-bottom: 3rem !important;
    padding-top: 3rem !important;
    align-items:center;
    .reversed-false {
        text-align: left !important;
        margin-right: auto !important;
        margin-left: 0 !important;
       
    }
    @media (max-width: 576px) {
        flex-direction:column-reverse;
    }
`

const HeaderSection = styled.div`
    text-align: center;
    max-width: 70%;
    margin: 0 auto 70px;
    @media (max-width: 576px) {
        max-width: 90%;
        margin-bottom:20px;
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
    @media (max-width: 576px) {
        font-size:30px;
    }
`

const DescriptionSection = styled.p`
    margin-bottom: 1rem;
    font-family:Open Sans;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
`

const TitleItem = styled.h5`
    color: #323d47;
    letter-spacing: 0.5px;
    font-weight: 500;
    font-size: 1.75781rem;
    line-height: 1.5;
    margin-bottom: .5rem;
    font-family:Dosis;
    @media (max-width: 576px) {
        text-align:center;
    }
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

const NumerItem = styled.p`
    line-height: 1;
    font-weight: 700 !important;
    font-size: 4.6875rem !important;
    opacity: .1 !important;
    font-family:Open Sans;
    @media (max-width: 576px) {
        margin-top:16px;
        text-align:center;
    }
`


ProcessComponent3.propTypes = {
  
}

ProcessComponent3.defaultProps = {
  
}

export default ProcessComponent3
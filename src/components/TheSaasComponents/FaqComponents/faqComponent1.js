import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"


const faqData = {
    title:"Frequently Asked Questions",
    subhead:"FAQ",
    description:"Got a question? We've got answers. If you have some other questions, see our support center.",
    faqItems: [
        {
            titleItem:"What payment services do you support?",
            descriptionItem:"We accept all major credit cards.",
        },
        {
            titleItem:"Can I update my card details?",
            descriptionItem:"Yes. Go to the billing section of your dashboard and update your payment information.",
        },
        {
            titleItem:"Is this a secure site for purchases?",
            descriptionItem:"Absolutely! We work with top payment companies which guarantees your safety and security. All billing information is stored on our payment processing partner which has the most stringent level of certification available in the payments industry.",
        },
        {
            titleItem:"Can I cancel my subscription?",
            descriptionItem:"You can cancel your subscription anytime in your account. Once the subscription is cancelled, you will not be charged next month. You will continue to have access to your account until your current subscription expires.",
        },
        {
            titleItem:"How long are your contracts?",
            descriptionItem:"Currently, we only offer monthly subscription. You can upgrade or cancel your monthly account at any time with no further obligation.",
        },
        {
            titleItem:"Can I request refund?",
            descriptionItem:"Unfortunately, not. We do not issue full or partial refunds for any reason.",
        }
    ]
}

const FaqComponent1 = () => {
    
    return (
      <>
        <BlockHeader>Block 1</BlockHeader>
        <SectionBackground>
            <Container>
            
                <StyledRow>
                    <div className="col-md-11">
                        <FaqSubhead>{faqData.subhead}</FaqSubhead>
                        <FaqTitle>{faqData.title}</FaqTitle>
                        <hr />
                        <FaqDescription>{faqData.description}</FaqDescription>
                    </div>
                </StyledRow>
                <StyledRow>
                    {
                        faqData.faqItems.map((item,index) => {
                            console.log(item)
                            return (
                                <div className="col-md-6 text-align-left" key={index}>
                                    <TitleItem>{item.titleItem}</TitleItem>
                                    <DescriptionItem>{item.descriptionItem}</DescriptionItem>
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


const FaqSubhead = styled.span`
    display: inline-block;
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.75px;
    margin-bottom: 1.5rem;
    word-spacing: 2px;
    color: rgba(153,153,153,0.6);
`

const FaqTitle = styled.h5`
    color: #323d47;
    letter-spacing: 0.5px;
    font-size: 2.10938rem;
    font-family:Dosis;
    @media (max-width: 576px) {
        font-size: 30px;
    }
`

const FaqDescription = styled.p`
    font-size: 1.0625rem;
    margin-bottom: 80px;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    font-family:Open Sans;
    @media (max-width: 576px) {
        font-size: 15px;
    }
`

const TitleItem = styled.h5`
    color: #323d47;
    letter-spacing: 0.5px;
    font-size: 1.23047rem;
    font-family:Dosis;
`

const DescriptionItem = styled.p`
    font-family:Open Sans;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    text-align: left;
`

FaqComponent1.propTypes = {
  
}

FaqComponent1.defaultProps = {
  
}

export default FaqComponent1
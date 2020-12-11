import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Collapse from "rc-collapse"
import "rc-collapse/assets/index.css"
import motion from '../../../utils/motionUtil';

const collapseData = [
    {
      question:"Is this a secure site for purchases?",
      answer:"Absolutely! We work with top payment companies which guarantees your safety and security. All billing information is stored on our payment processing partner which has the most stringent level of certification available in the payments industry..",
    },
    {
      question:"How long are your contracts?",
      answer:"Currently, we only offer monthly subscription. You can upgrade or cancel your monthly account at any time with no further obligation.",
    },
    {
      question:"Can I cancel my subscription?",
      answer:"You can cancel your subscription anytime in your account. Once the subscription is cancelled, you will not be charged next month. You will continue to have access to your account until your current subscription expires.",
    },
    {
      question:"Can I request refund?",
      answer:"Unfortunately, not. We do not issue full or partial refunds for any reason.",
    }
  ]
  var Panel = Collapse.Panel

const FaqComponent3 = () => {
    
    return (
      <>
        <BlockHeader>Block 3</BlockHeader>
        <SectionBackground>
            <Container>
                
                <SubTitle>FAQ</SubTitle>
                <SectionTitle>Frequently Asked Questions</SectionTitle>
                <SectionInfo>Got a question? We've got answers. If you have some other questions, see our support center</SectionInfo>
                <StyledRow>
                    <div className="col-md-8">
                        <SectionSlider>
                            <Collapse 
                            accordion={true}
                            openMotion={motion}
                            >
                                {
                                    collapseData.map((panel,index) => {
                                    return (
                                        <Panel 
                                            header={
                                            <>
                                                
                                                <div className="item-header-content">
                                                <PanelPostition>
                                                    {panel.question} 
                                                </PanelPostition>
                                                </div>
                                                
                                            </>
                                            }
                                            headerClass="header-panel"
                                        >
                                            <PanelContent>
                                                <PanelText>
                                                    {panel.answer}
                                                </PanelText>
                                            </PanelContent>
                                            
                                        </Panel>
                                    )
                                    })
                                }
                            </Collapse>
                        </SectionSlider>
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
    question: relative;
    background-question: center center;
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
    flex-direction:column;
    text-align:center;
    align-items:center;
    hr {
        width: 5% !important;
        margin: 2rem auto;
        border-top: 1px solid rgba(117,117,117,0.09);
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
    margin-bottom:1rem;
`

const SectionSlider = styled.div`
    margin-top:70px;
    box-shadow: 0 0 26px rgba(0,0,0,0.06);
    border: 1px solid #f1f2f3;
    .header-panel {
      padding:20px !important;
      display:flex !important;
      background-color: #f9fafb !important;
      border:none !important;
      outline:none !important;
      position:relative !important;
      justify-content:space-between;
      flex-direction:row-reverse;
      i {
          display:block !important;

      }
    }
    .item-header-content {
      width:300px;
      display:flex;
      justify-content:space-between;
    }
`

const PanelContent = styled.div`
    padding:20px 4px;
`


const SectionTitle = styled.h2`
    color: #323d47;
    letter-spacing: 0.5px;
    margin-bottom:80px;
    text-align:center;
    font-family:Dosis;
    font-weight: 500;
`


const PanelText = styled.p`
    margin-bottom: 1rem;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    text-align: left;
    font-family:Open Sans;
`

const PanelPostition = styled.span`
    font-family:Dosis;
    font-weight: 500;
    color: #323d47;
    letter-spacing: 0.75px;
    font-size: 1.05469rem;
`



FaqComponent3.propTypes = {
  
}

FaqComponent3.defaultProps = {
  
}

export default FaqComponent3
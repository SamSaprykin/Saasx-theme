import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const pricingData = {
    title:"Choose your pricing plan",
    cards: [
        {
            title:"single template",
            price:"29",
            subHead:"Single template, lifetime license",
        },
        {
            title:"one year membership",
            price:"99",
            subHead:"Get access to all templates",
        },
        {
            title:"lifetime access",
            price:"199",
            subHead:"Pay once, have fun forever",
        }
    ]
}

const PricingComponent2 = () => {
    
    return (
      <>
        <BlockHeader>Block 2</BlockHeader>
        <SectionBackground>
            <Container>
                <TitleSection>
                    {pricingData.title}
                </TitleSection>
                <StyledRow>
                    {
                        pricingData.cards.map((card,index) => {
                            return (
                                <div className="col-md-4">
                                    <Card color={card.color}>
                                        
                                        <CardBody>
                                            <Price>
                                                <IconDollar> $ </IconDollar>
                                                {card.price}
                                            </Price>
                                            <CardTitle>
                                                {card.title}
                                            </CardTitle>
                                            <SubHead>
                                                {card.subHead}
                                            </SubHead>
                                            
                                            <CtaCard>
                                                get started
                                            </CtaCard>
                                        </CardBody>
                                    </Card>
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
    background-color: #7a54d8;
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
    align-items:center;
`

const TitleSection = styled.h5`
    color: #fff;
    letter-spacing: 0.5px;
    font-weight: 500;
    font-size: 2.10938rem;
    line-height:1.5;
    font-family:Dosis;
    margin:0 auto 60px;
    text-align:center;
`

const Card = styled.div`
    text-align: center;
    transition: .5s;
    cursor:pointer;
    button {
        background-color: ${props => (props.color === "green" ? "#3cd458" : "")};
    }

`

const CardTitle = styled.div`
    line-height: 1.9;
    color: #fff;
    font-family:Open Sans;
    margin-bottom: .5rem;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.8325rem;
    opacity: .9;
`

const Price = styled.h2`
    color: #fff;
    letter-spacing: 0.5px;
    font-family:Dosis;
    margin-top:20px;
    line-height: 1.5;
    font-size: 5rem;
    font-weight: 200;
    opacity: .9;
`

const CardBody = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`


const SubHead = styled.p`
    color: #ffffff;
    margin-bottom: 1rem;
    line-height: 1.9;
    font-family:Open Sans;
    font-size: .9375rem;
    font-weight: 300;
    color: rgba(255,255,255,0.85);
    opacity: .9;
`

const CtaCard = styled.button`
    letter-spacing: 1.7px;
    border-radius: 10rem;
    outline: none;
    transition: 0.15s linear;
    color: rgba(255,255,255,0.6);
    font-family:Open Sans;
    margin: 2.75rem 0 1.75rem;
    line-height: 1.9;
    width: 200px !important;
    font-size: 11px;
    padding: 8px 26px 6px;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    border: 1px solid rgba(255,255,255,0.6);
    :hover {
        color: #757575;
        background-color: #f8f9fa;
        box-shadow: 1px 1px 15px rgba(255,255,255,0.6);
    }
`

const IconDollar = styled.span`
    display: inline-block;
    font-size: 16px;
    vertical-align: text-top;
    margin-right: 8px;
    margin-top: 16px;
`


PricingComponent2.propTypes = {
  
}

PricingComponent2.defaultProps = {
  
}

export default PricingComponent2
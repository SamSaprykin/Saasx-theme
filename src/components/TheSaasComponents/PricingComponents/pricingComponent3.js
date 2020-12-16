import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const pricingData = {
    title:"Choose License Type",
    nameSection:"pricing",
    description:"Won't said night above you're she'd behold moveth said one fowl. Beast forth. Man creepeth. She'd above bring blessed.",
    cards: [
        {
            title:"PERSONAL",
            price:"free",
            subHead:"Billed",
            color:"",
            infoRows:[
                "Single Website","Manual Import","No Support"
            ]
        },
        {
            title:"team",
            price:"$39",
            subHead:"Billed",
            color:"green",
            infoRows:[
                "7 Websites","Auto Import","10 Hour Support"
            ]
        },
        {
            title:"business",
            price:"$69",
            priceYear:"750",
            subHead:"Billed",
            color:"",
            infoRows:[
                "Unlimited Websites","Auto Import","24/7 Support"
            ]
        }
    ]
}

const PricingComponent3 = () => {
    
    return (
      <>
        <BlockHeader>Block 3</BlockHeader>
        <SectionBackground>
            <Container>
                    <NameSection>{pricingData.nameSection}</NameSection>
                    <TitleSection>
                        {pricingData.title}
                    </TitleSection>
                    <hr />
                    <DescriptionSection>{pricingData.description}</DescriptionSection>
                    
                <StyledRow>
                    {
                        pricingData.cards.map((card,index) => {
                            return (
                                <div className="col-md-4">
                                    <Card color={card.color}>
                                        <CardHeader>
                                            {card.title}
                                        </CardHeader>
                                        <CardBody>
                                            <Price>
                                               
                                                {card.price}
                                            </Price>
                                                
                                            
                                            <ListItems>
                                                {
                                                    card.infoRows.map((card,index) =>{
                                                        return (
                                                          <li key={index}>{card}</li>
                                                        )
                                                    })
                                                }
                                            </ListItems>
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
    background-color: #fafbfb;
    margin: 30px 20px 100px;
    border: 1px solid #f5f6f7;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    padding-top: 7rem;
    padding-bottom: 7rem;
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
    text-align:center;
    align-items:center;
`

const NameSection = styled.span`
    display: inline-block;
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.75px;
    margin-bottom: 1.5rem;
    word-spacing: 2px;
    color: rgba(153,153,153,0.6);
`

const TitleSection = styled.h5`
    color: #323d47;
    letter-spacing: 0.5px;
    font-weight: 400;
    font-size: 2.10938rem;
    margin-bottom: .5rem;
    line-height:1.5;
    font-family:Dosis;
`

const DescriptionSection = styled.p`
    font-size: 1.125rem;
    line-height: 1.9;
    color: #757575;
    font-family:Open Sans;
    max-width:777px;
    font-weight: 300;
    margin:0 auto 70px;
`


const Card = styled.div`
    border-radius: 5px;
    text-align: center;
    transition: .5s;
    cursor:pointer;

`

const CardHeader = styled.div`
    padding: 16px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.9;
    color: #757575;
    font-family:Open Sans;
`

const Price = styled.h2`
    font-size: 60px;
    font-weight: 600;
    color: #323d47;
    letter-spacing: 0.5px;
    font-family:Dosis;
    line-height: 1.5;
`

const CardBody = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const ListItems = styled.ul`
    li {
        font-family:Open Sans;
        margin-bottom:8px;
        font-size: .9375rem;
        font-weight: 300;
        line-height: 1.9;
        color: #757575;
    }
`


const CtaCard = styled.button`
    width: 200px !important;
    border-radius: 10rem;    
    font-size: 11px;
    padding: 8px 26px 6px;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    outline: none;
    transition: 0.15s linear;
    color: #50a1ff;
    border:1px solid #50a1ff;
    font-family:Open Sans;
    margin: 2.75rem 0 1.75rem;
    line-height: 1.9;
    :hover {
        color: white;
        background-color:#50a1ff;
    }
`



PricingComponent3.propTypes = {
  
}

PricingComponent3.defaultProps = {
  
}

export default PricingComponent3
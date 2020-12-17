import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const pricingData = {
    title:"Our Plans",
    cards:[
        {
            title:"Free",
            description:"First image behold. Behold abundantly fly god together place us fly one subdue fly a, moved Appear morning.",
            price:"$0",
            info:"for 100 MB space",
        },
        {
            title:"Personal",
            description:"First image behold. Behold abundantly fly god together place us fly one subdue fly a, moved Appear morning.",
            price:"$9",
            info:"for 100 GB space",
        },
        {
            title:"Team",
            description:"First image behold. Behold abundantly fly god together place us fly one subdue fly a, moved Appear morning.",
            price:"$29",
            info:"for 10 TB space",
        },
        {
            title:"Business",
            description:"First image behold. Behold abundantly fly god together place us fly one subdue fly a, moved Appear morning.",
            price:"$49",
            info:"for unlimited space",
        },
    ]

}

const PricingComponent7 = () => {
    
    return (
      <>
        <BlockHeader>Block 7</BlockHeader>
        <SectionBackground>
            <Container>
                <TitleSection>
                    {pricingData.title}
                </TitleSection>
                {
                    pricingData.cards.map((card,index) => {
                        return (
                            <StyledRow className="row no-gutters" key={index}>
                                <InfoCard className="col-md-9 plan-description">
                                    <CardTitle>
                                        {card.title}
                                    </CardTitle>
                                    <CardDescription>
                                        {card.description}
                                    </CardDescription>
                                </InfoCard>
                                <PriceCard className="col-md-3 plan-price">
                                    <CardPrice>
                                        {card.price}
                                    </CardPrice>
                                    <CardInfo>
                                        {card.info}
                                    </CardInfo>
                                </PriceCard>
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
`

const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    text-align:center;
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
    .no-gutters {
        margin-bottom:32px;
        box-shadow: 0 0 15px rgba(0,0,0,0.06);
        border: 1px solid #f1f2f3;
        cursor:pointer;
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
    color: #323d47;
    letter-spacing: 0.5px;
    font-weight: 400;
    font-size: 2.10938rem;
    margin-bottom: 40px;
    line-height:1.5;
    font-family:Dosis;
`

const CardTitle = styled.h5`
    font-weight: 500;
    color: #323d47;
    letter-spacing: 0.5px;
    font-size: 1.23047rem;
    line-height: 1.5;
    margin-bottom: .5rem;
    font-family:Dosis;
`

const CardDescription = styled.p`
    color: #757575;
    margin-bottom: 0 !important;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    font-family:Open Sans;
`

const CardPrice = styled.h4`
    font-weight: 300;
    font-size: 2.25rem;
    padding-top: 1rem;
    color: #323d47;
    letter-spacing: 0.5px;
    font-family:Dosis;
`
const CardInfo = styled.span`
    font-size: 1.125rem;
    font-weight: 300;
    margin-bottom: 16px;
    text-align: center;
    color: #757575;
    font-family:Open Sans;
    display:block;
`

const InfoCard = styled.div`
    text-align:left;
    background-color: #fafbfb;
    padding: 2rem !important;
`

const PriceCard = styled.div`
    
`

PricingComponent7.propTypes = {
  
}

PricingComponent7.defaultProps = {
  
}

export default PricingComponent7
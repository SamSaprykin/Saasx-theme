import { Link } from "gatsby"
import React, {useState} from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const pricingData = {
    title:"The most fair pricing plans ever.",
    nameSection:"pricing plans",
    description:"Our prices are very easy to understand. There's not any extra or hidden fee. You just pay what is listed here.",
    cards:[
        {
            title:"starter",
            cardImage:"/thumb3.jpg",
            price:"$6.99",
            priceYear:"$64.99",
            subHead:"Package",
            infoRows:[
                "30 days free trial","Basic support","1 GB attachment"
            ]
        },
        {
            title:"business",
            cardImage:"/thumb11.jpg",
            price:"$18.99",
            priceYear:"$164.99",
            subHead:"Package",
            infoRows:[
                "7 Website","Unlimited Bandwidth","Auto Import"
            ]
        }
    ]

}

const PricingComponent6 = () => {
    const [price, setPrice] = useState('monthly');
    return (
      <>
        <BlockHeader>Block 6</BlockHeader>
        <SectionBackground>
            <Container>
                <StyledRow>
                    <div className="col-md-4 text-left">
                        
                        <TitleSection>
                            {pricingData.title}
                        </TitleSection>
                        
                        <SwitcherWrapper>
                            <StyledLabel
                                className={price === "monthly" ? "active" : ""}
                                onClick={() => setPrice('monthly')}
                            >
                                <StyledInput type="radio"
                                    value="mothly"
                                    name="price"
                                    
                                />Monthly
                            </StyledLabel>
                            <StyledLabel
                                className=""
                                onClick={() => setPrice('yearly')}
                                className={price === "yearly" ? "active" : ""}
                            >
                                <StyledInput type="radio"
                                    value="yearly"
                                    name="price"
                                    
                                />Yearly
                            </StyledLabel>
                        </SwitcherWrapper>
                        <DescriptionSection>{pricingData.description}</DescriptionSection>
                        <CtaSection to="/">
                            <span>
                                View full pricing details
                            </span>
                            <i className="ti-arrow-right"></i>
                        </CtaSection>
                    </div>
                    <div className="col-md-7 ml-auto">

                        <StyledRow>
                            {
                                pricingData.cards.map((card,index) => {
                                    return (
                                        <div className="col-md-6">
                                            <Card>
                                                <CardHeader>
                                                    <CardHeaderTitle>
                                                        {card.title}
                                                    </CardHeaderTitle>
                                                    <SubHead>
                                                        {
                                                            price === "monthly" && "Monthly "
                                                        }
                                                        {
                                                            price === "yearly" && "Yearly "
                                                        }
                                                        {card.subHead}
                                                    </SubHead>
                                                    <CardImage src={card.cardImage} />
                                                </CardHeader>
                                                <CardBody>
                                                    <Price>
                                                        {
                                                            card.type === "price" && <IconDollar> $ </IconDollar>
                                                        }
                                                        {
                                                            price === "monthly" && card.price
                                                        }
                                                        {
                                                            price === "yearly" && card.priceYear
                                                        }
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
                                                        sign up
                                                    </CtaCard>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    )
                                })
                            }
                            
                        </StyledRow>
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
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 30px 20px 100px;
    border: 1px solid #f5f6f7;
    background-color: #fafbfb;
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
    align-items:center;
    .text-left {
        text-align:left;
    }
`



const TitleSection = styled.h5`
    color: #191919 !important;
    letter-spacing: 0.5px;
    letter-spacing: 0.5px;
    font-weight: 600 !important;
    font-size: 3.04688rem !important;
    margin-bottom: 1rem;
    font-family:Open Sans;
    max-width:330px;
    line-height: 1.3;
`

const DescriptionSection = styled.p`
    font-size: 1.125rem;
    line-height: 1.9;
    text-align: left;
    font-family:Open Sans;
    max-width:777px;
    font-weight: 300;
    margin-bottom: 1rem;
`

const CtaSection = styled(Link)`
    display:flex;
    align-items:center;
    color: #50a1ff;
    font-weight: 400 !important;
    font-family:Open Sans;
    font-size: .9375rem;
    line-height: 1.9;
    display:block;
    i {
        font-size: 10px !important;
        margin-left:8px;
    }
    :hover {
        color: #50a1ff;
    }
`

const SwitcherWrapper = styled.div`
    position: relative;
    display: inline-flex;
    vertical-align: middle;
    text-align: center !important;
    margin:3rem 0;
    .active {
        color: #fff;
        background-color: #191919;
    }
`

const StyledInput = styled.input`
    position: absolute;
    clip: rect(0, 0, 0, 0);
    pointer-events: none;

`

const StyledLabel = styled.label`
    color: #191919;
    border:1px solid #191919;
    box-shadow: 0 0 0 0rem rgba(233,236,240,0.5);
    width: 150px !important;
    border-radius: 10rem;
    font-size: 11px;
    padding: 8px 26px 6px;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    outline: none;
    background-image: none;
    font-weight: 600;
    cursor:pointer;
    line-height: 1.9;
    font-family:Open Sans;
    :nth-of-type(1) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        margin-right:-1px;
    }
    :nth-of-type(2) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    :hover {
        color: #fff;
        background-color: #191919;
    }
`

const CardImage = styled.img`
    position:absolute;
    top:0;
    z-index:0;
`

const Card = styled.div`
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
    transition: .5s;
    cursor:pointer;
    h2 {
        color: ${props => (props.color === "green" ? "#3cd458" : "1")};
    }
    button {
        background-color: ${props => (props.color === "green" ? "#3cd458" : "")};
    }
    :hover {
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.05);
    }
    padding-bottom: 2rem !important;
`

const CardHeader = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    height: 200px !important;
    flex-direction:column;
`

const CardHeaderTitle = styled.h5`
    text-transform: uppercase;
    font-size: 1.64063rem !important;
    font-weight: 600;
    line-height: 1.9;
    color: #757575;
    font-family:Open Sans;
    letter-spacing: 1px;
    font-size: 1.125rem;
    color: rgba(255,255,255,0.85);
    position:relative;
    z-index:100;
`

const Price = styled.h2`
    font-size: 3.04688rem !important;
    font-weight: 600;
    color: #191919 !important;
    letter-spacing: 0.5px;
    font-family:Open Sans;
    margin-top:20px;
    line-height: 1.9;
    margin-bottom: 1rem;
`

const CardBody = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const ListItems = styled.ul`
    li {
        font-family:Open Sans;
        color: #868e96 !important;
        font-size: .9375rem;
        font-weight: 300;
        line-height: 1.9;
        color: #757575;
    }
`
const SubHead = styled.p`
    height:24px;
    color: rgba(255,255,255,0.85);
    margin-bottom: 1rem;
    font-family:Open Sans;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    position:relative;
    z-index:100;
`

const CtaCard = styled.button`
    font-size: 11px;
    padding: 8px 26px 6px;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    outline: none;
    transition: 0.15s linear;
    color: #929daf;
    font-family:Open Sans;
    margin: 2.75rem 0 1.75rem;
    line-height: 1.9;
    border-radius: 10rem;
    width: 200px !important;
    border:1px solid #e9ecf0;
    :hover {
        background-color:#e9ecf0;
    }
`

const IconDollar = styled.span`
    display: inline-block;
    font-size: 16px;
    vertical-align: text-top;
    margin-right: 8px;
    margin-top: 16px;
`

PricingComponent6.propTypes = {
  
}

PricingComponent6.defaultProps = {
  
}

export default PricingComponent6
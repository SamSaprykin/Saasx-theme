import { Link } from "gatsby"
import React, {useState} from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const pricingData = {
    title:"Choose your perfect plan",
    nameSection:"pricing",
    description:"Won't said night above you're she'd behold moveth said one fowl. Beast forth. Man creepeth. She'd above bring blessed.",
    cards: [
        {
            title:"single",
            price:"free",
            priceYear:"free",
            type:"free",
            subHead:"Billed",
            color:"",
            infoRows:[
                "30 days free trial","Basic support","1 GB attachment"
            ]
        },
        {
            title:"studio",
            price:"39",
            priceYear:"450",
            type:"price",
            subHead:"Billed",
            color:"green",
            infoRows:[
                "30 days free trial","Ticket support","100 GB attachment"
            ]
        },
        {
            title:"business",
            price:"69",
            priceYear:"750",
            type:"price",
            subHead:"Billed",
            color:"",
            infoRows:[
                "30 days free trial","Call support","Unlimited attachments"
            ]
        }
    ]
}

const PricingComponent1 = () => {
    const [price, setPrice] = useState('monthly');
    return (
      <>
        <BlockHeader>Block 1</BlockHeader>
        <SectionBackground>
            <Container>
                    <NameSection>{pricingData.nameSection}</NameSection>
                    <TitleSection>
                        {pricingData.title}
                    </TitleSection>
                    <hr />
                    <DescriptionSection>{pricingData.description}</DescriptionSection>
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
                                                
                                            <SubHead>
                                                {card.subHead}
                                                {
                                                    price === "monthly" && " monthly"
                                                }
                                                {
                                                    price === "yearly" && " yearly"
                                                }
                                            </SubHead>
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

const SwitcherWrapper = styled.div`
    position: relative;
    display: inline-flex;
    vertical-align: middle;
    text-align: center !important;
    margin:0 0 3rem;
    .active {
        background-color: #e9ecf0;
    }
`

const StyledInput = styled.input`
    position: absolute;
    clip: rect(0, 0, 0, 0);
    pointer-events: none;

`

const StyledLabel = styled.label`
    color: #757575;
    border:1px solid #e9ecf0;
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
        background-color: #e9ecf0;
    }
`

const Card = styled.div`
    background-color: #fff;
    border: 1px solid #f1f2f3;
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
`

const CardHeader = styled.div`
    padding: 16px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 600;
    border-bottom: 1px solid #f1f2f3;
    background-color: #fcfdfe;
    line-height: 1.9;
    color: #757575;
    font-family:Open Sans;
    margin-bottom: 1rem;
`

const Price = styled.h2`
    font-size: 60px;
    font-weight: 600;
    color: #323d47;
    letter-spacing: 0.5px;
    font-family:Dosis;
    margin-top:20px;
    line-height: 1.5;
`

const CardBody = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const ListItems = styled.ul`
    li {
        font-size:12.75px;
        line-height: 1.9;
        font-family:Open Sans;
        color: #868e96 !important;
        margin-bottom:8px;
    }
`
const SubHead = styled.p`
    height:24px;
    color: #bfc5ca !important;
    margin-bottom: 1rem;
    line-height: 1.9;
    font-family:Open Sans;
    font-size:12.75px;
`

const CtaCard = styled.button`
    font-size: 11px;
    padding: 8px 26px 6px;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    border-radius: 2px;
    outline: none;
    transition: 0.15s linear;
    color: #fff;
    background-color: #50a1ff;
    font-family:Open Sans;
    margin: 2.75rem 0 1.75rem;
    line-height: 1.9;
`

const IconDollar = styled.span`
    display: inline-block;
    font-size: 16px;
    vertical-align: text-top;
    margin-right: 8px;
    margin-top: 16px;
`

PricingComponent1.propTypes = {
  
}

PricingComponent1.defaultProps = {
  
}

export default PricingComponent1
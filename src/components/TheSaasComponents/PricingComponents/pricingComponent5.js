import { Link } from "gatsby"
import React, {useState} from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const pricingData = {
    title:"Choose your pricing plan, No hidden fees!",
    nameSection:"pricing plans",
    description:"We have a single plan which you can choose to pay monthly or yearly. You can always cancel your subscription anytime from your account.",
    cardData: {
        title:"STARTER",
        price:"$6.99",
        priceYear:"$64.99",
        subHead:"Package",
        infoRows:[
            "30 days free trial","Basic support","1 GB attachment"
        ]
    }
}

const PricingComponent5 = () => {
    const [price, setPrice] = useState('monthly');
    return (
      <>
        <BlockHeader>Block 5</BlockHeader>
        <SectionBackground>
            <Container>
                <StyledRow>
                    <div className="col-md-6 text-left">
                        <NameSection>{pricingData.nameSection}</NameSection>
                        <TitleSection>
                            {pricingData.title}
                        </TitleSection>
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
                    </div>
                    <div className="col-md-4 mx-auto mt-7 mt-md-0">
                        <Card color={pricingData.cardData.color}>
                            <CardHeader>
                                {pricingData.cardData.title}
                            </CardHeader>
                            <SubHead>
                                {
                                    price === "monthly" && "Monthly "
                                }
                                {
                                    price === "yearly" && "Yearly "
                                }
                                {pricingData.cardData.subHead}
                            </SubHead>
                            <CardBody>
                                <Price>
                                    {
                                        pricingData.cardData.type === "price" && <IconDollar> $ </IconDollar>
                                    }
                                    {
                                        price === "monthly" && pricingData.cardData.price
                                    }
                                    {
                                        price === "yearly" && pricingData.cardData.priceYear
                                    }
                                </Price>
                                <ListItems>
                                    {
                                        pricingData.cardData.infoRows.map((card,index) =>{
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
    .text-left {
        text-align:left;
    }
`

const NameSection = styled.span`
    display: inline-block;
    font-size: .9375rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    word-spacing: 2px;
    color: #bfc5ca !important;
    letter-spacing: 2px;
    font-family:Open Sans;
`

const TitleSection = styled.h5`
    color: #323d47;
    letter-spacing: 0.5px;
    letter-spacing: 0.5px;
    font-weight: 200 !important;
    font-size: 2.10938rem;
    margin-bottom: 2rem !important;
    line-height:1.5;
    font-family:Dosis;
    max-width:330px;
`

const DescriptionSection = styled.p`
    font-size: .9375rem;
    line-height: 1.9;
    text-align: left;
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
    padding-top: 2rem !important;
`

const CardHeader = styled.div`
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.9;
    color: #757575;
    font-family:Open Sans;
    letter-spacing: 1px;
    font-size: 1.125rem;
    color: #191919 !important;
    
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
    color: #bfc5ca !important;
    margin-bottom: 1rem;
    font-family:Open Sans;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
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

PricingComponent5.propTypes = {
  
}

PricingComponent5.defaultProps = {
  
}

export default PricingComponent5
import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"


const cardsData = [
    {
        title:"Business",
        descritpion:"Some quick example text to build on the card title and make up the bulk.",
        info:"0 800 123 4455"
    },
    {
        title:"Press",
        descritpion:"Some quick example text to build on the card title and make up the bulk.",
        info:"info@example.com"
    },
    {
        title:"Meet",
        descritpion:"Some quick example text to build on the card title and make up the bulk.",
        info:"Get Direction"
    }
]

const ContactComponents9 = () => {
    
    return (
      <>
        <BlockHeader>Block 9</BlockHeader>

        <SectionBackground>
            <Container>
            <SectionTitle>Contact Us</SectionTitle>
            <SectionSubhead>
                They original on mountains, drew the support time. The of to graduate into to is the to she.
            </SectionSubhead>
                <StyledRow>
                    {
                        cardsData.map((card,index) => {
                            return (
                                <div className="col-md-4 col-lg-4" key={index}>
                                    <ContactCard>
                                        <TitleCard>
                                            {card.title}
                                        </TitleCard>
                                        <DescriptionCard>
                                            {card.descritpion}
                                        </DescriptionCard>
                                        <InfoCard>
                                            {card.info}
                                        </InfoCard>
                                    </ContactCard>
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

const SectionTitle = styled.h2`
    color: #323d47;
    letter-spacing: 0.5px;
    margin-bottom:80px;
    text-align:center;
    font-family:Dosis;
    font-size: 3.5rem;
    font-weight: 200;
    line-height: 1.5;
`

const SectionBackground = styled.div`
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 7rem;
    padding-bottom: 7rem;
    background-color: #fafbfb;
    margin: 30px 20px 100px;
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
    margin-top:70px;
`


const SectionSubhead = styled.span`
    text-align:center;
    margin:0 auto;
    display:block;
    font-size: 1.125rem;
    line-height: 1.9;
    color: #757575;
    font-family:Open Sans;
    font-weight: 300;
`

const ContactCard = styled.div`
    padding: 1.5rem !important;
    border: 1px solid #f1f2f3 !important;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    background-color: #fff;
    background-clip: border-box;
    border-radius: .25rem;
    align-items:center;
`

const TitleCard = styled.h5`
    font-family: Dosis;
    font-size: 1.23047rem;
    line-height: 1.5;
    color: #323d47;
    letter-spacing: 0.5px;
    font-weight:500;
`

const DescriptionCard = styled.p`
    font-size: .87891rem !important;
    font-family: Open Sans;
    margin-bottom: 1rem;
    text-align: center !important;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
`

const InfoCard = styled.span`
    font-family: Open Sans;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #50a1ff;
`

ContactComponents9.propTypes = {
  
}

ContactComponents9.defaultProps = {
  
}

export default ContactComponents9
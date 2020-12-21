import React from "react"
import styled from "styled-components"

const coverData = {
    coverDataTitle:"Find the <span> best rated </span> <span> restaurants </span> near you.",
    coverDescritption: "We can help you find the best restaurants, fast foods, and cafes near you; take an order and deliver it to your door. Register once, and order from everywhere.",
    coverImage:"/bg_vector.png"
}

const CoverComponents2 = () => {
      
    return (
      <>
        <BlockHeader>Block 2</BlockHeader>

        <SectionBackground>
            <Container>
                <StyledRow>
                    <div className="col-lg-6">
                        <TitleCover><div dangerouslySetInnerHTML={{ __html: `<div> ${coverData.coverDataTitle} </div>` }} /></TitleCover>
                        <DescriptionCover>{coverData.coverDescritption}</DescriptionCover>
                        <CoverCtaWrapper>
                            <ButtonCover>find restaurants</ButtonCover>
                            <ButtonCover className="white">order now</ButtonCover>
                        </CoverCtaWrapper>
                    </div>
                    <div className="col-lg-5 ml-auto">
                        <Cover src={coverData.coverImage}/>
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
    background-image: linear-gradient(135deg, #f9f7ff 0%, #fff 50%, #f6f3ff 100%);
    padding-top: 90px;
    @media(max-width:768px) {
        padding-top: 5rem;  
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
    align-items:center;
`

const DescriptionCover = styled.p`
    margin-bottom: 5rem !important;
    font-size: 1.125rem;
    margin-top: 1.5rem !important;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    text-align: left;
    font-family:Open Sans;
    max-width:540px;
    @media(max-width:768px) {
        margin-bottom: 3rem !important;
    }
`

const TitleCover = styled.h3`
    font-weight: 500;
    color: #323d47;
    letter-spacing: 0.5px;
    font-size: 2.57813rem;
    margin-bottom: .5rem;
    font-family:Dosis;
    max-width:440px;
    span:nth-child(2) {
        color: #926dde !important;
    }
    span:nth-child(1) {
        color: #ffba00 !important;
    }
    @media(max-width:768px) {
        font-size:36px;
    }
`
const Cover = styled.img`
    max-width: 100%;
    height: auto;
`

const CoverCtaWrapper = styled.div`
    display:flex;
    
    @media(max-width:768px) {
        margin-bottom:2rem;
    }
    @media(max-width:576px) {
        flex-direction:column;
    }
    .white {
        color: #929daf;
        background-color: transparent;
        background-image: none;
        border:1px solid #e9ecf0;
        :hover {
            background-color: #e9ecf0;
            color:black;
            box-shadow:none;
        }
    }
`

const ButtonCover = styled.button`
    border-radius: 10rem;
    color: #fff;
    background-color: #50a1ff;
    border-color: #50a1ff;
    padding: 7px 32px 6px;
    font-size: 12px;
    margin: 8px;
    text-transform:uppercase;
    font-family:Open Sans;
    letter-spacing: 1.7px;
    line-height: 2.2;
    :hover {
        box-shadow: 1px 1px 15px 0px rgba(80,161,255,0.7);
    }
`

CoverComponents2.propTypes = {
  
}

CoverComponents2.defaultProps = {
  
}

export default CoverComponents2
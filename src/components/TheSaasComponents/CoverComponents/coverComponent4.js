import React from "react"
import styled from "styled-components"

const coverData = {
    coverDataTitle:"Better Website Design; More Conversion.",
    coverDescritption: "TheSaaS is an elegant, modern and fully customizable SaaS and WebApp template.",
    coverImage:"./laptop-1.png"
}
const CoverComponents4 = () => {
      
    return (
      <>
        <BlockHeader>Block 4</BlockHeader>

        <SectionBackground>
            <Container>
                <StyledRow>
                    <div className="col-lg-6">
                        <TitleCover>{coverData.coverDataTitle} </TitleCover>
                        <DescriptionCover>{coverData.coverDescritption}</DescriptionCover>
                        <CoverCtaWrapper>
                            <ButtonCover>see demos</ButtonCover>
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
    padding-top: 120px;
    padding-bottom: 120px;
    background-color: #4621ad;
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
    color: rgba(255,255,255,0.85);
    text-align: left;
    font-family:Open Sans;
    max-width:540px;
`

const TitleCover = styled.h3`
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.5px;
    font-size: 2.57813rem;
    margin-bottom: .5rem;
    font-family:Dosis;
    line-height: 1.5;
`
const Cover = styled.img`
    max-width: 100%;
    height: auto;
`

const CoverCtaWrapper = styled.div`
    display:flex;
    .white {
        color: #757575;
        background-color: #f8f9fa;
        border:1px solid #f8f9fa;
        :hover {
            background-color: #e9ecf0;
            color: #757575;
            box-shadow:none;
        }
    }
`

const ButtonCover = styled.button`
    border-radius: 10rem;
    color: rgba(255,255,255,0.6);
    border:1px solid rgba(255,255,255,0.3);
    padding: 7px 32px 6px;
    font-size: 12px;
    margin: 8px;
    text-transform:uppercase;
    font-family:Open Sans;
    letter-spacing: 1.7px;
    line-height: 2.2;
    
    :hover {
        box-shadow: 1px 1px 15px 0px #757575;
        color: #757575;
        background-color: #f8f9fa;
        border:1px solid #f8f9fa;
    }
`



CoverComponents4.propTypes = {
  
}

CoverComponents4.defaultProps = {
  
}

export default CoverComponents4
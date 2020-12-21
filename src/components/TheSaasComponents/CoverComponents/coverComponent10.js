import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'

const dataCover = {
    title:"TheSaaS",
    descritption:"Is an elegant, modern and fully customizable SaaS and WebApp template.",

}
const CoverComponents10 = () => {
    
    return (
      <>
        <BlockHeader>Block 10</BlockHeader>

        <SectionBackground>
            
            <Container>
                <StyledRow>
                    <div className="col-md-7 col-xl-5">
                        <CoverTitle>
                            {dataCover.title}
                        </CoverTitle>
                        <CoverDescription>
                            {dataCover.descritption}
                        </CoverDescription>
                        <hr class="w-10 my-7"></hr>
                        <CoverCtaWrapper>
                            <ButtonCover>see demos</ButtonCover>
                        </CoverCtaWrapper>
                    </div>
                    <WrapperArrow className="col-12">
                        <LinkArrow>
                            <ArrowSpan></ArrowSpan>
                        </LinkArrow>
                        
                    </WrapperArrow>
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
    background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
    padding-top: 90px;
    padding-bottom: 3rem !important;
    
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
    justify-content:center;
    text-align:center;
    hr {
        width: 10% !important;
        margin: 2rem auto;
        border-top: 1px solid #f8f9fa;
    }
`


const CoverTitle = styled.h3`
    color: #fff;
    font-weight: 600 !important;
    letter-spacing: 3px;
    font-size: 5rem;
    font-family:Dosis;
    line-height: 1.5;
    @media(max-width:576px) {
        font-size: 70px;
        text-align:center;
    }
`

const CoverDescription = styled.p`
    color: rgba(255,255,255,0.85);
    font-family:Open Sans;
    font-size: 1.40625rem;
    margin-bottom: 3rem !important;
    margin-top: 2rem !important;
    font-weight: 300;
    line-height: 1.9;
    @media(max-width:576px) {
        font-size: 18px;
        text-align:center;
    }
`

const CoverCtaWrapper = styled.div`
    display:flex;
    
`

const ButtonCover = styled.button`
    border-radius: 10rem;
    color: #757575;
    box-shadow: 0 0 0 0rem rgba(248,249,250,0.5);
    padding: 10px 38px 10px;
    font-size: 13px;
    margin: 0 auto;
    text-transform:uppercase;
    font-family:Open Sans;
    letter-spacing: 1.7px;
    line-height: 2.2;
    background-color: #f8f9fa;
    font-weight: 600;
    :hover {
        box-shadow: 1px 1px 15px 0px rgba(248,249,250,0.5);
    }
`







const ArrowSpan = styled.span`
    color: rgba(255,255,255,0.8);
    border-color: #fff;
    display: inline-block;
    width: 24px;
    height: 24px;
    margin: 0 5px;
    border-left: 1px solid rgba(255,255,255,0.8);
    border-bottom: 1px solid rgba(255,255,255,0.8);
    transform: rotate(-45deg);
    animation: scrollDown1 2s infinite;
    
`

const LinkArrow = styled(Link)`
    color: rgba(255,255,255,0.8);
    
`

const WrapperArrow = styled.div`
    padding-bottom: 3rem !important;
    margin-top: 2rem !important;
`



CoverComponents10.propTypes = {
  
}

CoverComponents10.defaultProps = {
  
}

export default CoverComponents10
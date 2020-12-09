import React, {useState} from "react"
import styled from "styled-components"
import { Link } from 'gatsby'


const dataCover = {
    title:"TheSaaS ",
    descritption:"The most popular HTML, CSS, and JS framework in the world for building responsive, mobile-first projects on the web.",
    iconImage: "/bootstrap.png"
}
const CoverComponents13 = () => {
    
    return (
      <>
        <BlockHeader>Block 12</BlockHeader>

        <SectionBackground>
            
            <Container>
                <StyledRow>
                    <div className="col-lg-8">
                        <IconImage src={dataCover.iconImage} />
                        <CoverTitle>
                            {dataCover.title}
                        </CoverTitle>
                        <CoverDescription>
                            {dataCover.descritption}
                        </CoverDescription>
                        <hr class="w-10 my-7"></hr>
                        <CoverCtaWrapper>
                            <ButtonCover>download now</ButtonCover>
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
    background-image: url(/background-image-1.jpg);
    padding-top: 90px;
    padding-bottom: 3rem !important;
    ::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #563d7c;
        border-radius: inherit;
        opacity:0.9;
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
    justify-content:center;
    text-align:center;
    hr {
        width: 100px !important;
        margin: 2rem auto;
        border-top: 1px solid rgba(255,255,255,0.15);
    }
    .cursor {
       color:white;
    }
`


const CoverTitle = styled.h3`
    color: #fff;
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    font-family:Dosis;
    line-height: 1.5;
    margin-bottom: 2rem !important;
    margin-top: 2rem !important;
`

const CoverDescription = styled.p`
    color: rgba(255,255,255,0.85);
    font-family:Open Sans;
    font-size: 1.40625rem !important;
    margin-bottom: 1rem;
    font-weight: 300;
    line-height: 1.9;
`

const CoverCtaWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    .gray {
        color: rgba(255,255,255,0.6);
        background-color:transparent;
        border:1px solid rgba(255,255,255,0.3) !important;
        :hover {
            box-shadow:none;
            color: #757575;
            background-color: #eceff2;
            border:none;
        }
    }
`

const ButtonCover = styled.button`
    border-radius: 10rem;
    width: 250px !important;
    color: rgba(255,255,255,0.6);
    box-shadow: 0 0 0 0rem rgba(248,249,250,0.5);
    padding: 10px 38px 10px;
    font-size: 13px;
    margin: 8px;
    text-transform:uppercase;
    font-family:Open Sans;
    letter-spacing: 1.7px;
    line-height: 2.2;
    background-color: trasnparent;
    font-weight: 600;
    outline:none !important;
    border:1px solid rgba(255,255,255,0.3) !important;
    :hover {
        box-shadow: 1px 1px 15px 0px rgba(248,249,250,0.5);
        color: #757575;
        background-color: rgba(255,255,255,0.85);
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


const IconImage = styled.img`
    margin-bottom: 1rem;
`

CoverComponents13.propTypes = {
  
}

CoverComponents13.defaultProps = {
  
}

export default CoverComponents13
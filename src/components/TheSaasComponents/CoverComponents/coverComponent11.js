import React, {useState} from "react"
import styled, {keyframes} from "styled-components"
import Modal from 'react-modal'
import { Link } from 'gatsby'


const dataCover = {
    title:"Create Professional Websites",
    descritption:"<span>TheSaaS</span>  is a responsive, professional, and multipurpose <br /> SaaS template powered with <h5>Bootstrap 4</h5>",
}

const CoverComponents11 = () => {
    
    return (
      <>
        <BlockHeader>Block 11</BlockHeader>

        <SectionBackground>
            <Container>
                <StyledRow>
                    <div className="col-lg-8 pt-10">
                        <CoverTitle>
                            {dataCover.title}
                        </CoverTitle>
                        <CoverDescription>
                            <div dangerouslySetInnerHTML={{ __html: `<div> ${dataCover.descritption} </div>` }} />
                        </CoverDescription>
                        <CtaWrapper>
                            <CallToAction>
                                demos
                            </CallToAction>
                            <CallToAction className="gray">
                                features
                            </CallToAction>
                        </CtaWrapper>
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
    background-image: url(/background_5.jpg);
    ::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #191919;
        border-radius: inherit;
        opacity: .8;
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
    
    .pt-10 {
        padding-top: 9rem !important;
    }
    .pb-7 {
        padding-bottom: 3rem !important;
    }
`


const CoverTitle = styled.h3`
    color: #fff;
    font-weight: 500 !important;
    letter-spacing: 0.5px;
    font-size: 3.5rem;
    font-family:Dosis;
    font-weight: 500;
    line-height: 1.5;
`

const CoverDescription = styled.p`
    color: rgba(255,255,255,0.85);
    font-family:Open Sans;
    font-size: 1.17188rem !important;
    margin-bottom: 5rem !important;
    margin-top: 2rem !important;
    font-weight: 300;
    line-height: 1.9;
    h5 {
        padding-bottom: 2px;
        border-bottom: 1px dashed white;
        display:inline-block;
        font-family:Open Sans;
        font-size: 1.17188rem !important;
        color: rgba(255,255,255,0.85);
    }
    span {
        font-weight: 400 !important;
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
    text-align:center;
`

const CallToAction = styled.button`
    border-radius: 10rem;
    text-transform:uppercase;
    font-size: 11px;
    padding: 7px 32px 6px;
    line-height: 2.2;
    padding-left: 2rem !important;
    padding-right: 2rem !important;
    letter-spacing: 1.7px;
    color: #fff;
    background-color: #50a1ff;
    border-color: #ffba00;
    font-family:Open Sans;  
    font-weight: 600;
    margin: 8px; 
    min-width: 200px !important;
`
const CtaWrapper = styled.div`
    display:flex;
    margin-bottom: 10rem !important;
    .gray {
        color:rgba(255,255,255,0.6);
        background-color: transparent;
        border: 1px solid rgba(255,255,255,0.3);
        :hover {
            background-color: rgba(255,255,255,0.9);
            color:gray;
        }
    }
`

CoverComponents11.propTypes = {
  
}

CoverComponents11.defaultProps = {
  
}

export default CoverComponents11
import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"



const CtaComponent2 = () => {
    
    return (
      <>
        <BlockHeader>Block 2 </BlockHeader>

        <SectionBackground>
            <Container>
            

                <StyledRow>
                   <div className="col-md-9">
                        <SectionTitle>Want a bite? You're in the right place!</SectionTitle>
                   </div>
                   <div className="col-md-3">
                        <SectionButton>take a test drive</SectionButton>
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

const SectionTitle = styled.h2`
    color: rgba(255,255,255,0.85) !important;
    letter-spacing: 0.5px;
    text-align:left;
    font-family:Dosis;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom:0;
    font-size: 1.52344rem;
    @media (max-width: 576px) {
        font-size: 26px;
        text-align: center;
        margin-bottom:16px;
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
    background-color: #8ea6e6;
    padding-bottom: 3rem !important;
    padding-top: 3rem !important;
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


const SectionButton = styled.button`
    padding: 7px 32px 6px;
    font-size: 12px;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    outline: none;
    color: #757575;
    background-color: #f8f9fa;
    display:block;
    border-radius: 10rem;
    line-height: 2.2;
    font-family:Open Sans;
    margin:0 auto;
    font-weight: 600;
    
    :hover {
        box-shadow:1px 2px 5px 0px #f8f9fa;
    }
`

CtaComponent2.propTypes = {
  
}

CtaComponent2.defaultProps = {
  
}

export default CtaComponent2
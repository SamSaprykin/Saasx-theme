import React from "react"
import styled from "styled-components"

const HeaderComponent5 = (props) => {
    
    return (
      <>
        <BlockHeader>Block 5</BlockHeader>
        <SectionBackground>
            
            <Container>
                <StyledRow>
                    <TitleSection>Cart Overview</TitleSection>
                    <DescriptionSection>Take a look inside your cart. Make sure you have everything you needed.</DescriptionSection>
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
        border-radius: inherit;
    }
`

const SectionBackground = styled.div`
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image:url("/background-image-1.jpg");
    margin: 30px 20px 100px;
    border: 1px solid #f5f6f7;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    padding-top: 146px;
    padding-bottom: 90px;
    ::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #191919;
        border-radius: inherit;
        opacity: 0.7;
        z-index:0;
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
    text-align:center;
    align-items:center;
    flex-direction:column;
    position:relative;
    z-index:100;
`

const TitleSection = styled.h3`
    font-size: 2.57813rem;
    font-weight: 500;
    line-height: 1.5;
    color: #fff;
    letter-spacing: 0.5px;
    font-family:Dosis;
    margin:0 0 .5rem;
`
const DescriptionSection = styled.p`
    font-size: 1.17188rem !important;
    margin-top: 2rem !important;
    margin-bottom: 1rem;
    font-weight: 300;
    line-height: 1.9;
    color: rgba(255,255,255,0.85);
    font-family:Open Sans;
`

HeaderComponent5.propTypes = {
  
}

HeaderComponent5.defaultProps = {
  
}

export default HeaderComponent5
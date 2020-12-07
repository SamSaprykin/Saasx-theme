import React from "react"
import styled from "styled-components"
import AnimeImage from "../../Animation/AnimeImage"

const dataCover = {
    title:"Increase your conversion with TheSaaS",
    descritpion:"An elegant, modern and fully customizable SaaS and WebApp template",
    image:"/laptop-2.png"
}
const CoverComponents1 = () => {
      
    return (
      <>
        <BlockHeader>Block 1</BlockHeader>

        <SectionBackground>
            <Container>
                <StyledRow>
                    <CoverTitle>{dataCover.title}</CoverTitle>
                    <CoverDescription>{dataCover.descritpion}</CoverDescription>
                    <CoverButton>get started</CoverButton>
                    <ImageWrapper>
                        <AnimeImage>
                            <img src={dataCover.image} alt="cove-image" className="col-md-8"/>
                        </AnimeImage>
                    </ImageWrapper>
                   
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
    background-color: #262a37; 
`
const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    padding-top: 90px;
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
    flex-direction:column;
    margin-right: -15px;
    margin-left: -15px;
    align-items:center;
`

const ImageWrapper = styled.div`
    overflow:hidden;
    
    div {
        display:flex;
        align-items:center;
        justify-content:center;
    }
    img {
        margin-top: 5rem !important;
    }
`
const CoverTitle = styled.h3`
    color: #fff;
    letter-spacing: 0.5px;
    font-size: 2.57813rem;
    font-family:Dosis;
`

const CoverDescription = styled.p`
    margin-bottom: 3rem !important;
    font-size: 1.125rem;
    color: rgba(255,255,255,0.85);
    margin-top: 1rem !important;
    font-weight: 300;
    font-family:Open Sans;
    
`

const CoverButton = styled.button`
    color: #fff;
    background-color: #50a1ff;
    border-color: #50a1ff;
    display: inline-block;
    font-weight: 600;
    padding: 7px 32px 6px;
    text-transform:uppercase;
    cursor:pointer;
    font-size: 12px;
    font-family:Open Sans;
    border-radius: 10rem;
    letter-spacing: 1.7px;
    padding-left: 3rem !important;
    padding-right: 3rem !important;
    line-height: 2.2;
    :hover {
        background-color:#326eb3;
    }
`

CoverComponents1.propTypes = {
  
}

CoverComponents1.defaultProps = {
  
}

export default CoverComponents1
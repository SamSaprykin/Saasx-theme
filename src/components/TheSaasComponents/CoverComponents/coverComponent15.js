import React from "react"
import styled from "styled-components"

const dataCover = {
    title:"Publish your designed things.",
    descritption:"TheSaaS is a place for any type of designers to share their works and give each other some love. You might also be able to get a job.",
    imageSection:"/22.png"
}
const CoverComponents15 = () => {
      
    return (
      <>
        <BlockHeader>Block 15</BlockHeader>

        <SectionBackground>
            <Overlay />
            <Container>
                <StyledRow>
                    <div className="col-md-5 mr-auto">
                        <CoverTitle>
                            {dataCover.title}
                        </CoverTitle>
                        <CoverDescription>
                            {dataCover.descritption}
                        </CoverDescription>
                        <CoverCta>
                            share a design
                        </CoverCta>
                    </div>
                    <div className="col-md-6 "> 
                        <img src={dataCover.imageSection} />
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
    background-position: right center;
    background-size: contain;
    background-repeat: no-repeat;
    padding-top: 146px;
    padding-bottom: 90px;
    margin: 30px 20px 100px;
    border: 1px solid #f5f6f7;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
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
    padding-bottom: 5rem !important;
    padding-top: 5rem !important;
`

const CoverTitle = styled.h3`
    font-family: Dosis;
    font-weight: 600;
    line-height: 1.5;
    font-size: 2.57813rem;
    margin-bottom: 1.5rem;
    color: #323d47;
    letter-spacing: 0.5px;
`
const CoverDescription = styled.p`
    font-size: 1.17188rem !important;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    text-align: left;
    margin-bottom: 2rem;
    font-family: Open Sans;
`

const CoverCta = styled.button`
    border-radius: 10rem;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    padding: 10px 38px 10px;
    font-size: 13px;
    color: #fff;
    background-color: #926dde;
    display: inline-block;
    font-weight: 600;
    font-family:Open Sans;
    line-height: 1.9;
    :hover{
        color: #fff;
        box-shadow: 1px 1px 15px 0px  #926dde;
    }
`

const Overlay  = styled.div`
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    background-image: linear-gradient(90deg, #fff 30%, transparent 100%);
    border-radius: inherit;
    opacity: .95 !important;
    width: 100%;
    height: 100%;
`

CoverComponents15.propTypes = {
  
}

CoverComponents15.defaultProps = {
  
}

export default CoverComponents15
import React from "react"
import styled from "styled-components"

const dataCover = {
    title:"Better Website Design; More Conversion",
    descritption:"TheSaaS is an elegant, modern and fully customizable SaaS and WebApp template",
}

const CoverComponents8 = () => {
      
    return (
      <>
        <BlockHeader>Block 8</BlockHeader>

        <SectionBackground>
            <Container>
                <StyledRow>
                    <div className="col-lg-5">
                        <CoverTitle>
                            {dataCover.title}
                        </CoverTitle>
                        <CoverDescription>
                            {dataCover.descritption}
                        </CoverDescription>
                        <CtaWrapper>
                            <CallToAction>
                               see demos
                            </CallToAction>
                            <CallToAction className="gray">
                                buy now
                            </CallToAction>
                        </CtaWrapper>
                        
                    </div>
                    <div className="col-lg-6 ml-auto padding-none">
                        <img src="./laptop-2.png" />
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
    background-color: #f8fcff;
    padding-top: 120px;
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
    align-items:flex-end;
    justify-content:center;
   
    .padding-none {
        padding-left:0 !important;
        padding-right:0 !important;
    }
`


const CoverTitle = styled.h3`
    color: #323d47;
    letter-spacing: 0.5px;
    font-size: 2.57813rem;
    font-weight: 500;
    line-height: 1.5;
    font-family:Dosis;
    margin-bottom: .5rem;
`

const CoverDescription = styled.p`
    color: #757575;
    font-family:Open Sans;
    font-size: 1.125rem;
    margin-bottom: 5rem !important;
    margin-top: 1.5rem !important;
    font-weight: 300;
`


const CallToAction = styled.button`
    border-radius: 10rem;
    text-transform:uppercase;
    font-size: 11px;
    padding: 8px 26px 6px;
    line-height: 1.9;
    padding-left: 2rem !important;
    padding-right: 2rem !important;
    letter-spacing: 1.7px;
    color: #fff;
    background-color: #50a1ff;
    font-family:Open Sans;  
    font-weight: 600;
    margin: 8px; 
`
const CtaWrapper = styled.div`
    display:flex;
    padding-bottom: 7rem !important;
    .gray {
        color: #757575;
        background-color: #E9ECF0;
        :hover {
            color: #757575;
            background-color: #dde2e8;
            box-shadow: 0 1px 10px rgba(233,236,240,0.4);
        }
    }
`

CoverComponents8.propTypes = {
  
}

CoverComponents8.defaultProps = {
  
}

export default CoverComponents8
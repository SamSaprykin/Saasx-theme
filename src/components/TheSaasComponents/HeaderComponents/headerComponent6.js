import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"




const HeaderComponent6 = () => {
    
    return (
      <>
        <BlockHeader>Block 6</BlockHeader>
        <SectionBackground>
            <Container>
                <StyledRow>
                    <div className="col-md-6">
                        <TitleSection>Header Block</TitleSection>
                        <DescriptionSection>Create an introductory content before your content starts. We have dozen of them.</DescriptionSection>
                        <hr />
                        <SubheadSection to="/">Explore all the available blocks</SubheadSection>
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
    background-image:url("/bg-4.jpg");
    margin: 30px 20px 100px;
    border: 1px solid #f5f6f7;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    padding-top: 146px;
    padding-bottom: 90px;
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
    text-align:left
    align-items:center;
    flex-direction:column;
    hr {
        border-top-color: rgba(255,255,255,0.15);
        margin: 2rem 0;
        width: 50px !important;
        
    }
`
const TitleSection = styled.h3`
    font-size: 2.57813rem;
    font-weight: 200 !important;
    line-height: 1.5;
    color: #323d47;
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
    color: #757575;
    text-align: left;
    font-family:Open Sans;
`

const SubheadSection = styled(Link)`
    color: #868e96 !important;
    font-family:Open Sans;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
`



HeaderComponent6.propTypes = {
  
}

HeaderComponent6.defaultProps = {
  
}

export default HeaderComponent6
import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const ctaData = {
    title:"Join The Community — It's Free",
    description:"We waited until we could do it right. Then we did! Instead of creating a carbon copy. This template has enough pages and blocks to let you create an awesome landing page.",
}

const CtaComponent6 = () => {
    
    return (
      <>
        <BlockHeader>Block 6</BlockHeader>

        <SectionBackground>
            <Container>
                <StyledRow>
                    <ContentWrapper>
                        <SectionTitle>{ctaData.title}</SectionTitle>
                        <hr />
                        <SectionDescritption>{ctaData.description}</SectionDescritption>
                        <InputGroup>
                            <StyledInput  type="email" id="email" name="email"  placeholder="Enter Email address"></StyledInput>
                            <StyledButton>Join for free</StyledButton>
                        </InputGroup>
                    </ContentWrapper>
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
    color: #323d47;
    letter-spacing: 0.5px;
    margin-bottom: .5rem;
    text-align:center;
    font-family:Dosis;
    font-weight: 500;
    font-size: 2.10938rem;
    
`

const SectionDescritption = styled.p`
    font-size: 1.125rem;
    line-height: 1.9;
    color: #757575;
    font-weight: 300;
    margin-bottom: 80px;
    font-family:Open Sans;
`

const SectionBackground = styled.div`
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 7rem;
    padding-bottom: 7rem;
    margin: 30px 20px 100px;
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



const InputGroup = styled.div`
    border-radius: 10rem;
    border: 1px solid #eaeff4;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    align-items: stretch;
    margin-bottom: 1rem;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    width:100%;
    max-width:540px;
    margin:0 auto;
`

const StyledInput = styled.input`
    border: 0;
    outline:0;
    height: calc(2.2em + .75rem + 2px);
    padding: .375rem 1.5rem;
    font-size: 1.0625rem;
    line-height: 2.2;
    border-radius: 10rem;
`

const StyledButton = styled.button`
    padding: 7px 32px 6px;
    font-size: 12px;
    border-radius: 10rem;
    outline:none !important;
    font-weight: 500;
    margin: -1px;
    background-color: #50a1ff;
    color: #fff;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    line-height: 2.2;
    font-family:Open Sans;
    :hover {
        box-shadow:1px 2px 5px 0px  #50a1ff;
    }
`

const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    hr {
        width: 50px;
        margin:2.5rem auto 1.5rem;
    }
`


const ContentWrapper = styled.div`
    text-align:center;
    max-width:70%;
    margin:0 auto;
`

CtaComponent6.propTypes = {
  
}

CtaComponent6.defaultProps = {
  
}

export default CtaComponent6
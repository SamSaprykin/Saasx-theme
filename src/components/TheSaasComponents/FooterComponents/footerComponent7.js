import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"




const FooterComponent7 = () => {
    
    return (
      <>
        <BlockHeader>Block 7</BlockHeader>
        <SectionBackground>
            <Container>
            
                <StyledRow>
                    
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
    background-color: #65b7cc;
    padding-top: 7rem;
    padding-bottom: 7rem;
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
    osition: relative;
    height: 100%;
`

const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    text-align:center;
    align-items:center;
    hr {
        width: 5% !important;
        margin: 2rem auto;
        border-top: 1px solid rgba(117,117,117,0.09);
    }
    .text-align-left {
        text-align:left;
        padding-top: 15px;
        padding-bottom: 15px;
    }

`

const SectionTitle = styled.h2`
    color: #fff;
    letter-spacing: 0.5px;
    font-family:Dosis;
    font-weight: 500;
    font-size: 1.75781rem;
    line-height: 1.5;
    margin-bottom: .5rem;
    
`




FooterComponent7.propTypes = {
  
}

FooterComponent7.defaultProps = {
  
}

export default FooterComponent7
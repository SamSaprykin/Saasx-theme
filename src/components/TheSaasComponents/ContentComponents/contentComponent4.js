import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"


const cardsData = [
    {
        category:"News",
        image:"/blogCard1.jpg",
        text:"We relocated our office to a new designed garage",
        linkTo:"/",
    },
    {
        category:"Marketing",
        image:"/blogCard2.jpg",
        text:"Top 5 brilliant content marketing strategies",
        linkTo:"/",
    },
    {
        category:"Design",
        image:"/blogCard3.jpg",
        text:"Best practices for minimalist design with example",
        linkTo:"/",
    }
]

const ContentComponents4 = () => {
    
    return (
      <>
        <BlockHeader>Block 4</BlockHeader>

        <SectionBackground>
            <Container>
            <SectionTitle>Recent Blog Posts</SectionTitle>

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

const SectionTitle = styled.h2`
    color: #323d47;
    letter-spacing: 0.5px;
    margin-bottom:80px;
    text-align:center;
    font-family:Dosis;
    font-weight: 500;
`

const SectionBackground = styled.div`
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 7rem;
    padding-bottom: 7rem;
    background-color: #fafbfb;
    margin: 30px 20px 100px;
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
`







ContentComponents4.propTypes = {
  
}

ContentComponents4.defaultProps = {
  
}

export default ContentComponents4
import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const cardsData = [
    {
        category:"Marketing",
        background:"/blogCard2.jpg",
        backgroundType:"image",
        text:"Top 5 brilliant content marketing strategies",
        linkTo:"/",
        overlayColor: "#de7ba9",
    },
    {
        category:"DESIGN",
        background:"#926dde",
        backgroundType:"color",
        text:"Best practices for minimalist design with example",
        linkTo:"/",
    },
    {
        category:"SAAS",
        background:"#f8f9fa",
        backgroundType:"color",
        text:"Our top 10 SaaS blogs to keep you headed in the right direction",
        linkTo:"/",
        textDark:"true"
    },
    {
        category:"PRODUCT | DESIGN",
        background:"/blogCard3.jpg",
        backgroundType:"image",
        text:"Thoughts on how to build a viral design for your product",
        linkTo:"/",
        overlayColor:"#84b3cb"
    },
    {
        category:"METRICS",
        background:"/blogCard6.jpg",
        backgroundType:"image",
        text:"What CEOs really need to know about their numbers",
        linkTo:"/",
        overlayColor:"#593d50",
    },
    {
        category:"HIRING",
        background:"#edc85e",
        backgroundType:"color",
        text:"Top 5 secrets of hiring the best and brightest candidates from inside your company",
        linkTo:"/",
    }
]

const BlogComponents10 = ({cardData}) => {
    console.log(cardData)
    return (
        <>
        <BlockHeader>Block 10</BlockHeader>
        <SectionBackground>
            <Container>
                <StyledRow>
                    {
                        cardsData.map((card,index) => {
                            return (
                                <Card>
                                     <CardBlog background={card.background} backgroundType={card.backgroundType}>
                                        <Overlay overlayColor={card.overlayColor} />
                                        <CardContent>
                                            <BlogCategory textDark={card.textDark}>
                                                {card.category}
                                            </BlogCategory>
                                            <CardTitle textDark={card.textDark}>
                                                {card.text}
                                            </CardTitle>
                                        </CardContent>
                                    </CardBlog>
                                </Card>
                            )
                        })
                    }
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
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    border: 1px solid #f5f6f7;
    padding:112px 0;
    @media(max-width:768px) {
        padding-top: 5rem;
        padding-bottom: 5rem;
    }
`

const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    position: relative;
    height: 100%;
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
    column-count: 3;
    @media (max-width: 1199.98px) {
        -moz-column-count: 2;
        column-count: 2;
    }
    @media (max-width: 767.98px) {
        -moz-column-count: 1;
        column-count: 1;
    }
       
    column-gap: 1.25rem;
    orphans: 1;
    widows: 1;
    display:block;
    
`

const Card = styled.div`
    margin-bottom: 1.5rem;
    display: inline-block;
    width: 100%;
    position: relative;

    flex-direction: column;
`

const CardBlog = styled.div`
    position: relative;    
    background: ${({ background, backgroundType }) => {
        if (backgroundType === "image") return `url(${background}) `;
        if (backgroundType === "color") return background;
    }};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: .25rem;
    cursor:pointer;
    align-items:center;    
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    border-radius: inherit;
    background: ${({ overlayColor }) => {
        if (overlayColor) return overlayColor;
    }};
`

const CardContent = styled.div`
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
    padding-left: 2rem !important;
    padding-right: 2rem !important;
    width:100%;
    text-align:center;
    position: relative;
    z-index:10;
`

const BlogCategory = styled.h5`
    color: rgba(255,255,255,0.8);
    font-weight: 600;
    font-family: Open Sans;
    letter-spacing: 2px;
    font-size: .70313rem !important;
    margin-bottom: 1rem;
    text-transform:uppercase;
    color: ${({ textDark }) => {
        if (textDark === "true") return "#50a1ff";
    }};
`

const CardTitle = styled.h3`
    font-weight: 400 !important;
    margin-bottom: .5rem;
    font-family: Dosis;
    font-size: 1.52344rem;
    color: rgba(255,255,255,0.8);
    letter-spacing: 0.5px;
    line-height: 1.5;
    color: ${({ textDark }) => {
        if (textDark === "true") return "#323d47";
    }};
`





BlogComponents10.propTypes = {
  
}

BlogComponents10.defaultProps = {
  
}

export default BlogComponents10
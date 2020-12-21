import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const cardsData = [
    {
        category:"How to add new block to page builder",
        text:"Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on.",
        linkTo:"/",
    },
    {
        category:"Create block with different styles",
        text:"Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on.",
        linkTo:"/",
    },
    {
        category:"How to update the template",
        text:"Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on.",
        linkTo:"/",
    }
]

const BlogComponents4 = ({cardData}) => {
    console.log(cardData)
    return (
        <>
        <BlockHeader>Block 4</BlockHeader>
        <SectionBackground >
            <Container>
            <SectionTitle >Popular posts from our blog</SectionTitle>
            <SectionSubhead>More than 80 articles are waiting for you</SectionSubhead>
                <StyledRow>
                    {
                        cardsData.map((card,index) => {
                            return (
                                <div className="col-lg-4">
                                   <BlogCard>
                                        <TextContent>
                                            <BlogTitle>
                                                <Link to={card.linkTo}> {card.category} </Link>
                                            </BlogTitle>
                                            <BlogCardText>
                                               {card.text}
                                            </BlogCardText>
                                            <CtaWrapper>
                                                <Link to={card.linkTo}>Read more <i className="ti-angle-right fs-7 pl-2"></i></Link>
                                            </CtaWrapper>
                                           
                                        </TextContent>
                                    </BlogCard>
                                </div>
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

const SectionTitle = styled.h2`
    color: #fff;
    letter-spacing: 0.5px;
    margin-bottom:80px;
    text-align:center;
    font-family:Dosis;
    font-size: 33.75px;
    font-weight: 500;
    margin-bottom: .5rem;
    @media(max-width:576px) {
        font-size: 1.9rem;
    }
`

const SectionSubhead = styled.h5`
    color: rgba(255,255,255,0.85);
    margin-bottom: 1rem;
    font-size:15px;
    font-family: Open Sans;
    text-align:center;
`

const SectionBackground = styled.div`
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 7rem;
    padding-bottom: 7rem;
    background-color: #191919;
    margin: 30px 20px 100px;
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
    margin-top:5rem;
`



const BlogTitle = styled.h5`
    margin-bottom: .75rem;
    a {
        color: #fff;
        font-family:Dosis;
        font-size: 1.05469rem;
        font-weight: 700;
        letter-spacing: 0.5px;
        line-height: 1.5;
    }
    
    
`

const BlogCardText = styled.h5`
    font-family: "Open Sans",sans-serif;
    font-size: .87891rem !important;
    font-weight: 500;
    line-height: 1.9;
    color: #FFFFFF;
    margin-bottom: 1rem;
`

const TextContent = styled.div`
    padding: 1.25rem !important;
    text-align:left;
    border-radius: .25rem;
`

const BlogCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: rgba(255,255,255,0.1);
    background-clip: border-box;
    border: none;
    border-radius: .25rem;
    transition: all .5s;
    cursor:pointer;
    :hover {
        box-shadow: 0 1px 35px rgba(0, 0, 0, 0.07); 
    }
    @media(max-width:768px) {
        margin-bottom:32px;
    }
    @media(max-width:576px) {
        margin-bottom:24px;
    }
`

const CtaWrapper = styled.div`
    a {
        color: #50a1ff;
        font-size: .76172rem !important;
        font-family:Open Sans;
        font-weight:600;
    }
    i {
        font-size: 7px !important;
    }
`



BlogComponents4.propTypes = {
  
}

BlogComponents4.defaultProps = {
  
}

export default BlogComponents4
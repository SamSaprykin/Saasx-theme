import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const cardsData = [
    {
        title:"Increase Your Sale — Instantly",
        category:"Marketing",
        text:"Downstairs in you in discipline experience there's both have shall over called he peacefully, ticket a from be the in violin, empty where statement is me. Because behind in is now tend named bit for other concept.",
        linkTo:"/",
        image:"/blogCard2.jpg",
        reverse: false,
    },
    {
        title:"Give a Fresh Look to Your SaaS",
        category:"Design",
        text:"Downstairs in you in discipline experience there's both have shall over called he peacefully, ticket a from be the in violin, empty where statement is me. Because behind in is now tend named bit for other concept.",
        linkTo:"/",
        image:"/blogCard6.jpg",
        reverse: true,
    },
]

const BlogComponents6 = ({cardData}) => {
    console.log(cardData)
    return (
        <>
        <BlockHeader>Block 6</BlockHeader>
        <SectionBackground >
            <Container>
                {
                    cardsData.map((card,index) => {
                        return (
                            <StyledRow reverse={card.reverse}>
                                <div className="col-md-6 mh-300">
                                    <img src={card.image} alt="blog image" />
                                </div>
                                <div className="col-10 col-md-4 mx-auto py-8 text-center text-md-left">
                                    <TextContent>
                                        <BloCategory>
                                            {card.category}
                                        </BloCategory>
                                        <BlogTitle>
                                            {card.title} 
                                        </BlogTitle>
                                        <BlogCardText>
                                            {card.text}
                                        </BlogCardText>
                                        <CtaWrapper>
                                            <Link to={card.linkTo}>Read more</Link>
                                        </CtaWrapper>
                                    </TextContent>
                                </div>
                            </StyledRow>
                        )
                    })
                }
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
`

const Container = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
   
`

const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: 0;
    margin-left: 0;
    flex-direction:${props => (props.reverse ? "row-reverse" : "row")};
    div {
        padding-left:0;
        padding-right:0;
    }
    .mh-300 {
        min-height:300px;

    }
    
`

const BloCategory = styled.h5`
    font-family:Open Sans;
    font-size: .82031rem !important;
    margin-bottom:16px;
    color: #999 !important;
`

const BlogTitle = styled.h3`
    color: #323d47;
    letter-spacing: 0.5px;
    font-size: 1.52344rem;
    margin-bottom: .5rem;
    font-family: Dosis;
    font-weight:500;
`

const BlogCardText = styled.h5`
    font-family:Open Sans;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    margin-bottom: 2rem;
`

const TextContent = styled.div`
    padding-bottom: 5rem !important;
    padding-top: 5rem !important;
    text-align:left;
    border-radius: .25rem;
    height:100%;
    display:flex;

    justify-content:center;
    flex-direction:column;
`

const CtaWrapper = styled.div`
    a {
        color: #ffffff;
        font-size: 11px;
        font-family:Open Sans;
        font-weight:600;
        padding: 10px 26px 10px;
        background-color: #50a1ff;
        border-color: #50a1ff;
        letter-spacing: 1.7px;
        text-transform: uppercase;
        border-radius: 10rem;
    }
`

BlogComponents6.propTypes = {
  
}

BlogComponents6.defaultProps = {
  
}

export default BlogComponents6
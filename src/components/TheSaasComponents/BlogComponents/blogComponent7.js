import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const cardsData = [
    {
        title:"We relocated our office to a new designed garage",
        image:"/blogCard1.jpg",
        text:"Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.",
        linkTo:"/",
    },
    {
        title:"Top 5 brilliant content marketing strategies",
        image:"/blogCard2.jpg",
        text:"Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.",
        linkTo:"/",
    },
    {
        title:"Best practices for minimalist design with example",
        image:"/blogCard3.jpg",
        text:"Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.",
        linkTo:"/",
    }
]

const BlogComponents7 = ({cardData}) => {
    console.log(cardData)
    return (
        <>
        <BlockHeader>Block 7</BlockHeader>
        <SectionBackground>
            <Container>
                <StyledRow>
                    {
                        cardsData.map((card,index) => {
                            return (
                                <div className="col-md-10 col-xl-8 mx-auto">
                                    <BlogCard>
                                        <Link to={card.linkTo}><img src={card.image} alt="Card image cap" /></Link>
                                        <TextContent>
                                            <BlogTitle>
                                               {card.title}
                                            </BlogTitle>
                                            <BlogCardText>
                                                {card.text}
                                            </BlogCardText>
                                            <CtaWrapper>
                                                <Link to={card.linkTo}>
                                                    <h5>Read more</h5> 
                                                    <span> &rarr; </span>
                                                </Link>
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

const BlogTitle = styled.p`
    color: #323d47;
    letter-spacing: 0.5px;
    font-size: 1.52344rem;
    font-family:Dosis;
`


const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`

const BlogCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,0.125);
    border-radius: .25rem;
    transition: all .5s;
    cursor:pointer;
    border: 1px solid #f1f2f3 !important;
    margin-bottom: 5rem !important;
    :hover {
        box-shadow: 0 0 48px rgba(0, 0, 0, 0.06);
    }
    a {
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
        
        img {
            width:100%;
            object-fit: cover;
            height:100%;
        }
    }
    
`

const BlogCardText = styled.h5`
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    text-align: left;
    
    a {
        color: #191919;
    }
`

const TextContent = styled.div`
    padding: 3rem !important;
    text-align:left;
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
`

const CtaWrapper = styled.div`
    
    
    a {
        display:flex;
        align-items:center;
    }
    h5 {
        color: #50a1ff;
        font-size:12.75px;
        font-family:Open Sans;
        letter-spacing: 1px;
        font-family:Open Sans;
        margin-bottom:0;
    }
    span {
        padding-left:7px;
        color: #50a1ff;
    }
`


BlogComponents7.propTypes = {
  
}

BlogComponents7.defaultProps = {
  
}

export default BlogComponents7
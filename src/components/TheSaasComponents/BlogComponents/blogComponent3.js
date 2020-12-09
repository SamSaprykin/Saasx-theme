import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"


const cardsData = [
    {
        category:"We relocated to a new garage",
        image:"/blogCard1.jpg",
        text:"Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.",
        linkTo:"/",
    },
    {
        category:"Top 5 content marketing strategies",
        image:"/blogCard2.jpg",
        text:"Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.",
        linkTo:"/",
    },
    {
        category:"Best practices for minimalist design",
        image:"/blogCard3.jpg",
        text:"Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.",
        linkTo:"/",
    }
]

const BlogComponents3 = ({cardData}) => {
    console.log(cardData)
    return (
        <>
        <BlockHeader>Block 3</BlockHeader>
        <SectionBackground >
            <Container>
            <SectionTitle >Latest News</SectionTitle>
                <StyledRow>
                    {
                        cardsData.map((card,index) => {
                            return (
                                <div className="col-md-6 col-lg-4">
                                   <BlogCard>
                                        <Link to={card.linkTo}><img src={card.image} alt="Card image cap" /></Link>
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
                <ButtonWrapper>
                    <Link to="/">Browse all blog posts</Link>
                </ButtonWrapper>
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
    margin-top:5rem;
`

const ButtonWrapper = styled.div`
    margin-top: 3rem !important;
    text-align: center !important;
    a {
        font-size: 15px;
        outline: none;
        transition: 0.15s linear;
        font-family:Open Sans;
        color: #50a1ff;
        display: inline-block;
        cursor: pointer;
        font-weight: 300;
        line-height: 1.9;
    }
`

const BlogTitle = styled.h5`
    margin-bottom: .75rem;
    
    a {
        color: #323d47;
        font-family:Dosis;
        font-size: 1.23047rem;
        font-weight: 500;
        letter-spacing: 0.5px;
        line-height: 1.5;
    }
`

const BlogCardText = styled.h5`
    font-family: Open Sans;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    margin-bottom: 1rem;
`

const TextContent = styled.div`
    padding: 1.25rem !important;
    text-align:left;
`

const BlogCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,0.125);
    border-radius: .25rem;
    transition: all .5s;
    cursor:pointer;
    border: 1px solid #f1f2f3 !important;
    :hover {
        box-shadow: 0 1px 35px rgba(0, 0, 0, 0.07); 
    }
`

const CtaWrapper = styled.div`
    a {
        color: #50a1ff;
        font-size:12px;
        font-family:Open Sans;
    }
    i {
        font-size: 7px !important;
    }
`

BlogComponents3.propTypes = {
  
}

BlogComponents3.defaultProps = {
  
}

export default BlogComponents3
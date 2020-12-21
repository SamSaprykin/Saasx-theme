import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const cardData = {
    image: "/blogCard5.jpg",
    title: "Best practices for minimalist design",
    text: "Together. Great. So good was saying, that can't first let called air divide stars male isn't i. Herb third let may fourth divide. Greater gathering land you'll i their beast have. She'd form sea it wherein fowl, spirit creeping living. Likeness creepeth you hath heaven. Likeness, moveth fruitful behold. Open evening a air us behold. Saying above moving second a subdue likeness after also second.",
    linkTo: "/",
    category: "DESIGN",
}

const BlogComponents8 = () => {
    console.log(cardData)
    return (
        <>
        <BlockHeader>Block 8</BlockHeader>
        <SectionBackground>
            <Container>
                <BlogCategory>{cardData.category}</BlogCategory>
                <SectionDescription>{cardData.title}</SectionDescription>
                <StyledRow>
                    <div className="col-md-8 col-xl-6 mx-auto">
                        <BlogCard>
                            <Link to={cardData.linkTo}><img src={cardData.image} alt="Card image cap" /></Link>
                            <TextContent>
                                <BlogPostInfo>
                                    <PostAuthor>
                                        <a>by Hossein</a>
                                        <span>&bull;</span>
                                        <time datetime="2018-05-15T19:00">3 days ago</time>
                                    </PostAuthor>
                                    <PostViews>
                                        <span><i className="fa fa-eye pr-1 opacity-60"></i> 28</span>
                                        <a href="#"><i className="fa fa-comments pr-1 opacity-60"></i> 6</a>
                                    </PostViews>
                                </BlogPostInfo>
                                <BlogCardText>
                                    {cardData.text}
                                </BlogCardText>
                                <CtaWrapper>
                                    <Link to={cardData.linkTo}>
                                        <h5>Read more</h5> 
                                    </Link>
                                </CtaWrapper>
                            </TextContent>
                        </BlogCard>
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

const BlogCategory = styled.p`
    font-size: .70313rem !important;
    letter-spacing: 2px;
    font-family:Dosis;
    text-align:center;
    color: #bfc5ca !important;
    font-family:Open Sans;
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
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border-radius: .25rem;
    transition: all .5s;
    cursor:pointer;
    margin-bottom: 5rem !important;
    a {

        
        img {
            width:100%;
            object-fit: cover;
            height:100%;
            border-radius: 0.5rem !important;
        }
    }
    
`

const BlogCardText = styled.p`
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    text-align: justify !important;
    font-family: Open Sans;
    a {
        color: #191919;
    }
`

const TextContent = styled.div`
    text-align:left;
    padding: 1.25rem;
    margin-top: 0;
    margin-bottom: 1rem;
`




const SectionDescription  = styled.p`
    margin-bottom: .5rem;
    font-family: Dosis,sans-serif;
    max-width:70%;
    font-size: 1.75781rem;
    margin: 0 auto 3rem;
    text-align:center;
    color: #323d47;
`

const CtaWrapper = styled.div`
    margin-top: 3rem !important;
    a {
        display:flex;
        align-items:center;
        justify-content:center;
    }
    h5 {
        padding: 8px 26px 6px;
        background-color: #50a1ff;
        border-color: #50a1ff;
        color: white;
        font-size: 11px;
        letter-spacing: 1.7px;
        text-transform: uppercase;
        font-family:Open Sans;
        border-radius: 10rem;
        font-weight: 700;
        line-height: 1.9;
    }

`
const BlogPostInfo = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-bottom: 1.5rem !important;
`


const PostViews = styled.div`
    color: #bfc5ca !important;
    font-size: .82031rem !important;
    a {
        color: #bfc5ca !important;
        padding-left:1.5rem;
    }
`

const PostAuthor = styled.div`
    color: #bfc5ca !important;
    font-size: .82031rem !important;
    font-family:Open Sans;
    font-weight:400;
    span {
        padding:0 4px;
    }
`


BlogComponents8.propTypes = {
  
}

BlogComponents8.defaultProps = {
  
}

export default BlogComponents8
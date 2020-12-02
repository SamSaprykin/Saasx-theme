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

const BlogComponents1 = () => {
    
    return (
      <>
        <BlockHeader>Block 1</BlockHeader>

        <SectionBackground>
            <Container>
            <SectionTitle>Recent Blog Posts</SectionTitle>

                <StyledRow>
                    {
                        cardsData.map((card,index) => {
                            return (
                                <div className="col-md-6 col-lg-4">
                                    <BlogCard>
                                        <Link to="/"><img src={card.image} alt="Card image cap" /></Link>
                                        <TextContent>
                                            <BlogCategory>
                                                <Link to="/"> {card.category} </Link>
                                            </BlogCategory>
                                            <BlogCardText>
                                                <Link to="/">{card.text}</Link>
                                            </BlogCardText>
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

const BlogCategory = styled.p`
    a {
        color: #bfc5ca;
        font-weight:500;
        text-transform:uppercase;
        letter-spacing: 2px;
        font-size: .64453rem !important;
    }
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
    border: 0 solid rgba(0,0,0,0.125);
    border-radius: .25rem;
    transition: all .5s;
    cursor:pointer;
    border: 1px solid #f1f2f3 !important;
    :hover {
        box-shadow: 0 1px 35px rgba(0, 0, 0, 0.07); 
    }
`

const BlogCardText = styled.h5`
    color: #191919;
    font-family:Dosis;
    letter-spacing: 0.5px;
    font-size: 1.23047rem;
    a {
        color: #191919;
    }
`

const TextContent = styled.div`
    padding: 2rem !important;
    text-align:center;
`



BlogComponents1.propTypes = {
  
}

BlogComponents1.defaultProps = {
  
}

export default BlogComponents1
import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const cardData = {
    image: "/blogCard4.jpg",
    title: "Convert your visitors to real customers",
    text: "Option as can distributors. And to suppliers, given a copy the horrible arrange yes, we had hundreds leave was more which a I the king's had the so soon throughout in necessary which at way did phase a young written, descriptions, late uninspired, to times owner themselves them. Get sported uninspired, the a box to an to but on been the succeed have couldn't set.",
    linkTo: "/",
}

const BlogComponents5 = () => {
    
    return (
        <>
        <BlockHeader>Block 5</BlockHeader>
        <SectionBackground >
            <Container>
                <StyledRow>
                    <div className="col-md-6 col-lg-5 mx-auto">
                        <img src={cardData.image} />
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <BlogCard>
                            <TextContent>
                                <BlogTitle>
                                    {cardData.title} 
                                </BlogTitle>
                                <BlogCardText>
                                    {cardData.text}
                                </BlogCardText>
                                <CtaWrapper>
                                    <Link to={cardData.linkTo}>Read more <i className="ti-arrow-right fs-9 ml-2"></i></Link>
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
    padding-top: 7rem;
    padding-bottom: 7rem;
    margin: 30px 20px 100px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    border: 1px solid #f5f6f7;
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



const BlogTitle = styled.h5`
    margin-bottom: 8px;
    font-size: 1.75781rem;
    font-family:Dosis;
    letter-spacing: 0.5px;
    font-weight: 500;
    line-height: 1.5;
`

const BlogCardText = styled.h5`
    font-family: Open Sans;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
`

const TextContent = styled.div`
    padding: 15px;
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

`

const CtaWrapper = styled.div`
    margin-top: 3rem !important;
    a {
        font-size: 11px;
        padding: 8px 26px 6px;
        letter-spacing: 1.7px;
        text-transform: uppercase;
        border-radius: 2px;
        outline: none;
        transition: 0.15s linear;
        font-family:Open Sans;
        color: #50a1ff;
        background-color: transparent;
        background-image: none;
        display: inline-block;
        font-weight: 600;
        cursor: pointer;
        line-height: 1.9;
        border: 1px solid #50a1ff;
        :hover {
            border: 1px solid transparent;
            color: white;
            background-color:#50a1ff;
        }
    }
    i {
        font-size: 9px !important;
    }
`



BlogComponents5.propTypes = {
  
}

BlogComponents5.defaultProps = {
  
}

export default BlogComponents5
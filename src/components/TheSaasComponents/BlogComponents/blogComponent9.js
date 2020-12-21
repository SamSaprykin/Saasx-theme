import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const cardsData = [
    {
        category:"MARKETING",
        background:"/blogCard2.jpg",
        backgroundType:"image",
        text:"Top 5 brilliant content marketing strategies",
        linkTo:"/",
        columnSize:"7"
    },
    {
        category:"DESIGN",
        background:"#926dde",
        backgroundType:"color",
        text:"Give a Fresh Look to Your SaaS",
        linkTo:"/",
        columnSize:"5"
    },
    {
        category:"NEWS",
        background:"#3cd458",
        backgroundType:"color",
        text:"We relocated our office to a new designed garage",
        linkTo:"/",
        columnSize:"5"
    },
    {
        category:"PRODUCT | DESIGN",
        background:"/blogCard3.jpg",
        backgroundType:"image",
        text:"Best practices for minimalist design with example",
        linkTo:"/",
        columnSize:"7"
    }
]

const BlogComponents9 = ({}) => {

    return (
        <>
        <BlockHeader>Block 9</BlockHeader>
        <SectionBackground>
            <Container>
                <StyledRow>
                    {
                        cardsData.map((card,index) => {
                            return (
                                <div className={`col-md-6 col-lg-${card.columnSize}`}>
                                     <CardBlog background={card.background} backgroundType={card.backgroundType}>
                                        <CardContent>
                                            <BlogCategory>
                                                {card.category}
                                            </BlogCategory>
                                            <CardTitle>
                                                {card.text}
                                            </CardTitle>
                                            <CtaWrapper>
                                                <Link to={card.linkTo}>
                                                    Read more
                                                </Link>
                                            </CtaWrapper>
                                        </CardContent>
                                    </CardBlog>
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



const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    div {
        padding: 15px;
        
    }
`

const CardBlog = styled.div`
    position:relative;
    width:100%;
    height:400px;
    background: ${({ background, backgroundType }) => {
        if (backgroundType === "image") return `url(${background}) `;
        if (backgroundType === "color") return background;
    }};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: .25rem;
    cursor:pointer;
    display:flex;
    align-items:center;
    padding:0 !important;
    ::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #191919;
        border-radius: inherit;
        opacity: .3;
    }
`

const CardContent = styled.div`
    position:absolute;
    padding-left: 5rem;
    padding-right: 5rem;
    width:100%;
    text-align:center;
    @media (max-width: 768px) {
        padding:1.25rem;
    }
`

const BlogCategory = styled.h5`
    color: rgba(255,255,255,0.8);
    font-weight: 800;
    font-family: Dosis;
    letter-spacing: 2px;
    font-size: .70313rem !important;
`

const CardTitle = styled.h3`
    font-weight: 200 !important;
    margin-bottom: .5rem;
    font-family: Dosis;
    font-size: 1.75781rem;
    color: #fff;
`

const CtaWrapper = styled.div`
    a {
        font-size: 11px;
        padding: 8px 26px 6px;
        letter-spacing: 1.7px;
        text-transform: uppercase;
        border-radius: 2px;
        outline: none;
        transition: 0.15s linear;
        border:1px solid rgba(255,255,255,0.3);
        color: rgba(255,255,255,0.8);
        font-weight: 600;
        :hover {
            color:black;
            background-color:#ffffff;
        }
    }
`


BlogComponents9.propTypes = {
  
}

BlogComponents9.defaultProps = {
  
}

export default BlogComponents9
import { Link } from "gatsby"
import React, {useState} from "react"

import styled from "styled-components"
import ModalComponent from "../../ModalComponent/modalComponent"

const cardsData = [
    {
        category:"News",
        image:"/blogCard1.jpg",
        text:"We relocated our office to a new designed garage",
        linkTo:"/",
        videoLink:"https://www.youtube.com/embed/F-1weFCiYBA",
    },
    {
        category:"Marketing",
        image:"/blogCard2.jpg",
        text:"Top 5 brilliant content marketing strategies",
        linkTo:"/",
        videoLink:"https://www.youtube.com/embed/ah4pcPbRi2M?autoplay=1",
    },
    {
        category:"Design",
        image:"/blogCard3.jpg",
        text:"Best practices for minimalist design ",
        linkTo:"/",
        videoLink:"https://www.youtube.com/embed/8kooIgKESYE",
    }
]




const BlogComponents2 = () => {
    
    return (
        <>
        <BlockHeader>Block 2</BlockHeader>
        <SectionBackground >
            <Container>
            <SectionTitle >Recent Video Tutorials</SectionTitle>
            <SectionDescription>We are so excited and proud of our product. It's really easy to create a landing page for your awesome product.</SectionDescription>
                <StyledRow>
                    {
                        cardsData.map((card,index) => {
                            return (
                                <div className="col-md-6 col-lg-4">
                                    <ModalComponent data={card} key={index} />
                                </div>
                            )
                        })
                    }
                
                </StyledRow>
                <ButtonWrapper>
                    <Link to="/">View all</Link>
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
`


const SectionDescription  = styled.p`
    font-size: 1.125rem;
    font-family:Open Sans;
    font-weight: 300;
    max-width:70%;
    margin: 0 auto 70px;
    text-align:center;
`

const ButtonWrapper = styled.div`
    margin-top: 3rem !important;
    text-align: center !important;
    a {
        font-size: 11px;
        padding: 8px 3rem 6px;
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
`


BlogComponents2.propTypes = {
  
}

BlogComponents2.defaultProps = {
  
}

export default BlogComponents2



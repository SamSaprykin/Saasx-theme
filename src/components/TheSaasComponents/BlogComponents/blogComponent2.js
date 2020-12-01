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

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '100%',
      height                : '100%',
      background            : 'black',
      padding               : '0',
    }
};



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
                                <div class="col-md-6 col-lg-4">
                                    <ModalComponent data={card} key={index} />
                                </div>
                            )
                        })
                    }
                
                </StyledRow>
                <ButtonWrapper class="text-center mt-7">
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

const BlogCategory = styled.p`
    a {
        color: #bfc5ca;
        font-weight:500;
        letter-spacing: 2px;
        font-size: 12.75px;
        font-family:Open Sans;
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
`

const BlogCardText = styled.h5`
    font-family:Dosis;
    letter-spacing: 0.5px;
    font-size: 1.05469rem;
    width:90%;
    letter-spacing: 0.75px;
    text-align:center;
    margin:0 auto 8px;
    a {
        color: #191919;
    }
`

const TextContent = styled.div`
    text-align:center;
    margin-top:20px;
    background-color: #fafbfb;
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

const ImageContainer = styled.div`
    position:relative;
    img {
        border-radius:4px;
    }
`

const ButtonClose = styled.a`
    padding:16px 32px;
    position: fixed;
    right: 0;
    top: 0;
    color: gray;
    font-family: "Open Sans",sans-serif;
    font-weight: 100;
    outline:none;
    border:none;
    cursor:pointer;
    :hover {
      color:white;
    }
    ::before {
      display: inline-block;
      content: "\\00d7"; /* This will render the 'X' */
      font-size:40px;
    }
`
const ContainerIframe = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  top:50%;
  .responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none !important;
`

const WrapperIframe = styled.div`
  width:100%;
  height:100%;
  max-width:960px;
  max-height:475px;
  margin:0 auto;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top:10%;
`

const ModalContent = styled.div`
  position:relative;
`

const WrapperMedia = styled.div`

`

const ButtonOpen  = styled.a`
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  width:56px;
  height:56px;
  border-radius:50%;
  background-color: rgba(248,249,250,0.6);
  display:flex;
  align-items:center;
  justify-content:center;
  transition: all 0.3s;
  i {
    color:white;
    transition: all 0.3s;
  }
  :hover {
    background-color: rgba(248,249,250,1);
    width:60px;
    height:60px;
    i {
      color:lightgray;
    }
  }
`



BlogComponents2.propTypes = {
  
}

BlogComponents2.defaultProps = {
  
}

export default BlogComponents2



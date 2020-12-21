import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import BgImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby'


const StyledBgImg = styled(BgImage)`
  width: 100%;
  height: 480px;
  
`

const ContentComponents5 = () => {
      const ParallaxImage = useStaticQuery(graphql`
        query ImageParallax {
          image: file(absolutePath: {regex: "/background13.jpg/"}) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
    `)
    const imageData = ParallaxImage.image.childImageSharp.fluid
    return (
      <>
        <BlockHeader>Block 5</BlockHeader>

        <SectionBackground>
            <StyledBgImg
              fluid={imageData}
              style={{ backgroundAttachment: 'fixed' }}
            />
            <Overlay />
            <TextParallax>Make New Friends</TextParallax>
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
    background-color: #fafbfb;
    margin: 30px 20px 100px;
    
`
const Overlay  = styled.div`
  ::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #191919;
    border-radius: inherit;
    opacity:0.3;
  }
`

const TextParallax = styled.h3`
    color:white;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    font-weight: 600;
    font-family:Dosis;
    font-size:80px;
    line-height: 1.5;
    @media(max-width:768px) {
      width:100%;
      text-align:center;
    }
    @media(max-width:576px) {
      font-size:60px;
    }
`

ContentComponents5.propTypes = {
  
}

ContentComponents5.defaultProps = {
  
}

export default ContentComponents5
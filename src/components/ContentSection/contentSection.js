import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import styled from "styled-components"

import AnimSide from "../Animation/AnimSide"

const ContentSection = () => (
  <>
    <ContentSectionWrapper className="content-section bd-bottom padding">
        <AnimSide reversed="true">
          <ImageWrapper className="image-wrapper">
            <img className="image-content" src="https://via.placeholder.com/980x500.png?text=SaasX" />
          </ImageWrapper>
        </AnimSide>
        <AnimSide>
            <Container>
                    <div className="col-lg-6 offset-lg-6 ">
                      <ContentItem>
                          <h2>A Straight Forward Structure for Powerful Results</h2>
                          <p>Funding freemium technology focus equity bootstrapping usernce niche market. Seed round agile development growth hacking retur investment alpha.Marketing pitch gen scrum project.</p>
                          <p>Responsive web design. Agile development innovator termsheet is users interface pitch scrum project research &amp; development.Get Started</p>
                          <DefaultButton to="/">Get Started</DefaultButton>
                      </ContentItem>
                    </div>
            </Container>
        </AnimSide>
            
    </ContentSectionWrapper>
  </>
)

const ContentSectionWrapper = styled.section`
  position: relative;
  border-bottom: 1px solid #e5e5e5;
  padding: 100px 0;
`
const ContentItem = styled.div`
  padding-left: 80px;
  h2{
    margin: 0 0 20px;
  }
  p{
    margin-bottom: 20px;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  .image-content{
    position: absolute;
    content: '';
    height: auto;
    width:100%;
    max-width: 760px;
    top: auto;
    left: -50px;
  } 
`

const DefaultButton = styled(Link)`
    background-color: #2550de;
    text-transform: uppercase;
    font-family: "Work Sans",sans-serif;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;
    line-height: 50px;
    font-weight: 600;
    display: inline-block;
    letter-spacing: 0.5px;
    padding: 0 30px;
    margin-top: 18px;
    -webkit-box-shadow: 0 3px 10px rgba(71, 44, 173, 0.2);
    box-shadow: 0 3px 10px rgba(71, 44, 173, 0.2);
    cursor:pointer;
    :hover{
        background-color: #263a4f;
        color: #fff;
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

ContentSection.propTypes = {
  
}

ContentSection.defaultProps = {
  
}

export default ContentSection
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const contentData = {
    image:"/contentImage1.jpg",
    title:"Responsive Web Design",
    description:"Instrument cultivated alteration any favourable expression law far nor. Both new like tore but year. An from mean on with when sing pain. Oh to as principles devonshire companions unsatiable an delightful. The ourselves suffering the sincerity. Inhabit her manners adapted age certain. Debating offended at branched striking be subjects.",
    subHead: "design"
}
const ContentComponents1 = () => {
    
    return (
      <>
        <BlockHeader>Block 1</BlockHeader>

        <SectionBackground>
            <Container>
                <StyledRow>
                    <div className="col-md-6 col-lg-6">
                        <ContentWrapper>
                            <ContentSubHead>
                                {contentData.subHead}
                            </ContentSubHead>
                            <ContentTitle>
                                {contentData.title}
                            </ContentTitle>
                            <ContentDescription>
                                {contentData.description}
                            </ContentDescription>
                        </ContentWrapper>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <StyledImage src={contentData.image}/>
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
    align-items:center;
`

const StyledImage = styled.img`
    margin-left: 1rem !important; 
    border-radius: 0.5rem !important;  
`
const ContentWrapper = styled.div`
    text-align:right;
    display:flex;
    flex-direction:column;
    padding:15px;
`

const ContentSubHead = styled.span`
    letter-spacing: 1px;
    font-weight: 500;
    font-size: .82031rem;
    color: #d3d3d3;
    text-transform: uppercase;
    font-family:Open Sans;
    margin-bottom: 1rem;
`

const ContentTitle = styled.h4`
    font-weight: 600;
    color: #323d47;
    letter-spacing: 0.5px;
    font-family:Dosis;
    font-size: 1.75781rem;
    margin-bottom: 28px;
    font-family: Dosis;
    line-height: 1.5;
    
`

const ContentDescription = styled.p`
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    font-family:Open Sans;
`

ContentComponents1.propTypes = {
  
}

ContentComponents1.defaultProps = {
  
}

export default ContentComponents1
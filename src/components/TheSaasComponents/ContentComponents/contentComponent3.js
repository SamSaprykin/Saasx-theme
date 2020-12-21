import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"


const contentData = {
    title:"Passionate about creating templates for startups",
    descriptions: [
        {
            title:"Our Mission",
            descritption:"Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure.",
        },
        {
            title:"Our Vision",
            descritption:"Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure.",
        }
    ]
}


const ContentComponents3 = () => {
    
    return (
      <>
        <BlockHeader>Block 3</BlockHeader>

        <SectionBackground>
            <Container>
                <StyledRow>
                   <Content>
                        <TitleContent className="col-md-3 mr-md-auto">
                            {contentData.title}
                        </TitleContent>
                        {
                            contentData.descriptions.map((info,index) =>{
                                return (
                                    <WrapperContent key={index} className="col-md-4">
                                        <TitleInfo>
                                            {info.title}
                                        </TitleInfo>
                                        <TextContent key={index}>
                                            {info.descritption}
                                        </TextContent>
                                    </WrapperContent>
                                )
                            })
                        }
                        
                        
                   </Content> 
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
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    margin: 30px 20px 100px;
    @media(max-width:768px) {
        padding-top: 4rem;
        padding-bottom: 4rem;
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
   
`

const TitleContent = styled.h3`
    text-align: right;
    font-weight: 400;
    line-height: 1.9;
    color: #757575;
    font-family:Open Sans;
    font-size: 1.64063rem;
    @media(max-width:576px) {
        font-size: 24px;
        margin-bottom:16px;
    }
`

const Content = styled.div`
    display:flex;
    justify-content:space-between;
    @media(max-width:576px) {
        flex-direction:column;
    }
`

const WrapperContent = styled.div`
    @media(max-width:576px) {
        margin-bottom:24px;
    }
`

const TitleInfo = styled.h4`
    letter-spacing: 0.75px;
    font-weight: 600;
    color: #323d47;
    font-size: 1.05469rem;
    font-family:Dosis;
    margin-bottom: .5rem;
    line-height:1.5;
    @media(max-width:576px) {
        font-size: 14.8px;
    }
`

const TextContent = styled.p`
    font-family:Open Sans;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    text-align: left;
    @media(max-width:576px) {
        font-size: 13px;
    }
`


ContentComponents3.propTypes = {
  
}

ContentComponents3.defaultProps = {
  
}

export default ContentComponents3
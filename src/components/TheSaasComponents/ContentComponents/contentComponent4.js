import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"


const contentData = {
    title:"Our Mission",
    descritpion:"We’re a team of creative and experienced designers and developers. We used to work as freelancers and we know what do you need and more that, we know what do your customers want from you.",
    listInfo: [
        " Deliver a high quality web design",
        " Support our customers once signing a contract",
        " Streamline an expanded array of web", 
        " Pursue web-enabled niche markets with professionals"
    ]
}

const ContentComponents4 = () => {
    
    return (
      <>
        <BlockHeader>Block 4</BlockHeader>

        <SectionBackground>
            <Container>

                <StyledRow>
                    <Content className="col-md-7">
                       <TitleInfo>{contentData.title}</TitleInfo>
                       <DescriptionInfo>{contentData.descritpion}</DescriptionInfo>
                       <ListInfo>
                            {
                                contentData.listInfo.map((item,index) => {
                                    return (
                                        <ListItem key={index}><i className="ti-check"></i>{item}</ListItem>
                                    )
                                })
                            }
                       </ListInfo>
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


const Content = styled.div`
    margin:0 auto;
`

const TitleInfo = styled.h3`
    font-weight: 400;
    color: #323d47;
    letter-spacing: 0.5px;
    font-size: 2.10938rem;
    margin-bottom: .5rem;
    line-height: 1.5;
    font-family:Dosis;
`

const DescriptionInfo = styled.p`
    font-size: 1.125rem;
    font-weight: 300;
    font-family:Open Sans;
    line-height: 1.9;
    color: #757575;
    margin-bottom:1rem;
`

const ListInfo = styled.ul`
    margin-top:20px;
    i {
        margin-right:15px;
        color: #3cd458 !important;
    }
`
const ListItem = styled.div`
    font-family: Open Sans;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    text-align: left;
    margin-bottom: 1rem;
`

ContentComponents4.propTypes = {
  
}

ContentComponents4.defaultProps = {
  
}

export default ContentComponents4
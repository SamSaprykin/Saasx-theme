import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const contentData = {
    image:"/blogCard4.jpg",
    title:"From The Founder",
    description:"Passage its ten led hearted removal cordial. Preference any astonished unreserved mrs. Prosperous understood middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from mr. Picture for attempt joy excited ten carried manners talking how. Suspicion neglected he resolving agreement perceived at an.<br /> <br /> Written enquire painful ye to offices forming it. Then so does over sent dull on. Likewise offended humoured mrs fat trifling answered. On ye position greatest so desirous. So wound stood guest weeks no terms up ought. By so these am so rapid blush songs begin.",
    subTitle: "Instrument cultivated alteration any favourable expression law far nor. Both new like tore but year. An from mean on with when sing pain."
}


const ContentComponents2 = () => {
    
    return (
      <>
        <BlockHeader>Block 2</BlockHeader>

        <SectionBackground>
            <Container>
                <StyledRow>
                    <div className="col-md-4 no-padding">
                        <Banner src={contentData.image} />
                    </div>
                    <div className="col-md-8">
                        <Content>
                            <ContentTitle>{contentData.title}</ContentTitle>
                            <ContentSubhead>{contentData.subTitle}</ContentSubhead>
                            <ContentText><div dangerouslySetInnerHTML={{ __html: `<div> ${contentData.description} </div>` }} /></ContentText>
                        </Content>
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
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    margin: 30px 20px 100px;
    background-color:#33323a;

`

const Container = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    position: relative;
    height: 100%;
`


const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: 0;
    margin-left: 0;
    
`

const ContentTitle = styled.h4`
    color: #fff;    
    font-weight: 500;
    letter-spacing: 0.5px;
    font-size: 1.52344rem;
    margin-bottom: .5rem;
    font-family:Dosis;
    line-height: 1.5;
    @media(max-width:576px) {
        font-size: 24px;
    }
`
const ContentSubhead = styled.h4`
    font-size: 1.125rem;
    font-family:Open Sans;
    font-weight: 300;
    margin-bottom: 1rem;
    line-height: 1.9;
    text-align: left;
    color: #fff; 
    @media(max-width:576px) {
        font-size: 15px;
    }
`

const ContentText = styled.p`
    color: rgba(255,255,255,0.85);
    margin-bottom: 1rem;
    font-family:Open Sans;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
`
const Banner = styled.img`  
    object-fit:cover;
    height:100%;
    max-height:516px;
    @media(max-width:768px) {
        max-height:808px;
    }
    @media(max-width:576px) {
        max-height:300px;
    }
`

const Content = styled.div`
    padding: 4rem;
    color: #fff;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    @media(max-width:576px) {
        padding: 28px 13px;
    }
`

ContentComponents2.propTypes = {
  
}

ContentComponents2.defaultProps = {
  
}

export default ContentComponents2
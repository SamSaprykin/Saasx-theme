import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import AnimeImage from "../../Animation/AnimeImage"

const featureData = {
    title:"A dashboard with metrics",
    descritption:"Mountains, in the not respect prior the brown must loyalty. Terms, sides house. A their people on separated tone english too.",
    quotedText:"Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.",
    quoteAuthorName:"Hossein Shams",
    quoteAutorMail:"@thethemeio"
}

const FeatureComponent13 = () => {
    
    return (
      <>
        <BlockHeader>Block 13</BlockHeader>
        <SectionBackground>
            <Container>
            
                <StyledRow>
                    <div className="col-md-4 text-align-left mx-auto">
                        <SectionTitle>{featureData.title}</SectionTitle>
                        <SectionDescription>{featureData.descritption}</SectionDescription>
                        <Rating>
                            <label class="fa fa-star"></label>
                            <label class="fa fa-star"></label>
                            <label class="fa fa-star"></label>
                            <label class="fa fa-star"></label>
                            <label class="fa fa-star"></label>
                        </Rating>
                        <TextQuoted>
                            " {featureData.quotedText} "
                        </TextQuoted>
                        <AuthorWrapper>
                            <AuthorInfo>
                                <img className="avatar" src="/avatar.jpg" />
                            </AuthorInfo>
                            <AuthorDetails>
                                <AuthorName>{featureData.quoteAuthorName}</AuthorName>
                                <AuthorMail>{featureData.quoteAutorMail}</AuthorMail>
                            </AuthorDetails>
                        </AuthorWrapper>
                        

                    </div>
                    <div className="col-md-6 text-center">
                        <AnimeImage>
                            <img src="/laptop-1.png" />
                        </AnimeImage>
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
    border: 1px solid #f5f6f7;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    @media (max-width: 768px) {
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
    
`

const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    text-align:center;
    hr {
        width: 5% !important;
        margin: 2rem auto;
        border-top: 1px solid rgba(117,117,117,0.09);
    }
    .text-align-left {
        text-align:left;
    }

`

const SectionTitle = styled.h2`
    color: #323d47;
    letter-spacing: 0.5px;
    font-family:Dosis;
    font-weight: 500;
    font-size: 2.10938rem;
    margin-bottom:8px;
    @media (max-width: 576px) {
        font-size:30px;
    }
`

const SectionDescription = styled.p`
    margin-bottom: 1rem;
    margin-top:1rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    font-family:Open Sans;
    font-size: 1.125rem;
`


const Rating = styled.div`
    margin-top: 5rem !important;
    color: #ffba00;
    label {
        margin-right: 5px;
        letter-spacing: .5px;
        margin-bottom: 4px;
    }
`

const TextQuoted = styled.p`
    margin:15px 0;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    text-align: left;
    font-family:Open Sans;
`

const AuthorInfo = styled.div`
    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 10rem;
        margin-right: 1rem !important;
    }
`

const AuthorWrapper = styled.div`
    display:flex;
    @media (max-width: 576px) {
        margin-bottom:3rem;
    }
`

const AuthorDetails = styled.div`
    display:flex;
    flex-direction:column;
`

const AuthorName  = styled.h5`
    margin-bottom:0;
    letter-spacing: 0.75px;
    font-weight: 500;
    color: #323d47;
    font-family:Dosis;
    line-height: 1.5;
    font-size: 1.05469rem;
`

const AuthorMail = styled.span`
    font-size:12.75px;
    color: #757575;
    text-align: left;
    font-family:Open Sans;
`

FeatureComponent13.propTypes = {
  
}

FeatureComponent13.defaultProps = {
  
}

export default FeatureComponent13
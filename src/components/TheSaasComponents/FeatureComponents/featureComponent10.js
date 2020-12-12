import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import AnimeImage from "../../Animation/AnimeImage"

const featureData = {
    title:"Unlimited Layout Option",
    descritption:"Designer duties, not just some of legs, the attained secure large obscurity, with I model most we his odd trade, made the an and another narrow she of other big in.",
    listItems: [
        "Can was instantly as being"," After hands real five should"," Young the writer's a was","As immediately the we people"
    ]
}

const FeatureComponent10 = () => {
    
    return (
      <>
        <BlockHeader>Block 10</BlockHeader>
        <SectionBackground>
            <Container>
            
                <StyledRow>
                    <div className="col-lg-5 align-self-center">
                            <AnimeImage>
                                <img src="/header-gradient.jpg" />
                            </AnimeImage>
                    </div>
                    <div className="col-10 col-lg-6 mx-auto text-center text-lg-left">
                            <SectionTitle>{featureData.title}</SectionTitle>
                            <SectionDescription>{featureData.descritption}</SectionDescription>
                            <hr />
                            <ul>
                                {
                                    featureData.listItems.map((item,index) => {
                                        return (
                                            <WrapperList key={index}>
                                                <i class="ti-check text-success mr-2" />
                                                <li>{item}</li>
                                            </WrapperList>  
                                        )
                                    })
                                }
                            </ul>
                            <CallToAction href="/">
                                Read more
                                <i className="ti-arrow-right fs-10 ml-1" />
                            </CallToAction>
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
`

const Container = styled.div`
    position: relative;
    height: 100%;
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
        padding-top: 15px;
        padding-bottom: 15px;
    }

`

const SectionTitle = styled.h2`
    color: #323d47;
    letter-spacing: 0.5px;
    font-family:Dosis;
    font-weight: 500;
    font-size: 2.10938rem;
    line-height: 1.5;
    margin-bottom: .5rem;
    
`

const SectionDescription = styled.p`
    font-size: 1.125rem;
    line-height: 1.9;
    color: #757575;
    font-family:Open Sans;
    letter-spacing: 0.5px;
    font-weight: 300;
    margin-bottom: 1rem;
`

const WrapperList = styled.div`
    display:flex;
    margin-bottom: 1rem;
    li {
        margin:0;
        font-size: 14px !important;
        font-weight: 300;
        line-height: 1.9;
        color: #757575;
        text-align: left;
        font-family:Open Sans;
    }
    i {
        display:flex;
        align-items:center;
        justify-content:center;
    }
`

const CallToAction = styled.a`
    font-weight: 600 !important;
    font-size: .82031rem !important;
    color: #50a1ff;
    text-transform: uppercase !important;
    font-family:Open Sans;
    line-height: 1.9;
    letter-spacing: 2px;
    cursor:pointer;
    margin-top: 3rem !important;
    margin-bottom:1rem;
    display:block;
    max-width:160px;
    i {
        font-size: 10px !important;
    }
`


FeatureComponent10.propTypes = {
  
}

FeatureComponent10.defaultProps = {
  
}

export default FeatureComponent10
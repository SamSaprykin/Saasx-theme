import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import AnimSide from "../Animation/AnimSide"
import styled from "styled-components"

const FeaturesSection = ({leftSide}) => {
    let columnSize 
    let columnWrapper
    if(leftSide) {
        columnSize = "lg-6"
        columnWrapper = "lg-6"
    } else {
        columnSize = "lg-3"
        columnWrapper = "lg-12"
    }
    return (
    <FeaturesSectionWrapper>
        <Container>
            <FeaturesWrapper >
                { leftSide && (
                    
                        <div className="col-lg-6 sm-padding">
                            <AnimSide reversed="true">
                            <FeaturesContent >
                                <div className="section-heading">
                                    <h4 className="sub-heading">Our Features</h4>
                                    <h2>Revolutionize your online <br />business today!</h2>
                                </div>
                                <p>The business carrent account that is your Accounting software.
                                <br />A simple way to run your business</p>
                                <ButtonPlay>
                                    <i className="fa fa-play-circle"></i><span>Watch Video</span>
                                </ButtonPlay>
                            </FeaturesContent>
                            </AnimSide>
                        </div>
                    
                    
                )}
                
                    <div className={`col-${columnWrapper} sm-padding`}>
                        <div className="row">
                        
                            <Column className={`col-${columnSize} padding-15`}>
                                <AnimSide delay="0.1">
                                <FeatureItem >
                                    <i className="ti-bar-chart"></i>
                                    <h3 className="title-features">Data Analytics</h3>
                                    <p>The business carrent account that is your Accounting software.
                                    A simple way to run your business</p>
                                </FeatureItem>
                                </AnimSide>
                            </Column>
                            <Column className={`col-${columnSize} padding-15`} >
                                <AnimSide delay="0.12">
                                <FeatureItem >
                                    <i className="ti-agenda"></i>
                                    <h3 className="title-features">Unlimited Bandwidth</h3>
                                    <p>The business carrent account that is your Accounting software.
                                    A simple way to run your business</p>
                                </FeatureItem>
                                </AnimSide>
                            </Column>
                            <Column className={`col-${columnSize} padding-15`}>
                                <AnimSide delay="0.14">
                                <FeatureItem >
                                    <i className="ti-layers-alt"></i>
                                    <h3 className="title-features">Intellegent Chart</h3>
                                    <p>The business carrent account that is your Accounting software. A simple way to run your business</p>
                                </FeatureItem>
                                </AnimSide>
                            </Column>
                            <Column className={`col-${columnSize} padding-15`}>
                                <AnimSide delay="0.16">
                                <FeatureItem >
                                    <i className="ti-pie-chart"></i>
                                    <h3 className="title-features">Cloud Data Saved</h3>
                                    <p>The business carrent account that is your Accounting software. A simple way to run your business</p>
                                </FeatureItem>
                                </AnimSide>
                            </Column>
                        
                        </div>
                    </div>
                
                
            </FeaturesWrapper>
        </Container>
    </FeaturesSectionWrapper>
    )
}

const FeaturesSectionWrapper = styled.section`
    padding: 100px 0;
    border-bottom: 1px solid #e5e5e5;
    @media (max-width: 576px) {
        text-align:center;
    }
    @media (max-width: 767px) {
        padding: 60px 0;
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

const FeaturesWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    
    
`

const Column = styled.div`
    @media (max-width: 768px) {
        flex: 0 0 50%;
        max-width: 50%;
    }
    @media (max-width: 576px) {
        flex: 0 0 100%;
        max-width: 100%;
    }
`

const FeaturesContent = styled.div`
    .sub-heading {
        display: inline-block;
        text-transform: uppercase;
        font-size: 12px;
        color: #fa071c;
        font-weight: 600;
        letter-spacing: 0;
        font-family: "Work Sans",sans-serif;
        position: relative;
        margin-bottom: 10px;
        z-index: 1;
    }
    p {
        margin-bottom: 30px;
    }
    h2{
        font-size: 36px;
        margin-bottom: 20px;
        @media (max-width: 767px) {
            font-size: 24px;
            margin-bottom: 20px;
            line-height: 36px;
            text-align: center;
        }
        span{
            color: #111;
        }
    }
`

const ButtonPlay = styled.button`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        margin:0 auto;
    }
    i {
        font-size: 50px;
        color: #007bff;
        display: flex;
        align-items: center;
    }
    :hover{
        opacity: 0.8;
    }
    span{
        font-family: "Work Sans",sans-serif;
        font-size: 12px;
        margin-left: 10px;
        text-transform: uppercase;
        color: #263a4f;
        font-weight: 600;
        letter-spacing: 0;
    }
`

const FeatureItem = styled.div`
    .title-features {
        font-weight: 600;
    }
    i{
        font-size: 40px;
        color: #007bff;
        margin-bottom: 15px;
        display: block;
    }
    @media (max-width: 767px) {
        text-align: center;
        padding: 0 40px;
    }
`


FeaturesSection.propTypes = {
  
}

FeaturesSection.defaultProps = {
  
}

export default FeaturesSection